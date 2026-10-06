import os
from playwright.sync_api import sync_playwright
from PIL import Image

targets = [
    {
        'id': 'construmoura',
        'url': 'https://construmoura.com.br/',
        'png': 'public/assets/projects/construmoura.png',
        'webp': 'public/assets/projects/construmoura.webp'
    },
    {
        'id': 'frizon',
        'url': 'https://www.frizonconstrutora.com.br/',
        'png': 'public/assets/projects/frizon.png',
        'webp': 'public/assets/projects/frizon.webp'
    }
]

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    context = browser.new_context(
        viewport={'width': 1280, 'height': 800},
        user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    )
    for t in targets:
        page = context.new_page()
        try:
            print(f"Visiting {t['url']}...")
            page.goto(t['url'], wait_until='load', timeout=25000)
            page.wait_for_timeout(3000)
            title = page.title()
            print(f"{t['id']} Title: {title}")
            
            # Extract meta description or heading
            h1 = page.locator('h1').all_inner_texts()
            print(f"{t['id']} H1: {h1}")
            
            page.screenshot(path=t['png'], clip={'x': 0, 'y': 0, 'width': 1280, 'height': 800})
            print(f"Screenshot saved: {t['png']}")
            
            # Convert to WebP
            img = Image.open(t['png']).convert('RGB')
            img.save(t['webp'], 'WEBP', quality=82)
            print(f"WebP saved: {t['webp']} ({os.path.getsize(t['webp'])} bytes)")
        except Exception as e:
            print(f"Error for {t['id']}: {e}")
        finally:
            page.close()
    browser.close()

print("Capture finished.")
