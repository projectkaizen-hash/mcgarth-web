import { C as t } from "./componentManager.NVvah-7B.js";
import "./index.BSdFiPHn.js";
class i extends HTMLElement {
  $muxVideo = null;
  isInview = !1;
  static EVENTS = { INVIEW: "inline-video-inview" };
  connectedCallback() {
    ((this.isInview = this.computeInview()),
      this.bindEvents(),
      customElements
        .whenDefined("mux-video")
        .then(() => {
          this.$muxVideo = this.querySelector("mux-video");
        })
        .finally(() => {
          this.isInview && this.$muxVideo?.play();
        })
        .catch(console.error));
  }
  disconnectedCallback() {
    this.unbindEvents();
  }
  bindEvents() {
    window.addEventListener(`${i.EVENTS.INVIEW}-${this.id}`, this.onInview);
  }
  unbindEvents() {
    (window.removeEventListener(`${i.EVENTS.INVIEW}-${this.id}`, this.onInview),
      this.$muxVideo?.pause());
  }
  onInview = (e) => {
    const n = e;
    ((this.isInview = n.detail.way === "enter"),
      this.$muxVideo &&
        (this.isInview ? this.$muxVideo.play() : this.$muxVideo.pause()));
  };
  computeInview() {
    return this.classList.contains("is-inview");
  }
}
customElements.define("c-inline-video", t(i, "InlineVideo"));
