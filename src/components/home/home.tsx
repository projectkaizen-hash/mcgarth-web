
import FeaturedGallery from "./featuredGallery";

export default function Home() {

  return (
    <main id="swup" className="transition-fade">
      <div id="content">
        <div>
          <section className="w-full">
            <div className="c-grid-container mb-[16px] flex min-h-10 items-end pt-29 xl:mb-[26px] xl:pt-17.5">
              <h1 className="sr-only">McGraths Construction</h1>
              <c-logo-text-only
                id="home-logo"
                className="c-logo-text-only appear down w-full col-span-4 w-full xl:col-span-12"
                dir="down"
                style={{ opacity: 0 }}
                appear="true"
                data-scroll="true"
                data-scroll-css-progress="true"
              >
                <svg className="block w-full overflow-visible" viewBox="0 0 338 64" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path className="c-logo-text-only__path" d="M0 62.9102V1.08008H16.11L24.12 35.7302C24.3 36.5702 24.54 37.6368 24.84 38.9302C25.14 40.2168 25.4266 41.5201 25.7 42.8401C25.9666 44.1601 26.19 45.3602 26.37 46.4402H26.91C27.03 45.6602 27.21 44.6867 27.45 43.52C27.69 42.3467 27.9433 41.0869 28.21 39.7402C28.4833 38.3869 28.74 37.0502 28.98 35.7302L36.99 1.08008H53.0099V62.9102H42.39V27.0901C42.39 25.6501 42.4033 24.1501 42.43 22.5901C42.4633 21.0301 42.51 19.6067 42.57 18.3201C42.63 17.0267 42.66 16.0802 42.66 15.4802H42.12C42 16.0802 41.8066 16.9802 41.54 18.1802C41.2666 19.3802 40.98 20.6536 40.68 22.0002C40.38 23.3536 40.08 24.6002 39.78 25.7402L30.87 62.9102H21.69L12.87 25.7402C12.63 24.9602 12.3767 23.9535 12.11 22.7202C11.8367 21.4935 11.5667 20.2369 11.3 18.9502C11.0267 17.6569 10.77 16.5002 10.53 15.4802H9.98999C10.05 16.5002 10.0933 17.7168 10.12 19.1301C10.1533 20.5368 10.1866 21.9434 10.22 23.3501C10.2466 24.7634 10.2599 26.0101 10.2599 27.0901V62.9102H0Z" fill="currentColor" />
                  <path className="c-logo-text-only__path" d="M78.7499 63.99C74.6699 63.99 71.37 63.1032 68.85 61.3298C66.33 59.5632 64.47 56.8499 63.27 53.1899C62.07 49.5299 61.47 44.88 61.47 39.24C61.47 33.36 62.1166 28.6066 63.41 24.98C64.6966 21.3466 66.63 18.6733 69.21 16.96C71.79 15.2533 75.03 14.3999 78.93 14.3999C81.69 14.3999 84.0899 14.7898 86.1299 15.5698C88.1633 16.3498 89.8433 17.5031 91.17 19.0298C92.49 20.5631 93.45 22.5466 94.05 24.98C94.65 27.4066 94.95 30.2698 94.95 33.5698H85.14C85.14 30.9898 84.96 28.8898 84.6 27.2698C84.24 25.6498 83.5933 24.4666 82.66 23.72C81.7266 22.9666 80.4534 22.5898 78.84 22.5898C77.28 22.5898 75.9434 23.0533 74.83 23.98C73.7234 24.9133 72.9133 26.4298 72.4 28.5298C71.8933 30.6298 71.64 33.5099 71.64 37.1699V41.49C71.64 44.19 71.8334 46.6198 72.22 48.7798C72.6134 50.9398 73.35 52.6633 74.43 53.95C75.51 55.2433 76.98 55.8899 78.84 55.8899C80.4534 55.8899 81.7266 55.5298 82.66 54.8098C83.5933 54.0898 84.3 52.9198 84.78 51.2998C85.26 49.6798 85.4999 47.5499 85.4999 44.9099H94.95C94.95 47.7899 94.65 50.4 94.05 52.74C93.45 55.08 92.49 57.0898 91.17 58.7698C89.8433 60.4498 88.1633 61.7399 86.1299 62.6399C84.0899 63.5399 81.6299 63.99 78.7499 63.99Z" fill="currentColor" />
                  <path className="c-logo-text-only__path" d="M124.92 63.99C117.12 63.99 111.27 61.3966 107.37 56.21C103.463 51.0166 101.513 42.9598 101.52 32.0398C101.52 24.7198 102.45 18.7033 104.31 13.99C106.163 9.28332 108.953 5.77329 112.68 3.45996C116.4 1.15329 120.96 0 126.36 0C129.72 0 132.763 0.479941 135.49 1.43994C138.223 2.39994 140.58 3.80992 142.56 5.66992C144.54 7.52992 146.04 9.88331 147.06 12.73C148.08 15.5833 148.59 18.8999 148.59 22.6799H137.88C137.88 20.5799 137.623 18.7065 137.11 17.0598C136.603 15.4065 135.87 13.9932 134.91 12.8198C133.95 11.6532 132.733 10.7833 131.26 10.21C129.793 9.64329 128.1 9.35986 126.18 9.35986C123.9 9.35986 121.903 9.74979 120.19 10.5298C118.483 11.3098 117.073 12.5233 115.96 14.1699C114.847 15.8233 114.023 17.9099 113.49 20.4299C112.95 22.9499 112.68 25.9198 112.68 29.3398V34.8298C112.68 39.4498 113.143 43.2299 114.07 46.1699C115.003 49.1099 116.443 51.2699 118.39 52.6499C120.337 54.0299 122.78 54.72 125.72 54.72C128.607 54.72 130.95 54.1498 132.75 53.0098C134.55 51.8698 135.9 50.2031 136.8 48.0098C137.7 45.8231 138.15 43.1698 138.15 40.0498V38.7898H124.46V30.0598H148.5V62.9099H141.93L141.03 56.5198C139.89 58.0798 138.537 59.4298 136.97 60.5698C135.417 61.7098 133.65 62.5632 131.67 63.1299C129.69 63.7032 127.44 63.99 124.92 63.99Z" fill="currentColor" />
                  <path className="c-logo-text-only__path" fillRule="evenodd" clipRule="evenodd" d="M158.49 62.9102V1.08008H181.98C186.48 1.08008 190.05 1.87354 192.69 3.46021C195.33 5.05354 197.237 7.21686 198.41 9.9502C199.577 12.6769 200.16 15.8101 200.16 19.3501C200.16 23.3701 199.483 26.8935 198.13 29.9202C196.783 32.9535 194.73 35.2202 191.97 36.7202L202.5 62.9102H190.98L181.89 39.6902H169.38V62.9102H158.49ZM169.38 30.4202H180.63C183.623 30.4202 185.797 29.5068 187.15 27.6802C188.503 25.8468 189.18 23.2802 189.18 19.9802C189.18 17.8202 188.88 16.0335 188.28 14.6201C187.68 13.2135 186.75 12.1635 185.49 11.4702C184.223 10.7835 182.48 10.4402 180.26 10.4402H169.38V30.4202Z" fill="currentColor" />
                  <path className="c-logo-text-only__path" fillRule="evenodd" clipRule="evenodd" d="M204.03 62.9102L221.49 1.08008H235.44L252.99 62.9102H241.47L237.69 48.9602H218.79L215.1 62.9102H204.03ZM220.95 39.78H235.53L230.85 21.1501C230.73 20.6701 230.563 20.0534 230.35 19.3C230.143 18.5534 229.933 17.7301 229.72 16.8301C229.513 15.9301 229.303 15.0134 229.09 14.0801C228.883 13.1534 228.69 12.3 228.51 11.52H227.97C227.79 12.48 227.55 13.5734 227.25 14.8C226.95 16.0334 226.663 17.2335 226.39 18.4001C226.123 19.5735 225.9 20.4901 225.72 21.1501L220.95 39.78Z" fill="currentColor" />
                  <path className="c-logo-text-only__path" d="M263.7 62.9102V10.53H248.21V1.08008H290.07V10.53H274.59V62.9102H263.7Z" fill="currentColor" />
                  <path className="c-logo-text-only__path" d="M297 62.9102V1.08008H307.89V26.7302H327.15V1.08008H337.95V62.9102H327.15V36.1802H307.89V62.9102H297Z" fill="currentColor" />
                </svg>
              </c-logo-text-only>
            </div>
          </section>
          <div className="c-blocks c-blocks-image-no-space">
            <div className="c-block-video">
              <c-block-video className="undefined" data-scroll="true">
                <div className="c-grid-container">
                  <div
                    className="c-appear-up-in c-safari-image-radius relative col-span-4 flex items-center justify-center overflow-hidden rounded-[4px] bg-current xl:col-span-12"
                    style={{ aspectRatio: "16/10" }}
                  >
                    <button
                      type="button"
                      data-playback-id="XhQBGhROglgLq5xVvouR13RuPoDFTvh52f5ScjVeCM00"
                      data-astro-cid-n7iexiqw="true"
                      className="c-button c-text-cta c-button-s z-2"
                    >
                      <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                      <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                        <span className="c-icon-hover" data-astro-cid-n7iexiqw="true">
                          <span
                            className="c-icon"
                            data-astro-cid-n7iexiqw="true"
                            data-astro-cid-nw4aqlt6="true"
                          >
                            <svg
                              width="0.8em"
                              height="1em"
                              className="svg-play undefined"
                              aria-hidden="true"
                              focusable="false"
                              data-astro-cid-nw4aqlt6="true"
                              data-icon="play"
                            >
                              <symbol id="ai:local:play" viewBox="0 0 8 10">
                                <path
                                  fill="currentColor"
                                  d="M7.5 4.134a1 1 0 0 1 0 1.732l-6 3.464A1 1 0 0 1 0 8.464V1.536A1 1 0 0 1 1.5.67z"
                                />
                              </symbol>
                              <use href="#ai:local:play"></use>
                            </svg>
                          </span>
                        </span>
                        <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                          <span className="c-button_label-hover" data-astro-cid-n7iexiqw="true">
                            Play
                          </span>
                        </span>
                      </span>
                    </button>
                    <c-inline-video
                      className="group absolute inset-0 w-full"
                      data-scroll="true"
                      data-scroll-repeat="true"
                      data-scroll-call="inline-video-inview-26ab9cda-5250-409d-8ccb-68780b637d8e"
                      data-scroll-ignore-fold="true"
                      id="26ab9cda-5250-409d-8ccb-68780b637d8e"
                    >
                      <mux-video
                        style={{ "--media-object-fit": "cover" } as React.CSSProperties}
                        className="absolute inset-0 top-[-10%] h-[120%] w-full"
                        poster="/img/hero-poster.png"
                        playback-id="XhQBGhROglgLq5xVvouR13RuPoDFTvh52f5ScjVeCM00"
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        preload="metadata"
                        data-scroll="true"
                        data-scroll-speed="-0.05"
                        disable-tracking="true"
                        disable-cookies="true"
                      ></mux-video>
                    </c-inline-video>

                  </div>
                </div>
              </c-block-video>
            </div>


            <div className="c-block-title">
              <c-block-title className="undefined" data-scroll="true" data-scroll-offset="10%">
                <div className="c-grid-container">
                  <div className="col-span-4 grid grid-cols-subgrid xl:col-span-9 xl:col-start-4">
                    <h2
                      className="c-heading-h3-indented js-splitted col-span-4 xl:col-span-9"
                      aria-label="McGrath Developments Ltd. excels in residential construction, delivering sustainable homes that seamlessly blend craftsmanship, innovation, and industry-leading expertise. Our dedication to excellence and meticulous attention to detail creates enduring living spaces for generations."
                    >
                      <span className="c-heading-h3-indent-spacer">&nbsp;</span>
                      McGrath Developments Ltd. excels in residential construction, delivering sustainable homes that
                      seamlessly blend craftsmanship, innovation, and industry-leading expertise. Our dedication to
                      excellence and meticulous attention to detail creates enduring living spaces for generations.
                    </h2>
                    <div className="col-span-4 xl:col-span-9">
                      <a
                        href="/about-us"
                        rel=""
                        target="_self"
                        id=""
                        title="About us"
                        // linktype="url"
                        // fieldtype="multilink"
                        // cached_url="/about-us"
                        data-astro-cid-n7iexiqw="true"
                        className="c-button c-text-cta c-button-m c-button-split-appear mt-[24px] xl:mt-[57px]"
                      >
                        <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                        <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                          <span className="c-bullet" data-astro-cid-n7iexiqw="true">
                            <span className="c-bullet-hover" data-astro-cid-n7iexiqw="true"></span>
                          </span>
                          <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                            <span className="c-button_label-hover" data-astro-cid-n7iexiqw="true">
                              About us
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </c-block-title>
            </div>

            <div className="c-block-projects-list">
              <section className="block">
                <h2 className="sr-only">Nos réalisations</h2>
                <div className="c-grid-container">
                  <article
                    is="c-project-card"
                    className="c-project-card relative false block col-span-4 xl:col-span-6 mt-[104px] xl:mt-[240px] mt-0! xl:mt-0! false"
                    data-scroll="true"
                    data-scroll-offset="10%"
                  >
                    <button
                      type="button"
                      className="c-project-card-click-catcher absolute top-0 left-0 z-1 hidden h-full w-full"
                    >
                      <span className="c-visually-hidden">Afficher plus d'informations</span>
                    </button>
                    <a className="c-appear-up-in" href="/projects/brill">
                      <div className="c-aspect-ratio c-safari-image-radius relative flex w-full items-center overflow-hidden rounded-[6px] bg-current">
                        <div
                          className="c-image is-loaded w-full -cover c-aspect-ratio-overflow w-full"
                          style={{ "--width": 500, "--height": 333, aspectRatio: "1.5015015015015014" } as React.CSSProperties}
                          data-scroll="true"
                          data-scroll-speed="-0.033"
                        >
                          <picture className="c-image_inner flex h-full w-full">
                            <img
                              src="/img/2.jpg"
                              alt=""
                              title=""
                              fetchPriority="auto"
                              loading="lazy"
                              className="c-image_img"


                              width="500"
                              height="333"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="relative mt-[13px] flex w-full">
                        <div className="c-bullet-wrapper flex w-full" data-bullet-label="See">
                          <span className="c-bullet relative top-[2px]">
                            <span className="c-bullet-hover"></span>
                          </span>
                          <div className="flex max-w-[80%] flex-col ml-auto w-1/2">
                            <h3 className="c-text-subtitle flex w-full justify-end border-b pb-[8px]">
                              <span className="flex-grow">Rezia</span>
                              <span className="w-1 border-l"></span><span>02</span>
                            </h3>
                            <p className="c-text-small pt-[8px]">
                              <i className="mr-0.5">2026</i>
                              <span className="pr-1.5 xl:pr-0">New House</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                  <article
                    is="c-project-card"
                    className="c-project-card relative false block col-span-4 xl:col-span-4 xl:col-start-9 mt-[104px] xl:mt-[240px] false mt-[104px]! xl:mt-0!"
                    data-scroll="true"
                    data-scroll-offset="10%"
                  >
                    <button
                      type="button"
                      className="c-project-card-click-catcher absolute top-0 left-0 z-1 hidden h-full w-full"
                    >
                      <span className="c-visually-hidden">Afficher plus d'informations</span>
                    </button>
                    <a className="c-appear-up-in" href="/projects/maisonart">
                      <div className="c-aspect-ratio c-safari-image-radius relative flex w-full items-center overflow-hidden rounded-[6px] bg-current">
                        <div
                          className="c-image is-loaded w-full -cover c-aspect-ratio-overflow w-full"
                          style={{ "--width": 500, "--height": 313, aspectRatio: "1.597444089456869" } as React.CSSProperties}
                          data-scroll="true"
                          data-scroll-speed="-0.033"
                        >
                          <picture className="c-image_inner flex h-full w-full">

                            <img
                              src="/img/1.jpg"
                              alt=""
                              title=""
                              fetchPriority="auto"
                              loading="lazy"
                              className="c-image_img"


                              width="500"
                              height="313"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="relative mt-[13px] flex w-full">
                        <div className="c-bullet-wrapper flex w-full" data-bullet-label="See">
                          <span className="c-bullet relative top-[2px]">
                            <span className="c-bullet-hover"></span>
                          </span>
                          <div className="flex max-w-[80%] flex-col ml-auto w-1/2">
                            <h3 className="c-text-subtitle flex w-full justify-end border-b pb-[8px]">
                              <span className="flex-grow">N H Orchid</span>
                              <span className="w-1 border-l"></span><span>01</span>
                            </h3>
                            <p className="c-text-small pt-[8px]">
                              <i className="mr-0.5">2026</i>
                              <span className="pr-1.5 xl:pr-0">New house</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
              </section>
            </div>
            <div className="c-block-centered-content">
              <section className="block undefined" data-scroll="" data-scroll-offset="10%">
                <div className="c-grid-container">
                  <div className="col-span-4 grid grid-cols-subgrid xl:col-span-8 xl:col-start-3">
                    <h2 className="c-heading-h2 c-appear-blur-in c-appear-delay-1 col-span-4 text-center xl:col-span-8">
                      Explore our projects
                    </h2>
                    <p className="c-text-body c-appear-blur-in c-appear-delay-2 col-span-4 mx-auto mt-[35px] max-w-[320px] text-center xl:col-span-4 xl:col-start-3 xl:mt-[16px] xl:max-w-none">
                      Discover homes engineered to withstand time, where exceptional design meets superior quality and
                      durability. Dive into our portfolio to envision your ideal home.
                    </p>
                    <div className="col-span-4 text-center xl:col-span-8">
                      <a
                        href="/projects"
                        rel=""
                        target="_self"
                        id=""
                        title="Discover"
                        // linktype="url"
                        // fieldtype="multilink"
                        // cached_url="/projects"
                        data-astro-cid-n7iexiqw="true"
                        className="c-button c-text-cta c-button-m c-button-appear mt-[35px] xl:mt-[32px]"
                      >
                        <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                        <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                          <span className="c-bullet" data-astro-cid-n7iexiqw="true">
                            <span className="c-bullet-hover" data-astro-cid-n7iexiqw="true"></span>
                          </span>
                          <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                            <span className="c-button_label-hover" data-astro-cid-n7iexiqw="true">
                              Discover
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <FeaturedGallery />
            <div className="c-block-services">
              <c-services className="c-services">
                <div className="c-grid-container mt-[120px] items-start xl:mt-[200px]">
                  <div
                    className="col-span-4 grid grid-cols-subgrid xl:sticky xl:top-0 xl:left-0 xl:col-span-8 xl:pt-4"
                    data-scroll=""
                    data-scroll-offset="40%"
                  >
                    <div className="col-span-3 mb-[74px] self-start xl:col-span-4 xl:col-start-2 xl:mb-0">
                      <h2 className="c-heading-h2 c-appear-blur-in">
                        Your vision, our mission
                      </h2>
                    </div>
                    <div className="c-appear-up-in c-appear-delay-1 relative col-span-2 col-start-1 mt-[5px] flex aspect-[453/725] items-center overflow-hidden rounded-lg xl:col-span-4 xl:col-start-1 xl:mt-[210px]">
                      <div
                        className="c-image is-loaded w-full -cover -lazy-load"
                        style={{ "--width": 450, "--height": 675, aspectRatio: "0.6666666666666666" } as React.CSSProperties}
                      >
                        <picture className="c-image_inner flex h-full w-full">

                          <img
                            src="/img/5.jpg"
                            alt=""
                            title=""
                            fetchPriority="auto"
                            loading="lazy"
                            className="c-image_img"


                            width="450"
                            height="675"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="col-span-2 col-start-3 mx-auto xl:col-span-3 xl:col-start-5 xl:mt-[210px]">
                      <p className="c-text-body-indent c-appear-blur-in c-appear-delay-2">
                        McGrath Developments Ltd. constructs sustainable homes that unite quality, innovation, and expertise.
                        With an unwavering focus on excellence and precise attention to detail, we create living spaces built to
                        last.

                      </p>
                      <div className="c-appear-up-in c-appear-delay-3 mt-[20px] xl:mt-[40px]">
                        <a
                          href="/services"
                          rel=""
                          target="_self"
                          id=""
                          title="Services"
                          // linktype="url"
                          // fieldtype="multilink"
                          // cached_url="/services"
                          data-astro-cid-n7iexiqw="true"
                          className="c-button c-text-cta c-button-m c-button-appear"
                        >
                          <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                          <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                            <span className="c-bullet" data-astro-cid-n7iexiqw="true">
                              <span className="c-bullet-hover" data-astro-cid-n7iexiqw="true"></span>
                            </span>
                            <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                              <span className="c-button_label-hover" data-astro-cid-n7iexiqw="true">
                                Services
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="l:mt-[499px] col-span-4 mt-[64px] flex flex-col gap-[20px] self-start xl:col-start-9 xl:row-start-1 xl:mt-0"
                    data-scroll=""
                    data-scroll-offset="15%"
                  >
                    <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-1">
                      <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                        <span className="c-heading-h4-alt after:content-['']">01</span>
                        <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                          New construction
                        </h3>
                      </div>
                      <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                        <p>
                          McGraths builds homes that combine quality, innovation and
                          durability. Each project is tailor-made to offer the
                          optimal living environment, built to stand the test of
                          time.
                        </p>
                      </div>
                    </li>
                    <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-2">
                      <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                        <span className="c-heading-h4-alt after:content-['']">02</span>
                        <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                          Complete renovation
                        </h3>
                      </div>
                      <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                        <p>
                          Rethink your home with a complete renovation.
                          Modernization, optimization of space and quality
                          materials: we make your home a place to live and feel
                          good, with expertise and know-how.
                        </p>
                      </div>
                    </li>
                    <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-3">
                      <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                        <span className="c-heading-h4-alt after:content-['']">03</span>
                        <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                          Extension
                        </h3>
                      </div>
                      <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                        <p>
                          Optimize your space and comfort with a made-to-measure
                          extension. McGraths builds extensions that integrate
                          harmoniously with your home, for a living environment that
                          evolves with you.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </c-services>
            </div>
            <div className="c-block-about">
              <section className="c-about my-[120px] xl:my-[200px]">
                <div className="c-grid-container before:bg-powder relative before:absolute before:top-0 before:right-[var(--grid-edge-xl)] before:left-[var(--grid-edge-xl)] before:h-[1px] before:content-[''] max-xl:before:hidden xl:items-start xl:before:left-[var(--grid-edge-xl)]">
                  <div className="col-span-3 row-start-1 mb-[64px] xl:sticky xl:top-0 xl:col-span-4 xl:col-start-2 xl:mb-0 xl:py-[272px]">
                    <div className="w-full" data-scroll="" data-scroll-offset="10%">
                      <h2 className="c-heading-h2 c-appear-blur-in">
                        A Legacy of Trust and Expertise</h2>
                    </div>
                  </div>
                  <div
                    className="col-span-2 row-start-2 xl:col-span-3 xl:col-start-5 xl:row-start-1 xl:mt-auto"
                    data-scroll=""
                    data-scroll-offset="5%"
                  >
                    <p className="c-text-body-indent c-appear-blur-in c-appear-delay-1">
                      Rooted in generations of know-how, McGrath Developments Ltd. crafts sustainable homes with
                      unwavering passion and precision. Commitment, quality, and innovation form the foundation of every
                      project. Explore our rich history, core values, and specialized expertise in residential construction.
                    </p>
                    <div className="c-appear-up-in c-appear-delay-2 mt-[20px] xl:mt-[22px]">
                      <a
                        href="/about-us"
                        rel=""
                        target="_self"
                        id=""
                        title="About us"
                        // linktype="url"
                        // fieldtype="multilink"
                        // cached_url="/about-us"
                        data-astro-cid-n7iexiqw="true"
                        className="c-button c-text-cta c-button-m c-button-appear"
                      >
                        <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                        <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                          <span className="c-bullet" data-astro-cid-n7iexiqw="true">
                            <span className="c-bullet-hover" data-astro-cid-n7iexiqw="true"></span>
                          </span>
                          <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                            <span className="c-button_label-hover" data-astro-cid-n7iexiqw="true">
                              About us
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="before:bg-powder relative col-span-2 row-start-2 before:absolute before:top-[16px] before:bottom-0 before:-left-[var(--grid-gutter-xl)] before:w-[1px] before:content-[''] max-xl:before:hidden xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:pt-[272px]"
                    data-scroll=""
                    data-scroll-offset="5%"
                  >
                    <div
                      className="c-appear-up-in c-appear-delay-2 flex aspect-[453/724] w-full items-center overflow-hidden rounded-lg"
                      data-scroll=""
                    >
                      <div
                        className="c-image is-loaded w-full -cover -lazy-load h-[104%] w-full"
                        style={{ "--width": 450, "--height": 586, aspectRatio: "0.7679180887372014" } as React.CSSProperties}
                        data-scroll="true"
                        data-scroll-speed="-0.05"
                      >
                        <picture className="c-image_inner flex h-full w-full">

                          <img
                            src="/img/4.jpg"
                            alt=""
                            title=""
                            fetchPriority="auto"
                            loading="lazy"
                            className="c-image_img"


                            width="450"
                            height="586"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  className="c-grid-container mt-[44px] space-y-[20px]"
                  data-scroll=""
                  data-scroll-offset="5%"
                ></ul>
              </section>
            </div>
          </div>
        </div>
        <c-full-project-card
          className="c-full-project-card block mt-[220px]"
          data-astro-cid-wipjvxqe="true"
        >
          <a
            href="/projects/rock-island"
            className="c-grid-container relative aspect-[8-4]"
            aria-label="Voir le projet: Rock Island"
            data-astro-cid-wipjvxqe="true"
          >
            <div
              className="c-safari-image-radius relative col-span-4 flex items-center justify-center overflow-hidden rounded-[8px] bg-current xl:col-span-12"
              data-astro-cid-wipjvxqe="true"
            >
              <div
                className="c-image is-loaded w-full -cover -lazy-load h-[110%] w-full"
                style={{ "--width": 2400, "--height": 1601, aspectRatio: "1.499063085571518" } as React.CSSProperties}
                data-scroll="true"
                data-astro-cid-wipjvxqe="true"
                data-scroll-speed="-0.075"
              >
                <picture className="c-image_inner flex h-full w-full">

                  <img
                    src="/img/3.jpg"
                    alt=""
                    title=""
                    fetchPriority="auto"
                    loading="lazy"
                    className="c-image_img"


                    width="2400"
                    height="1601"
                  />
                </picture>
              </div>
            </div>
            <div
              className="c-grid-container absolute top-0 right-0 xl:h-full xl:items-end"
              data-astro-cid-wipjvxqe="true"
            >
              <div
                className="col-span-4 py-[6px] pr-[6px] pl-[6px] xl:sticky xl:bottom-8 xl:left-0 xl:col-span-6 xl:col-start-7 xl:pr-[4px] xl:pl-[4px]"
                data-astro-cid-wipjvxqe="true"
              >
                <div
                  className="c-bullet-wrapper flex justify-between rounded bg-white p-[8px] xl:p-[15px]"
                  data-bullet-label="See"
                  data-astro-cid-wipjvxqe="true"
                >
                  <span className="c-bullet relative top-[2px]" data-astro-cid-wipjvxqe="true">
                    <span className="c-bullet-hover" data-astro-cid-wipjvxqe="true"></span>
                  </span>
                  <div className="flex max-w-[80%] flex-col w-fit xl:w-[320px]">
                    <p className="c-text-subtitle flex w-full justify-end border-b pb-[8px]">
                      <span className="flex-grow">Jovada Garden</span>
                      <span className="w-1 border-l"></span><span>03</span>
                    </p>
                    <p className="c-text-small pt-[8px]">
                      <i className="mr-0.5">2020</i>
                      <span className="pr-1.5 xl:pr-0">New House</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </c-full-project-card>
      </div>
    </main>
  );
}
