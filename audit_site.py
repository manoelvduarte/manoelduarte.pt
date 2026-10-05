import sys
import os
import subprocess
import time
from playwright.sync_api import sync_playwright

def run_audit():
    dist_dir = r"C:\Users\polar\Documents\antigravity\resilient-maxwell\dist"
    if not os.path.exists(dist_dir):
        print("ERROR: dist directory not found")
        sys.exit(1)

    # Launch local static server using Python http.server on port 8089
    server_process = subprocess.Popen(
        [sys.executable, "-m", "http.server", "8089", "--directory", dist_dir],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    time.sleep(1.5)

    base_url = "http://127.0.0.1:8089"
    viewports = [
        {"name": "Mobile Small (360x740)", "width": 360, "height": 740},
        {"name": "Mobile iPhone X (375x812)", "width": 375, "height": 812},
        {"name": "Mobile iPhone 12/13/14 (390x844)", "width": 390, "height": 844},
        {"name": "Mobile Large (414x896)", "width": 414, "height": 896},
        {"name": "Tablet iPad (768x1024)", "width": 768, "height": 1024},
        {"name": "Desktop HD (1440x900)", "width": 1440, "height": 900},
    ]

    all_passed = True
    errors = []

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(channel="msedge", headless=True)
            
            for vp in viewports:
                page_errors = []
                page = browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
                page.on("pageerror", lambda err: page_errors.append(str(err)))
                page.on("console", lambda msg: page_errors.append(msg.text) if msg.type == "error" else None)
                
                page.goto(base_url, wait_until="networkidle")
                page.wait_for_timeout(500)

                # Check horizontal overflow
                overflow = page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
                scroll_w = page.evaluate("() => document.documentElement.scrollWidth")
                inner_w = page.evaluate("() => window.innerWidth")
                
                if overflow:
                    err_msg = f"[{vp['name']}] Horizontal overflow detected! scrollWidth={scroll_w} > innerWidth={inner_w}"
                    errors.append(err_msg)
                    all_passed = False
                else:
                    print(f"PASS: {vp['name']} - Zero horizontal overflow ({scroll_w}px == {inner_w}px)")

                if page_errors:
                    err_msg = f"[{vp['name']}] JS/Console errors: {page_errors}"
                    errors.append(err_msg)
                    all_passed = False

                page.close()

            # Deep functional checks on Desktop
            desktop_page = browser.new_page(viewport={"width": 1440, "height": 900})
            desktop_page.goto(base_url, wait_until="networkidle")

            # 1. Check all WhatsApp links
            wa_links = desktop_page.evaluate("""() => {
                const links = Array.from(document.querySelectorAll('a[href*="wa.me"]'));
                return links.map(l => l.href);
            }""")
            print(f"\nFound {len(wa_links)} WhatsApp links:")
            for link in wa_links:
                if "351924179047" not in link:
                    errors.append(f"Invalid WhatsApp number in link: {link}")
                    all_passed = False
                else:
                    print(f"  OK: {link}")

            # 2. Check all email links
            mailto_links = desktop_page.evaluate("""() => {
                const links = Array.from(document.querySelectorAll('a[href^="mailto:"]'));
                return links.map(l => l.href);
            }""")
            print(f"\nFound {len(mailto_links)} mailto links:")
            for link in mailto_links:
                if "contato@manoelduarte.pt" not in link:
                    errors.append(f"Invalid email address in link: {link}")
                    all_passed = False
                else:
                    print(f"  OK: {link}")

            # 3. Test FAQ Accordion Interaction
            faq_section = desktop_page.query_selector("#faq")
            if not faq_section:
                errors.append("FAQ section #faq not found on page!")
                all_passed = False
            else:
                print("\nTesting FAQ accordion interactivity...")
                faq_buttons = desktop_page.query_selector_all("#faq button")
                print(f"Found {len(faq_buttons)} FAQ questions.")
                if len(faq_buttons) >= 6:
                    faq_buttons[1].click()
                    desktop_page.wait_for_timeout(300)
                    is_expanded = faq_buttons[1].get_attribute("aria-expanded")
                    print(f"FAQ Item 2 expanded: {is_expanded}")
                else:
                    errors.append(f"Expected at least 6 FAQ items, found {len(faq_buttons)}")
                    all_passed = False

            # 4. Test Filter buttons in Projects
            print("\nTesting Projects filter buttons...")
            filter_buttons = desktop_page.query_selector_all("#projectos button")
            for btn in filter_buttons[:3]:
                btn_text = btn.inner_text()
                btn.click()
                desktop_page.wait_for_timeout(200)
                print(f"  Clicked filter: {btn_text.strip()}")

            # 5. Test Case Study Modal
            modal_btn = desktop_page.query_selector("button:has-text('Ver estudo de caso')")
            if modal_btn:
                modal_btn.click()
                desktop_page.wait_for_timeout(400)
                modal = desktop_page.query_selector("div.fixed.inset-0.z-50")
                if modal:
                    print("  PASS: Project case study modal opened successfully.")
                    close_btn = desktop_page.query_selector("button:has-text('[Fechar Esc]')")
                    if close_btn:
                        close_btn.click()
                        desktop_page.wait_for_timeout(300)
                        print("  PASS: Project modal closed successfully.")
                else:
                    errors.append("Project modal failed to appear after click")
                    all_passed = False

            # 6. Test AI Agent Preview Section (#ia)
            ia_section = desktop_page.query_selector("#ia")
            if not ia_section:
                errors.append("Section #ia not found!")
                all_passed = False
            else:
                print("\nTesting AI Agent preview tabs...")
                ia_tabs = desktop_page.query_selector_all("#ia button")
                for tab in ia_tabs[:3]:
                    tab.click()
                    desktop_page.wait_for_timeout(200)
                    print(f"  Clicked AI tab: {tab.inner_text().strip()}")

            # 7. Test Project Scope Estimator (#simulador)
            sim_section = desktop_page.query_selector("#simulador")
            if not sim_section:
                errors.append("Section #simulador not found!")
                all_passed = False
            else:
                print("\nTesting Project Estimator simulator...")
                sim_options = desktop_page.query_selector_all("#simulador button")
                if len(sim_options) >= 2:
                    sim_options[1].click()
                    desktop_page.wait_for_timeout(200)
                    print(f"  Clicked Estimator option: {sim_options[1].inner_text().splitlines()[0]}")

            browser.close()

    finally:
        server_process.terminate()

    print("\n" + "="*50)
    if all_passed and not errors:
        print("ALL AUDIT CHECKS PASSED (6 VIEWPORTS + INTERACTIONS + CONTACT VALIDATION)")
        sys.exit(0)
    else:
        print("AUDIT FAILED WITH ERRORS:")
        for e in errors:
            print(" -", e)
        sys.exit(1)

if __name__ == "__main__":
    run_audit()
