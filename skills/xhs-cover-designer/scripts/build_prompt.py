#!/usr/bin/env python3
"""把「平台基础提示词 + 风格提示词 + 用户输入」拼装成一条可直接发送的完整提示词。

用法:
    python3 build_prompt.py --list
    python3 build_prompt.py --platform xhs --style 08 \
        --title "还在用 PPT？教你用 Claude 生成文档可视化网页" \
        --account "歸藏(guizang.ai)" --tagline "正儿八经学AI"

    python3 build_prompt.py --platform wechat --style 02 --title "..." --out prompt.txt
"""

import argparse
import os
import sys
from pathlib import Path

PLATFORM_FILE = {"xhs": "xiaohongshu-cover.md", "wechat": "wechat-cover.md"}
USER_INPUT_HEADING = "## 用户输入内容"


def find_assets() -> Path:
    env = os.environ.get("XHS_PROMPT_ASSETS")
    if env:
        return Path(env).expanduser()
    here = Path(__file__).resolve()
    for parent in here.parents:
        candidate = parent / "prompt-assets" / "xhs-cover-prompts"
        if candidate.is_dir():
            return candidate
    sys.exit(
        "找不到提示词资产目录。请设置环境变量 XHS_PROMPT_ASSETS 指向 "
        "prompt-assets/xhs-cover-prompts"
    )


def load_styles(assets: Path):
    styles = []
    for d in sorted((assets / "styles").iterdir()):
        if not d.is_dir():
            continue
        prompt = d / "prompt.md"
        if prompt.is_file():
            styles.append((d.name, prompt))
    return styles


def resolve_style(assets: Path, key: str) -> Path:
    styles = load_styles(assets)
    for name, path in styles:
        if name == key or name.split("-")[0] == key or name.split("-", 1)[1] == key:
            return path
    for name, path in styles:
        if key in path.read_text(encoding="utf-8").splitlines()[1]:
            return path
    sys.exit(f"未找到风格 {key!r}，可用：{', '.join(n for n, _ in styles)}")


def split_user_input(text: str):
    idx = text.find(USER_INPUT_HEADING)
    if idx == -1:
        return text.rstrip(), ""
    return text[:idx].rstrip(), text[idx:]


def strip_html_comments(text: str) -> str:
    lines = [l for l in text.splitlines() if not l.strip().startswith("<!--")]
    return "\n".join(lines).strip()


def style_title(prompt_text: str) -> str:
    for line in prompt_text.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return "未命名风格"


def build(args, assets: Path) -> str:
    base_path = assets / "base" / PLATFORM_FILE[args.platform]
    base = strip_html_comments(base_path.read_text(encoding="utf-8"))
    base_main, _ = split_user_input(base)

    style_path = resolve_style(assets, args.style)
    style_raw = strip_html_comments(style_path.read_text(encoding="utf-8"))
    name = style_title(style_raw)
    style_body = style_raw.split("\n", 1)[1].strip() if "\n" in style_raw else ""
    style_body = "\n".join(
        "#" + line if line.startswith("## ") else line for line in style_body.splitlines()
    )

    parts = [base_main, "", f"## 风格要求：{name}", "", style_body, "", USER_INPUT_HEADING, ""]

    rows = []
    if args.title:
        rows.append(f"- 封面标题：{args.title}")
    if args.copy:
        rows.append(f"- 封面文案：{args.copy}")
    if args.platform == "xhs":
        if args.account:
            rows.append(f"- 账号名称：{args.account}")
        if args.tagline:
            rows.append(f"- 可选标语：{args.tagline}")
    else:
        if args.account:
            rows.append(f"- 公众号名称：{args.account}")
    if args.emoji:
        rows.append(f"- emoji 图片：{args.emoji}")
    if args.bg:
        rows.append(f"- 背景图：{args.bg}")
    if args.extra:
        rows.append(f"- 补充要求：{args.extra}")
    parts.extend(rows)
    return "\n".join(parts).rstrip() + "\n"


def main():
    ap = argparse.ArgumentParser(description="拼装小红书 / 公众号封面提示词")
    ap.add_argument("--platform", choices=["xhs", "wechat"], help="xhs=小红书 3:4，wechat=公众号 3.35:1")
    ap.add_argument("--style", help="风格编号(01-10)、英文 slug 或中文名片段")
    ap.add_argument("--title", help="封面主标题 / 公众号标题")
    ap.add_argument("--copy", help="原始长文案，模型会提炼成 30-40 字")
    ap.add_argument("--account", help="账号 / 公众号名称")
    ap.add_argument("--tagline", help="可选标语（仅小红书）")
    ap.add_argument("--emoji", help="emoji 或素材图片 URL")
    ap.add_argument("--bg", help="背景图 URL")
    ap.add_argument("--extra", help="额外要求")
    ap.add_argument("--out", help="写入文件，默认打印到 stdout")
    ap.add_argument("--list", action="store_true", help="列出全部风格")
    args = ap.parse_args()

    assets = find_assets()
    if args.list:
        for name, path in load_styles(assets):
            title = style_title(strip_html_comments(path.read_text(encoding="utf-8")))
            print(f"{name}\t{title}")
        return
    if not (args.platform and args.style):
        ap.error("需要同时指定 --platform 和 --style（或用 --list 查看风格）")

    prompt = build(args, assets)
    if args.out:
        Path(args.out).write_text(prompt, encoding="utf-8")
        print(f"已写入 {args.out}（{len(prompt)} 字符）", file=sys.stderr)
    else:
        print(prompt)


if __name__ == "__main__":
    main()
