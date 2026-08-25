import { C as o } from "./componentManager.NVvah-7B.js";
import { S as d } from "./SplitText.D2bji9Dd.js";
import "./index.BSdFiPHn.js";
class a extends HTMLElement {
  title = null;
  splitTitle = null;
  resizeHandler = null;
  isInview = !1;
  static EVENTS = { INVIEW: "hero" };
  constructor() {
    (super(), (this.title = this.querySelector(".js-splitted")));
  }
  initSplitText() {
    if (
      this.title &&
      ((this.splitTitle = d.create(this.title, {
        type: "lines, words",
        wordsClass: "js-word",
      })),
      this.splitTitle && this.splitTitle.words)
    ) {
      const i = this.splitTitle.words;
      let s = 0;
      for (let t = 0; t < i.length; t++) {
        const e = i[t],
          { textContent: l } = e,
          n = l.replace(",", "").length * 0.1,
          r = s;
        (e.style.setProperty("--stg-duration", `${n}s`),
          e.style.setProperty("--stg-delay", `${r}s`),
          (s += n * 0.1));
      }
    }
  }
  refreshSplitText = () => {
    (this.splitTitle && (this.splitTitle.revert(), (this.splitTitle = null)),
      this.initSplitText());
  };
  connectedCallback() {
    (this.updateInview(), this.bindEvents());
  }
  disconnectedCallback() {
    this.unbindEvents();
  }
  bindEvents() {
    ((this.resizeHandler = () => {
      this.refreshSplitText();
    }),
      document.fonts.ready.then(() => {
        (this.initSplitText(),
          requestAnimationFrame(() => {
            document.documentElement.classList.add("is-font-loaded");
          }));
      }),
      window.addEventListener("resize", this.resizeHandler));
  }
  unbindEvents() {
    this.resizeHandler &&
      (window.removeEventListener("resize", this.resizeHandler),
      (this.resizeHandler = null));
  }
  updateInview() {
    ((this.isInview = this.computeInview()),
      this.isInview && this.classList.add("is-inview"));
  }
  computeInview() {
    return this.classList.contains("is-inview");
  }
}
customElements.define("c-hero", o(a, "Hero"));
export { a as default };
