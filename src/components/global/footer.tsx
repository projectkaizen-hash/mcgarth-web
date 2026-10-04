export default function Footer() {
  return (
    <c-site-footer className="c-site-footer">
      <div
        className="c-grid-container c-text-body pt-2"
        data-scroll
        data-scroll-offset="5%"
      >
        <div className="c-appear-blur-in col-span-4 mb-6 grid grid-cols-subgrid xl:col-span-6 xl:mb-0">
          <p className="c-text-body-indent c-appear-blur-in col-span-4 xl:col-span-3">
            A specialist in residential construction, McGrath builds
            sustainable homes that combine quality, innovation and expertise.
            With a focus on excellence and attention to detail, we build living
            spaces that stand the test of time.
          </p>
        </div>
        <ul className="c-appear-blur-in c-appear-delay-1 col-span-2 xl:col-span-3">
          <li className="block">
            <a
              href="tel:019 762 47284"
              target="_blank"
              rel="noopener"
              className="c-underline-link c-footer-link c-text-body -mt-[5px] inline-block py-[5px]"
            >
              019 762 47284
            </a>
          </li>
          <li className="block">
            <a
              href="mailto:info@mcgrathbd.com"
              target="_blank"
              rel="noopener"
              className="c-underline-link c-footer-link c-text-body inline-block py-[5px]"
            >
              info@mcgrathbd.com
            </a>
          </li>
          <li className="block">
            <a
              href="https://maps.app.goo.gl/ZszrfKGUeJFuR4rS6"
              target="_blank"
              rel="noopener"
              className="c-underline-link c-footer-link c-text-body js-splitted inline-block max-w-[200px] py-[5px]"
            >
              116 Kazi Nazrul Islam Avenue, Ramna, Dhaka-1217
            </a>
          </li>
        </ul>
        <ul className="c-appear-blur-in c-appear-delay-2 col-span-2 xl:col-span-3">
          <li className="block">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener"
              className="c-underline-link c-footer-link c-text-body -mt-[5px] inline-block py-[5px]"
            >
              Facebook
            </a>
          </li>
          <li className="block">
            <a
              href="https://www.linkedin.com/company/"
              target="_blank"
              rel="noopener"
              className="c-underline-link c-footer-link c-text-body inline-block py-[5px]"
            >
              LinkedIn
            </a>
          </li>
          <li className="block">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
              className="c-underline-link c-footer-link c-text-body inline-block py-[5px]"
            >
              Instagram
            </a>
          </li>
          <li className="block">
            <button
              type="button"
              className="w-[72px]"
            >
              <img loading="lazy" decoding="async" src="https://shawalgroupbd.com/wp-content/uploads/2022/07/Rehab-Member.jpg" />
            </button>
          </li>
        </ul>
      </div>
      <div className="c-grid-container mt-10.5 xl:mt-17">
        <c-logo-text-only
          id="footer-logo"
          className="c-logo-text-only appear up w-full col-span-4 w-full xl:col-span-12"
          dir="up"
          style={{ opacity: 0 }}
          appear="true"
          data-scroll="true"
          data-scroll-css-progress="true"
        >
          <svg
            className="block w-full overflow-visible"
            viewBox="0 0 338 64"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M0 62.9102V1.08008H16.11L24.12 35.7302C24.3 36.5702 24.54 37.6368 24.84 38.9302C25.14 40.2168 25.4266 41.5201 25.7 42.8401C25.9666 44.1601 26.19 45.3602 26.37 46.4402H26.91C27.03 45.6602 27.21 44.6867 27.45 43.52C27.69 42.3467 27.9433 41.0869 28.21 39.7402C28.4833 38.3869 28.74 37.0502 28.98 35.7302L36.99 1.08008H53.0099V62.9102H42.39V27.0901C42.39 25.6501 42.4033 24.1501 42.43 22.5901C42.4633 21.0301 42.51 19.6067 42.57 18.3201C42.63 17.0267 42.66 16.0802 42.66 15.4802H42.12C42 16.0802 41.8066 16.9802 41.54 18.1802C41.2666 19.3802 40.98 20.6536 40.68 22.0002C40.38 23.3536 40.08 24.6002 39.78 25.7402L30.87 62.9102H21.69L12.87 25.7402C12.63 24.9602 12.3767 23.9535 12.11 22.7202C11.8367 21.4935 11.5667 20.2369 11.3 18.9502C11.0267 17.6569 10.77 16.5002 10.53 15.4802H9.98999C10.05 16.5002 10.0933 17.7168 10.12 19.1301C10.1533 20.5368 10.1866 21.9434 10.22 23.3501C10.2466 24.7634 10.2599 26.0101 10.2599 27.0901V62.9102H0Z" fill="currentColor" />
              <path d="M78.7499 63.99C74.6699 63.99 71.37 63.1032 68.85 61.3298C66.33 59.5632 64.47 56.8499 63.27 53.1899C62.07 49.5299 61.47 44.88 61.47 39.24C61.47 33.36 62.1166 28.6066 63.41 24.98C64.6966 21.3466 66.63 18.6733 69.21 16.96C71.79 15.2533 75.03 14.3999 78.93 14.3999C81.69 14.3999 84.0899 14.7898 86.1299 15.5698C88.1633 16.3498 89.8433 17.5031 91.17 19.0298C92.49 20.5631 93.45 22.5466 94.05 24.98C94.65 27.4066 94.95 30.2698 94.95 33.5698H85.14C85.14 30.9898 84.96 28.8898 84.6 27.2698C84.24 25.6498 83.5933 24.4666 82.66 23.72C81.7266 22.9666 80.4534 22.5898 78.84 22.5898C77.28 22.5898 75.9434 23.0533 74.83 23.98C73.7234 24.9133 72.9133 26.4298 72.4 28.5298C71.8933 30.6298 71.64 33.5099 71.64 37.1699V41.49C71.64 44.19 71.8334 46.6198 72.22 48.7798C72.6134 50.9398 73.35 52.6633 74.43 53.95C75.51 55.2433 76.98 55.8899 78.84 55.8899C80.4534 55.8899 81.7266 55.5298 82.66 54.8098C83.5933 54.0898 84.3 52.9198 84.78 51.2998C85.26 49.6798 85.4999 47.5499 85.4999 44.9099H94.95C94.95 47.7899 94.65 50.4 94.05 52.74C93.45 55.08 92.49 57.0898 91.17 58.7698C89.8433 60.4498 88.1633 61.7399 86.1299 62.6399C84.0899 63.5399 81.6299 63.99 78.7499 63.99Z" fill="currentColor" />
              <path d="M124.92 63.99C117.12 63.99 111.27 61.3966 107.37 56.21C103.463 51.0166 101.513 42.9598 101.52 32.0398C101.52 24.7198 102.45 18.7033 104.31 13.99C106.163 9.28332 108.953 5.77329 112.68 3.45996C116.4 1.15329 120.96 0 126.36 0C129.72 0 132.763 0.479941 135.49 1.43994C138.223 2.39994 140.58 3.80992 142.56 5.66992C144.54 7.52992 146.04 9.88331 147.06 12.73C148.08 15.5833 148.59 18.8999 148.59 22.6799H137.88C137.88 20.5799 137.623 18.7065 137.11 17.0598C136.603 15.4065 135.87 13.9932 134.91 12.8198C133.95 11.6532 132.733 10.7833 131.26 10.21C129.793 9.64329 128.1 9.35986 126.18 9.35986C123.9 9.35986 121.903 9.74979 120.19 10.5298C118.483 11.3098 117.073 12.5233 115.96 14.1699C114.847 15.8233 114.023 17.9099 113.49 20.4299C112.95 22.9499 112.68 25.9198 112.68 29.3398V34.8298C112.68 39.4498 113.143 43.2299 114.07 46.1699C115.003 49.1099 116.443 51.2699 118.39 52.6499C120.337 54.0299 122.78 54.72 125.72 54.72C128.607 54.72 130.95 54.1498 132.75 53.0098C134.55 51.8698 135.9 50.2031 136.8 48.0098C137.7 45.8231 138.15 43.1698 138.15 40.0498V38.7898H124.46V30.0598H148.5V62.9099H141.93L141.03 56.5198C139.89 58.0798 138.537 59.4298 136.97 60.5698C135.417 61.7098 133.65 62.5632 131.67 63.1299C129.69 63.7032 127.44 63.99 124.92 63.99Z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M158.49 62.9102V1.08008H181.98C186.48 1.08008 190.05 1.87354 192.69 3.46021C195.33 5.05354 197.237 7.21686 198.41 9.9502C199.577 12.6769 200.16 15.8101 200.16 19.3501C200.16 23.3701 199.483 26.8935 198.13 29.9202C196.783 32.9535 194.73 35.2202 191.97 36.7202L202.5 62.9102H190.98L181.89 39.6902H169.38V62.9102H158.49ZM169.38 30.4202H180.63C183.623 30.4202 185.797 29.5068 187.15 27.6802C188.503 25.8468 189.18 23.2802 189.18 19.9802C189.18 17.8202 188.88 16.0335 188.28 14.6201C187.68 13.2135 186.75 12.1635 185.49 11.4702C184.223 10.7835 182.48 10.4402 180.26 10.4402H169.38V30.4202Z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M204.03 62.9102L221.49 1.08008H235.44L252.99 62.9102H241.47L237.69 48.9602H218.79L215.1 62.9102H204.03ZM220.95 39.78H235.53L230.85 21.1501C230.73 20.6701 230.563 20.0534 230.35 19.3C230.143 18.5534 229.933 17.7301 229.72 16.8301C229.513 15.9301 229.303 15.0134 229.09 14.0801C228.883 13.1534 228.69 12.3 228.51 11.52H227.97C227.79 12.48 227.55 13.5734 227.25 14.8C226.95 16.0334 226.663 17.2335 226.39 18.4001C226.123 19.5735 225.9 20.4901 225.72 21.1501L220.95 39.78Z" fill="currentColor" />
              <path d="M263.7 62.9102V10.53H248.21V1.08008H290.07V10.53H274.59V62.9102H263.7Z" fill="currentColor" />
              <path d="M297 62.9102V1.08008H307.89V26.7302H327.15V1.08008H337.95V62.9102H327.15V36.1802H307.89V62.9102H297Z" fill="currentColor" />
          </svg>
        </c-logo-text-only>
      </div>
      <div
        data-scroll
        className="c-appear-fade-in c-grid-container c-text-body mt-2 pb-1.5 xl:pb-2.5"
      >
        <div className="c-gallery-scroller_content col-span-4 mb-0.5 flex justify-between xl:col-span-6 xl:mb-0 xl:block">
          <p>McGrath BD © 2026</p>
          <a
            href="/pages/mentions-legales"
            className="c-underline-link c-footer-link inline-block! before:!bottom-0 xl:hidden!"
          >
            Legal mentions,
          </a>
        </div>
        <p className="col-span-2 xl:col-span-3">
          <a
            href="/pages/mentions-legales"
            className="c-underline-link c-footer-link hidden! before:!bottom-0 xl:inline-block!"
          >
            Legal mentions,
          </a>
          <button
            type="button"
            className="c-underline-link c-footer-link js-cookie-preferences-button inline-block cursor-pointer before:!bottom-0"
          >
            Cookies preferences
          </button>
        </p>
        <p className="col-span-2 text-right xl:col-span-3">
          <a
            href="https://www.growriva.com/"
            target="_blank"
            rel="noopener"
            className="c-underline-link c-footer-link inline-block before:!bottom-0"
          >
            Website by Growriva
          </a>
        </p>
      </div>
    </c-site-footer>
  );
}
