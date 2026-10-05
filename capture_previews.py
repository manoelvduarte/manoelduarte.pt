import os
import sys
from playwright.sync_api import sync_playwright

targets = [
    {
        "id": "house-of-mellie",
        "url": "https://house-of-mellie.vercel.app",
        "file": "house-of-mellie.png"
    },
    {
        "id": "foroai",
        "url": "https://foroai.com.br",
        "file": "foroai.png"
    },
    {
        "id": "editalradar",
        "url": "https://editalradar.grupohubdaia.com.br",
        "file": "editalradar.png"
    },
    {
        "id": "newprint",
        "url": "https://gruponewprintctp.com.br",
        "file": "newprint.png"
    },
    {
        "id": "bbrstory",
        "url": "https://bbrstory.net",
        "file": "bbrstory.png"
    },
]

out_dir = os.path.abspath(r"public\assets\projects")
os.makedirs(out_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge", headless=True)
    context = browser.new_context(
        viewport={"width": 1280, "height": 800},
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0"
    )

    for item in targets:
        out_path = os.path.join(out_dir, item["file"])
        print(f"Capturing {item['id']} from {item['url']}...")
        page = context.new_page()
        try:
            resp = page.goto(item["url"], wait_until="load", timeout=25000)
            status = resp.status if resp else "no-resp"
            print(f"  Status for {item['id']}: {status}")
            page.wait_for_timeout(3000)
            page.screenshot(path=out_path, clip={"x": 0, "y": 0, "width": 1280, "height": 800})
            print(f"  Saved {out_path} ({os.path.getsize(out_path)} bytes)")
        except Exception as e:
            print(f"  Error capturing {item['id']}: {e}")
        finally:
            page.close()

    browser.close()

print("Capture finished.")
