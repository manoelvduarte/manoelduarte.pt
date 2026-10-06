from playwright.sync_api import sync_playwright

url = "https://manoelduarte.vercel.app"
errors = []

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge", headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.on("pageerror", lambda err: errors.append(str(err)))
    page.goto(url, wait_until="networkidle")

    title = page.title()
    h1 = page.locator("h1").inner_text()
    wa_links = page.evaluate("() => Array.from(document.querySelectorAll('a[href*=\"wa.me\"]')).map(a => a.href)")
    overflow = page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")

    browser.close()

print("Title:", title)
print("H1:", h1)
print(f"Total WhatsApp Links: {len(wa_links)}")
print(f"All WhatsApp valid: {all('351924179047' in l for l in wa_links)}")
print(f"Horizontal Overflow: {overflow}")
print(f"JS Errors: {errors}")
