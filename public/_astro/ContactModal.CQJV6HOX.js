import { g as a } from "./index.Brfk6Bdo.js";
import { C as h } from "./componentManager.NVvah-7B.js";
import { S as l } from "./Scroll.BVHAPhMX.js";
import { f as d } from "./index.esm.2iOmfyvB.js";
import "./index.BSdFiPHn.js";
import "./index.DtsRjIc2.js";
class p extends HTMLElement {
  isOpen = !1;
  tl;
  backdrop = null;
  constructor() {
    (super(), this.init());
  }
  disableTabIndex() {
    const t = this.querySelectorAll("a, button");
    t &&
      t.forEach((e) => {
        e.setAttribute("tabindex", "-1");
      });
  }
  enableTabIndex() {
    const t = this.querySelectorAll("a, button");
    t &&
      t.forEach((e) => {
        e.removeAttribute("tabindex");
      });
  }
  init() {
    ((this.toggleContact = this.toggleContact.bind(this)),
      (this.handleEsc = this.handleEsc.bind(this)),
      (this.handleGlobalClick = this.handleGlobalClick.bind(this)));
    const t = document.querySelectorAll(".c-site-header_nav-link"),
      e = document.querySelector(".c-site-header_logo"),
      o = this.querySelector(".js-contact-trigger"),
      n = this.querySelectorAll("[data-copy-to-clipboard-target]");
    ((this.backdrop = this.querySelector(".c-site-contact-backdrop")),
      this.disableTabIndex(),
      n.length > 0 &&
        n.forEach((s) => {
          s.addEventListener("click", () => {
            const r = s.getAttribute("data-copy-to-clipboard-target"),
              i = s.querySelector('span[aria-hidden="true"]');
            if (r) {
              const c = document.getElementById(r);
              c &&
                c.textContent &&
                (navigator.clipboard.writeText(c.textContent.trim()),
                i &&
                  (a.killTweensOf(i),
                  i.classList.remove("hidden"),
                  a.fromTo(
                    i,
                    { x: 10, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" },
                  ),
                  setTimeout(() => {
                    a.to(i, {
                      x: 10,
                      opacity: 0,
                      duration: 0.3,
                      ease: "power1.in",
                      onComplete: () => {
                        (i.classList.add("hidden"), a.set(i, { x: 20 }));
                      },
                    });
                  }, 2200)));
            }
          });
        }),
      o && o.addEventListener("click", () => this.toggleContact(!1)),
      t &&
        t.forEach((s) => {
          s.addEventListener("click", () => this.toggleContact(!1));
        }),
      e && e.addEventListener("click", () => this.toggleContact(!1)),
      this.backdrop?.addEventListener("click", () => this.toggleContact(!1)),
      document.body.addEventListener("click", this.handleGlobalClick),
      document.addEventListener("keydown", this.handleEsc));
  }
  handleGlobalClick(t) {
    const o = t.target.closest(".js-contact-trigger");
    o &&
      !this.contains(o) &&
      (document.body.classList.remove("menu-is-open"), this.toggleContact(!0));
  }
  toggleContact(t) {
    if (((t = t ?? !this.isOpen), t === this.isOpen)) return;
    const e = document.body,
      o = this.querySelectorAll(".js-contact-stg"),
      n = this.querySelector(".js-contact-trigger");
    ((this.isOpen = t),
      document.body.classList.contains("menu-is-open") ||
        (t ? l.stop() : l.start()),
      this.tl && this.tl.kill(),
      this.classList.toggle("is-open", t),
      e.classList.toggle("contact-is-open", t),
      (this.tl = a.timeline({ defaults: { force3D: !0 } })),
      t
        ? (this.enableTabIndex(),
          d.on(this),
          this.tl
            .fromTo(
              o,
              { opacity: 0, y: -40 },
              {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "expo.out",
                stagger: { amount: 0.12 },
              },
            )
            .fromTo(
              n,
              { opacity: 0, scale: 0.9 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: 0.1,
                ease: "expo3.out",
              },
              0,
            ),
          this.tl.fromTo(
            this.backdrop,
            { opacity: 0, pointerEvents: "none" },
            {
              duration: 0.2,
              opacity: 0.4,
              ease: "expo.out",
              pointerEvents: "auto",
            },
            0,
          ))
        : (this.disableTabIndex(),
          d.off(this),
          this.tl
            .fromTo(
              o,
              { opacity: 1, y: 0 },
              {
                duration: 0.3,
                opacity: 0,
                y: 0,
                ease: "power2.out",
                stagger: { amount: 0.1 },
              },
            )
            .fromTo(
              n,
              { opacity: 1 },
              { opacity: 0, duration: 0.3, ease: "power2.out" },
              0,
            ),
          this.tl.fromTo(
            this.backdrop,
            { opacity: 0.4, pointerEvents: "auto" },
            {
              duration: 0.2,
              opacity: 0,
              ease: "expo.out",
              pointerEvents: "none",
            },
            0,
          )));
  }
  handleEsc(t) {
    t.key === "Escape" && this.toggleContact(!1);
  }
  disconnectedCallback() {
    (document.body.removeEventListener("click", this.handleGlobalClick),
      document.removeEventListener("keydown", this.handleEsc));
  }
}
customElements.define("c-contact-modal", h(p, "ContactModal"));
