import { C as l } from "./componentManager.NVvah-7B.js";
import { $ as d, S as c } from "./Scroll.BVHAPhMX.js";
import { g as n } from "./index.Brfk6Bdo.js";
import { f as a } from "./index.esm.2iOmfyvB.js";
import "./index.BSdFiPHn.js";
import "./index.DtsRjIc2.js";
class s extends HTMLElement {
  static CLASS_HIDDEN = "is-hidden";
  static CLASS_MENU_OPEN = "menu-is-open";
  static CLASS_CONTACT_OPEN = "contact-is-open";
  static ACTIVE_CLASS = "is-active";
  static KEYBOARD_ACCESSIBILITY_CLASS = "keyboard-user";
  lastScrollTop = 0;
  scrollThreshold = 10;
  unbindScrollListener;
  mobileMenuTriggers;
  onScrollBind;
  onKeyDownBind;
  onMouseMoveBind;
  _isDesktop;
  navItems;
  panel;
  onEscKeyBind;
  backdrop;
  onResizeBind;
  isTouch;
  modalIsOpen = !1;
  constructor() {
    (super(),
      (this.onScrollBind = this.onScroll.bind(this)),
      (this.onKeyDownBind = this.onKeyDown.bind(this)),
      (this.onMouseMoveBind = this.onMouseMove.bind(this)),
      (this.toggleMenu = this.toggleMenu.bind(this)),
      (this.onResizeBind = this.onResize.bind(this)),
      (this.onEscKeyBind = this.onEscKey.bind(this)),
      (this.mobileMenuTriggers = this.querySelectorAll(
        ".js-mobile-menu-trigger",
      )),
      (this.panel = this.querySelector(".c-site-header_nav")),
      (this.navItems = this.querySelectorAll(".c-site-header_nav-item")),
      (this.backdrop = this.querySelector(".c-site-header-backdrop")),
      (this._isDesktop = window.matchMedia("(min-width: 1023px)").matches),
      (this.modalIsOpen =
        document.body.classList.contains(s.CLASS_CONTACT_OPEN) ||
        this.classList.contains(s.CLASS_MENU_OPEN)),
      (this.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0),
      this._isDesktop || this.disableTabIndex(),
      this.navItems.forEach((t) => {
        t.addEventListener("click", () => {
          !this.isDesktop &&
            this.classList.contains(s.CLASS_MENU_OPEN) &&
            !t.classList.contains("js-contact-trigger") &&
            this.toggleMenu();
        });
      }),
      this.backdrop?.addEventListener("click", () => {
        this.toggleMenu();
      }));
  }
  get isDesktop() {
    return this._isDesktop;
  }
  disableTabIndex() {
    const t = this.panel?.querySelectorAll("a, button");
    t &&
      t.forEach((e) => {
        e.setAttribute("tabindex", "-1");
      });
  }
  enableTabIndex() {
    const t = this.panel?.querySelectorAll("a, button");
    t &&
      t.forEach((e) => {
        e.removeAttribute("tabindex");
      });
  }
  onResize() {
    ((this._isDesktop = window.matchMedia("(min-width: 1023px)").matches),
      this._isDesktop
        ? (document.documentElement.classList.remove("is-mobile-size"),
          n.set([this.navItems, this.panel], { clearProps: "all" }),
          this.enableTabIndex(),
          this.panel && a.off(this.panel))
        : (this.modalIsOpen && this.toggleMenu(!0, !0),
          document.documentElement.classList.add("is-mobile-size")));
  }
  connectedCallback() {
    (this.bindEvents(),
      this.updateActiveNavItem(),
      this.observeNavigation(),
      this.onResize(),
      this.isTouch && document.documentElement.classList.add("is-touch"));
  }
  disconnectedCallback() {
    this.unbindEvents();
  }
  bindEvents() {
    ((this.unbindScrollListener = d.subscribe(this.onScrollBind)),
      window.addEventListener("keydown", this.onKeyDownBind),
      window.addEventListener("mousemove", this.onMouseMoveBind),
      window.addEventListener("keydown", this.onEscKeyBind),
      window.addEventListener("resize", this.onResizeBind));
    for (let t = 0; t < this.mobileMenuTriggers.length; t++)
      this.mobileMenuTriggers[t].addEventListener("click", () =>
        this.toggleMenu(),
      );
  }
  unbindEvents() {
    (this.unbindScrollListener?.(),
      window.removeEventListener("keydown", this.onKeyDownBind),
      window.removeEventListener("mousemove", this.onMouseMoveBind),
      window.removeEventListener("keydown", this.onEscKeyBind),
      window.removeEventListener("resize", this.onResizeBind));
    for (let t = 0; t < this.mobileMenuTriggers.length; t++)
      this.mobileMenuTriggers[t].removeEventListener("click", () =>
        this.toggleMenu(),
      );
  }
  onScroll(t) {
    const e = t.scroll;
    Math.abs(this.lastScrollTop - e) <= this.scrollThreshold ||
      (e > this.lastScrollTop && e > 50
        ? this.classList.add(s.CLASS_HIDDEN)
        : (this.classList.remove(s.CLASS_HIDDEN),
          this.classList.remove(s.CLASS_MENU_OPEN),
          this.classList.remove(s.CLASS_CONTACT_OPEN)),
      (this.lastScrollTop = e));
  }
  onMouseMove() {
    document.documentElement.classList.remove(s.KEYBOARD_ACCESSIBILITY_CLASS);
  }
  onKeyDown(t) {
    t.key === "Tab" &&
      document.documentElement.classList.add(s.KEYBOARD_ACCESSIBILITY_CLASS);
  }
  onEscKey(t) {
    t.key === "Escape" &&
      this.classList.contains(s.CLASS_MENU_OPEN) &&
      this.toggleMenu();
  }
  toggleMenu(t, e = !1) {
    if (this.isDesktop && !e) return;
    t = t ?? !this.modalIsOpen;
    const i = document.body.classList.contains(s.CLASS_CONTACT_OPEN);
    if (t && i) {
      const o = document.querySelector("c-contact-modal");
      o && o.toggleContact(!1);
    }
    if (
      (this.classList.toggle(s.CLASS_MENU_OPEN),
      (this.modalIsOpen = t),
      this.backdrop &&
        (this.backdrop.style.pointerEvents = t ? "auto" : "none"),
      this.panel && (this.panel.style.pointerEvents = t ? "auto" : "none"),
      i || (this.modalIsOpen ? c.stop() : c.start()),
      t)
    )
      (this.enableTabIndex(),
        this.panel && a.on(this.panel),
        n.fromTo(
          this.panel,
          { y: "-110%", opacity: 0 },
          { duration: 0.4, y: "0%", opacity: 1, ease: "expo.out" },
        ),
        n.fromTo(
          this.backdrop,
          { opacity: 0 },
          { duration: 0.2, opacity: 0.4, ease: "expo.out" },
        ),
        n.fromTo(
          this.navItems,
          { opacity: 0, y: 40 },
          {
            duration: 0.4,
            opacity: 1,
            y: 0,
            ease: "expo.out",
            stagger: 0.04,
            delay: 0.2,
          },
        ));
    else {
      (this.panel && a.off(this.panel), this.disableTabIndex());
      const o = n.timeline();
      (o.fromTo(
        this.navItems,
        { opacity: 1, y: 0 },
        { duration: 0.1, opacity: 0, y: 0, ease: "expo.out" },
        0,
      ),
        o.fromTo(
          this.backdrop,
          { opacity: 0.4 },
          { duration: 0.2, opacity: 0, ease: "expo.out" },
          0,
        ),
        o.fromTo(
          this.panel,
          { y: "0%", opacity: 1 },
          { duration: 0.3, y: "0%", opacity: 0, ease: "expo.out" },
          0,
        ));
    }
  }
  toggleContact() {
    (document.body.classList.remove(s.CLASS_MENU_OPEN),
      document.body.classList.toggle(s.CLASS_CONTACT_OPEN));
    const t = document.querySelector("c-contact-modal");
    t && t.toggleContact(!0);
  }
  observeNavigation() {
    window.addEventListener("popstate", () => {
      this.updateActiveNavItem();
    });
    const t = history.pushState;
    history.pushState = function (...i) {
      (t.apply(this, i),
        window.dispatchEvent(new Event("pushstate")),
        window.dispatchEvent(new Event("locationchange")));
    };
    const e = history.replaceState;
    ((history.replaceState = function (...i) {
      (e.apply(this, i), window.dispatchEvent(new Event("locationchange")));
    }),
      window.addEventListener("pushstate", () => {
        this.updateActiveNavItem();
      }),
      window.addEventListener("locationchange", () => {
        this.updateActiveNavItem();
      }));
  }
  updateActiveNavItem() {
    const t = window.location.pathname;
    (!t.endsWith("gallery") &&
      !t.endsWith("galerie") &&
      (document.documentElement.classList.remove("gallery-page"),
      document.documentElement.classList.remove("gallery-transition")),
      this.navItems.forEach((e) => {
        e.getAttribute("data-nav-id") === t
          ? e.classList.add(s.ACTIVE_CLASS)
          : e.classList.remove(s.ACTIVE_CLASS);
      }));
  }
}
customElements.define("c-site-header", l(s, "SiteHeader"));
export { s as default };
