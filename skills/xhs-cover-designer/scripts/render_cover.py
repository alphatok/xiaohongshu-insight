#!/usr/bin/env python3
"""用本机 Chrome 无头模式把封面 HTML 截成 PNG。

用法:
    python3 render_cover.py covers/foo.html --size 1080x1440
    python3 render_cover.py covers/foo.html --size 1080x322 --scale 2 --hide ".download-btn"
"""

import argparse
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

CHROME_CANDIDATES = [
    os.environ.get("CHROME", ""),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
]


def find_chrome() -> str:
    for path in CHROME_CANDIDATES:
        if path and Path(path).is_file():
            return path
    for name in ("google-chrome", "chromium", "chromium-browser", "chrome"):
        found = shutil.which(name)
        if found:
            return found
    sys.exit("找不到 Chrome/Chromium，可用环境变量 CHROME 指定可执行文件路径")


def main():
    ap = argparse.ArgumentParser(description="封面 HTML 截图")
    ap.add_argument("html", help="封面 HTML 文件")
    ap.add_argument("--size", default="1080x1440", help="宽x高，默认 1080x1440（小红书 3:4）")
    ap.add_argument("--scale", type=float, default=1, help="像素密度，导出高清用 2")
    ap.add_argument("--out", help="输出 PNG，默认与 HTML 同名")
    ap.add_argument("--hide", help="截图前隐藏的 CSS 选择器（如下载按钮）")
    args = ap.parse_args()

    src = Path(args.html).resolve()
    if not src.is_file():
        sys.exit(f"文件不存在：{src}")
    try:
        w, h = (int(x) for x in args.size.lower().split("x"))
    except ValueError:
        sys.exit("--size 格式应为 1080x1440")
    out = Path(args.out) if args.out else src.with_suffix(".png")

    html_path = src
    tmp = None
    if args.hide:
        css = f"<style>{args.hide}{{display:none!important}}</style>"
        content = src.read_text(encoding="utf-8")
        content = content.replace("</head>", css + "</head>", 1) if "</head>" in content else css + content
        tmp = Path(tempfile.mkstemp(suffix=".html")[1])
        tmp.write_text(content, encoding="utf-8")
        html_path = tmp

    cmd = [
        find_chrome(),
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--no-sandbox",
        "--allow-file-access-from-files",
        f"--window-size={w},{h}",
        f"--force-device-scale-factor={args.scale}",
        f"--screenshot={out}",
        html_path.as_uri(),
    ]
    try:
        subprocess.run(cmd, check=True, capture_output=True, timeout=120)
    except subprocess.CalledProcessError as e:
        sys.exit(f"截图失败：{e.stderr.decode(errors='ignore')[:500]}")
    finally:
        if tmp:
            tmp.unlink(missing_ok=True)

    if not out.is_file():
        sys.exit("截图未生成，检查 HTML 是否可正常打开")
    print(f"已生成 {out}（{w}x{h} @{args.scale}x）")


if __name__ == "__main__":
    main()
