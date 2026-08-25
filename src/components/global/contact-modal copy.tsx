import Script from "next/script";

export default function ContentModel() {
  return (
    <c-contact-modal className="c-site-header_contact-modal no-scrollbar">
      <div
        className="c-site-header_contact-modal-inner no-scrollbar"
        data-lenis-prevent
      >
        <button
          type="button"
          className="c-site-header_nav-close js-contact-trigger cursor-pointer opacity-0"
        >
          <span className="sr-only">Close contact window</span>
        </button>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <a href="mailto:info@mcgrathbd.com" target="_blank" rel="noopener">
            <span className="w-1/2">
              Let's talk construction, let's talk collaboration.
            </span>
          </a>
        </div>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <button
            data-copy-to-clipboard-target="phone-content"
            type="button"
            className="c-site-header_contact-modal-copy cursor-pointer"
          >
            <span className="sr-only">Copy phone number</span>
            <span
              aria-hidden="true"
              className="hidden pr-[8px] text-[12px] uppercase"
            >
              Copié
            </span>
            <span className="c-icon" data-astro-cid-nw4aqlt6>
              <svg
                width="1em"
                height="1em"
                className="svg-copy undefined"
                aria-hidden="true"
                focusable="false"
                data-astro-cid-nw4aqlt6="true"
                data-icon="copy"
              >
                <symbol id="ai:local:copy" viewBox="0 0 14.53 14.53">
                  <path
                    fill="currentColor"
                    d="M12.6 14.53h-6a1.92 1.92 0 0 1-1.93-1.93v-6A1.92 1.92 0 0 1 6.6 4.67h6a1.92 1.92 0 0 1 1.93 1.93v6a1.92 1.92 0 0 1-1.93 1.93m-6-8.66a.73.73 0 0 0-.73.73v6a.73.73 0 0 0 .73.73h6a.73.73 0 0 0 .73-.73v-6a.73.73 0 0 0-.73-.73Z"
                  />
                  <path
                    fill="currentColor"
                    d="M3.21 9.27c0 .57-.61.6-.61.6h-.67A1.93 1.93 0 0 1 .57 9.3 1.9 1.9 0 0 1 0 7.93v-6A1.95 1.95 0 0 1 1.93 0h6A1.9 1.9 0 0 1 9.3.57a1.93 1.93 0 0 1 .57 1.36v.67a.57.57 0 0 1-.6.59.59.59 0 0 1-.6-.59v-.67a.7.7 0 0 0-.22-.51.73.73 0 0 0-.52-.22h-6a.7.7 0 0 0-.51.22.7.7 0 0 0-.22.51v6a.73.73 0 0 0 .22.52.7.7 0 0 0 .51.22h.66a.54.54 0 0 1 .62.6"
                  />
                </symbol>
                <use href="#ai:local:copy" />
              </svg>
            </span>
          </button>
          <a href="tel:019 762 47284" target="_blank" rel="noopener">
            <span className="c-text-label">Call us</span>
            <span id="phone-content">019 762 47284 </span>
          </a>
        </div>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <button
            data-copy-to-clipboard-target="email-content"
            type="button"
            className="c-site-header_contact-modal-copy cursor-pointer"
          >
            <span className="sr-only">Copy email address</span>
            <span
              aria-hidden="true"
              className="hidden pr-[8px] text-[12px] uppercase"
            >
              Copié
            </span>
            <span className="c-icon" data-astro-cid-nw4aqlt6>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 14.53 14.53"
                className="svg-copy undefined"
                aria-hidden="true"
                focusable="false"
                data-astro-cid-nw4aqlt6="true"
                data-icon="copy"
              >
                <use href="#ai:local:copy" />
              </svg>
            </span>
          </button>
          <a href="mailto:info@mcgrathbd.com" target="_blank" rel="noopener">
            <span className="c-text-label">Write to us</span>
            <span id="email-content">info@mcgrathbd.com </span>
          </a>
        </div>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <button
            data-copy-to-clipboard-target="address-content"
            type="button"
            className="c-site-header_contact-modal-copy cursor-pointer"
          >
            <span className="sr-only">Copy postal address</span>
            <span
              aria-hidden="true"
              className="hidden pr-[8px] text-[12px] uppercase"
            >
              Copié
            </span>
            <span className="c-icon" data-astro-cid-nw4aqlt6>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 14.53 14.53"
                className="svg-copy undefined"
                aria-hidden="true"
                focusable="false"
                data-astro-cid-nw4aqlt6="true"
                data-icon="copy"
              >
                <use href="#ai:local:copy" />
              </svg>
            </span>
          </button>
          <a
            href="https://maps.app.goo.gl/ZszrfKGUeJFuR4rS6"
            target="_blank"
            rel="noopener"
          >
            <span className="c-text-label">Find us</span>
            <span id="address-content">
              116 Kazi Nazrul Islam Avenue, Ramna, Dhaka-1217
            </span>
          </a>
        </div>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0 bg-transparent!">
          <div className="p-0!">
            <span className="flex flex-row gap-[1px]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                className="bg-[#141415] hover:bg-[#8099a4] px-[12px] py-[16px] w-1/3 text-center rounded-s-[8px]"
              >
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener"
                className="bg-[#141415] hover:bg-[#8099a4] px-[12px] py-[16px] w-1/3 text-center"

              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                className="bg-[#141415] hover:bg-[#8099a4] px-[12px] py-[16px] w-1/3 text-center rounded-e-[8px]"

              >
                Instagram
              </a>
            </span>
          </div>
        </div>
      </div>
      <div
        className="c-site-contact-backdrop fixed inset-0 xl:!opacity-0"
        aria-hidden="true"
      />
    </c-contact-modal>
  );
}
