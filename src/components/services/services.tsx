'use client';
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main id="swup" className="transition-fade">
      <div id="content">
        <div>
          {/* Hero */}
          <c-hero className="c-hero undefined false overflow-visible" data-scroll="true" data-scroll-call="hero-services" id="services">
            <div className="c-grid-container overflow-visible">
              <div className="c-hero-title_wrapper overflow-visible flex-column col-span-4 flex items-end justify-end xl:col-span-11 pt-8">
                <h1 className="c-heading-h1 js-splitted" aria-label="Coordinate, build, renovate">
                  Coordinate, build, renovate
                </h1>
              </div>
              <div className="col-span-4 border-b border-black xl:col-span-12 mt-1"></div>
            </div>
          </c-hero>

          {/* Intro Services */}
          <c-intro-services className="c-intro-services relative z-2" data-scroll="true">
            <div className="c-grid-container">
              <div className="c-intro__card relative col-span-2 grid grid-cols-subgrid grid-rows-2 overflow-hidden pt-1 pb-2 xl:col-span-6">
                <span className="c-text-body c-appear-blur-in c-appear-delay-1 col-span-2 font-medium xl:col-span-6">
                  Services
                </span>
                <div className="col-span-2 mt-auto xl:col-span-3">
                  <p className="c-text-body-indent intro-text c-appear-blur-in c-appear-delay-2">
                    At McGrath Developments Ltd., we guide your residential project from concept to completion with a
                    fully personalized approach. Our expertise, rigor, and passion transform your vision into reality.
                  </p>
                </div>
              </div>
              <div className="c-intro__card relative col-span-2 grid grid-cols-subgrid grid-rows-2 pt-1 pb-2 before:absolute before:top-1 before:bottom-1 before:-left-1 before:w-[1px] before:bg-black before:content-[''] xl:col-span-6 xl:pl-2">
                <div className="c-text-body c-appear-blur-in c-appear-delay-3 col-span-2 flex flex-row justify-between font-medium xl:col-span-6">
                  <span>Construction</span>
                  <span>McGrath</span>
                </div>
                <span className="c-heading-h1 c-appear-blur-in c-appear-delay-4 col-span-2 mt-auto xl:col-span-5">
                  <span className="c-icon flex! w-[79px]">
                    <svg
                      className="block w-full overflow-visible"
                      viewBox="0 0 376 57"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path className="c-logo-text-only__path"
                        d="M366.019 39.6909C366.019 38.2466 365.555 37.0603 364.627 36.1318C363.75 35.1518 362.589 34.4039 361.145 33.8881C359.752 33.3723 358.179 32.8823 356.425 32.4181C354.723 31.9023 352.995 31.2833 351.242 30.5612C349.539 29.8391 347.966 28.9364 346.522 27.8532C345.129 26.7185 343.969 25.1453 343.04 23.1337C342.163 21.0705 341.725 18.6204 341.725 15.7835C341.725 5.26117 347.76 0 359.83 0C364.627 0 368.83 0.747911 372.441 2.24373L374.375 13.0755V13.8492C369.578 11.8892 365.013 10.9092 360.681 10.9092C354.697 10.9092 351.706 12.7661 351.706 16.4798C351.706 17.7693 352.144 18.8525 353.021 19.7294C353.95 20.6062 355.11 21.3026 356.503 21.8184C357.947 22.3342 359.52 22.8242 361.222 23.2884C362.976 23.701 364.704 24.2684 366.406 24.9905C368.16 25.7127 369.733 26.6153 371.126 27.6985C372.57 28.7301 373.73 30.2259 374.607 32.186C375.536 34.146 376 36.4671 376 39.1493C376 45.3905 374.272 49.8521 370.816 52.5343C367.36 55.1649 362.847 56.4802 357.276 56.4802C351.654 56.4802 346.806 55.4744 342.731 53.4627L340.719 42.6309V41.8572C345.877 44.3331 351.087 45.571 356.348 45.571C362.796 45.571 366.019 43.611 366.019 39.6909Z"
                        fill="currentColor" />
                      <path className="c-logo-text-only__path"
                        d="M332.022 16.867V40.9291C332.022 45.4165 332.616 50.0072 333.802 54.7009V55.4746H320.494V54.7009C321.732 50.1619 322.351 45.5713 322.351 40.9291V32.8826H300.61V40.9291C300.61 45.4165 301.203 50.0072 302.39 54.7009V55.4746H289.082V54.7009C290.32 50.1619 290.939 45.5713 290.939 40.9291V16.7896C290.939 11.4768 290.32 6.44778 289.082 1.70241V0.928711H302.39V1.70241C301.203 6.60252 300.61 11.6574 300.61 16.867V23.985H322.351V16.7896C322.351 11.4768 321.732 6.44778 320.494 1.70241V0.928711H333.802V1.70241C332.616 6.60252 332.022 11.6574 332.022 16.867Z"
                        fill="currentColor" />
                      <path className="c-logo-text-only__path"
                        d="M269.473 16.867V40.9291C269.473 45.4165 270.066 50.0072 271.253 54.7009V55.4746H257.945V54.7009C259.183 50.1619 259.802 45.5713 259.802 40.9291V16.7896C259.802 15.0359 259.725 13.3079 259.57 11.6058H258.255C257.068 11.6058 255.83 11.6574 254.541 11.7605C253.303 11.8637 251.859 12.0184 250.208 12.2247C248.609 12.4311 247.397 12.5858 246.572 12.689V11.9153L248.738 0.928711H280.15L282.394 11.9153V12.689C281.672 12.6374 279.918 12.4569 277.133 12.1474C274.348 11.7863 272.207 11.6058 270.711 11.6058H269.628C269.525 13.9785 269.473 15.7322 269.473 16.867Z"
                        fill="currentColor" />
                      <path className="c-logo-text-only__path"
                        d="M201.78 40.6188L215.707 0.850586H224.14L238.144 40.6188C239.743 45.261 241.935 49.9548 244.721 54.7002V55.4739H230.252C230.355 51.3475 230.02 47.6337 229.246 44.3326H210.678C209.852 47.5821 209.491 51.2959 209.594 55.4739H195.204V54.7002C197.937 49.8517 200.13 45.1579 201.78 40.6188ZM219.807 16.0151L213.386 35.7445H226.539L220.272 16.0151H219.807Z"
                        fill="currentColor" />
                      <path className="c-logo-text-only__path"
                        d="M172.01 33.4242H165.666V40.9291C165.666 45.4165 166.259 50.0072 167.445 54.7009V55.4746H154.138V54.7009C155.376 50.1619 155.995 45.5713 155.995 40.9291V16.7896C155.995 11.4768 155.376 6.44778 154.138 1.70241V0.928711H173.79C178.587 0.928711 182.661 2.37295 186.014 5.26144C189.367 8.14992 191.043 12.1216 191.043 17.1764C191.043 20.787 190.218 23.8303 188.567 26.3061C186.917 28.782 184.673 30.6388 181.836 31.8768L186.014 39.6138C188.903 45.0297 191.972 50.0587 195.221 54.7009V55.4746H181.836L172.01 33.4242ZM165.666 16.867V23.7529H173.171C175.286 23.7529 177.117 23.2629 178.664 22.2829C180.263 21.2513 181.062 19.5491 181.062 17.1764C181.062 14.8038 180.263 13.1532 178.664 12.2247C177.117 11.2447 175.286 10.7547 173.171 10.7547H165.898C165.743 12.7663 165.666 14.8038 165.666 16.867Z"
                        fill="currentColor" />
                      <path className="c-logo-text-only__path"
                        d="M145.69 42.5533V53.5399C141.151 55.4484 136.096 56.4026 130.526 56.4026C122.324 56.4026 115.954 53.9525 111.415 49.0524C106.928 44.1007 104.684 37.1374 104.684 28.1625C104.684 19.2391 106.876 12.3274 111.261 7.42731C115.696 2.5272 121.912 0.0771484 129.907 0.0771484C134.858 0.0771484 139.243 1.05717 143.06 3.01721L145.69 14.0038V14.7775C140.687 12.3532 135.581 11.1411 130.371 11.1411C125.11 11.1411 121.138 12.6627 118.456 15.7059C115.774 18.6976 114.433 22.7982 114.433 28.0078C114.433 33.4752 115.825 37.7564 118.611 40.8512C121.396 43.946 125.187 45.4934 129.984 45.4934C132.666 45.4934 134.652 45.0808 135.942 44.2555V41.7796C135.942 37.0343 135.348 32.4694 134.162 28.0851V27.3114H147.547V28.0851C146.309 32.8821 145.69 37.7048 145.69 42.5533Z"
                        fill="currentColor" />
                      <path className="c-logo-text-only__path"
                        d="M84.8921 0C89.2764 0 93.1965 0.82528 96.6524 2.47584L99.2056 13.8492V14.623C94.9244 12.2503 90.5401 11.0639 86.0527 11.0639C83.4736 11.0639 81.2041 11.5797 79.2441 12.6113C77.3356 13.5913 75.8656 14.9324 74.834 16.6346C73.854 18.3367 73.1318 20.142 72.6676 22.0505C72.2034 23.9074 71.9713 25.919 71.9713 28.0854C71.9713 30.1486 72.1776 32.1344 72.5902 34.0428C73.0545 35.8997 73.7766 37.7308 74.7566 39.5361C75.7882 41.2898 77.2582 42.7083 79.1667 43.7915C81.1268 44.8231 83.4221 45.3389 86.0527 45.3389C90.9528 45.3389 95.8013 44.0752 100.598 41.5478V42.3215L98.7414 53.0759C94.6149 55.2938 89.9985 56.4028 84.8921 56.4028C78.0319 56.4028 72.5387 53.8754 68.4123 48.8205C64.2859 43.7141 62.2227 36.8282 62.2227 28.1627C62.2227 19.4457 64.2859 12.5855 68.4123 7.58227C72.5387 2.52742 78.0319 0 84.8921 0Z"
                        fill="currentColor" />
                      <path className="c-logo-text-only__path"
                        d="M1.70214 38.2985L1.77951 16.0933C1.77951 9.80049 1.36687 5.00354 0.541591 1.70241V0.928711H15.6288L27.5438 38.3758H27.6211L39.6135 0.928711H54.778V1.70241C53.9012 5.00354 53.4628 9.80049 53.4628 16.0933V38.2985C53.4628 43.3017 54.0301 48.7692 55.1649 54.7009V55.4746H42.7857V54.7009C43.9204 48.7692 44.4878 43.276 44.4878 38.2211V14.2364H44.4104L31.6444 50.3682H23.2884L10.7544 14.2364H10.6771V38.1437C10.6771 43.3533 11.2445 48.8724 12.3792 54.7009V55.4746H0V54.7009C1.13476 48.8724 1.70214 43.4049 1.70214 38.2985Z"
                        fill="currentColor" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </c-intro-services>

          {/* Blocks */}
          <div className="c-blocks">

            {/* Full-width Image */}
            <section className="c-grid-container c-appear-blur-in grid" data-scroll>
              <div className="c-safari-image-radius col-span-4 flex items-center overflow-hidden rounded-[4px] bg-current xl:col-span-12">
                <div className="c-image is-loaded w-full -cover -lazy-load h-[110%] w-full" style={{ aspectRatio: "1.6" }} data-scroll="true" data-scroll-speed="-0.075">
                  <picture className="c-image_inner flex h-full w-full">
                    <source
                      srcSet="https://a-ca.storyblok.com/f/2000531/2798x1749/d381147a5b/image-services.jpg/m/128x80/filters:format(auto):no_upscale():quality(70) 128w,https://a-ca.storyblok.com/f/2000531/2798x1749/d381147a5b/image-services.jpg/m/256x160/filters:format(auto):no_upscale():quality(70) 256w,https://a-ca.storyblok.com/f/2000531/2798x1749/d381147a5b/image-services.jpg/m/512x320/filters:format(auto):no_upscale():quality(70) 512w,https://a-ca.storyblok.com/f/2000531/2798x1749/d381147a5b/image-services.jpg/m/1024x640/filters:format(auto):no_upscale():quality(70) 1024w,https://a-ca.storyblok.com/f/2000531/2798x1749/d381147a5b/image-services.jpg/m/1440x900/filters:format(auto):no_upscale():quality(70) 1440w,https://a-ca.storyblok.com/f/2000531/2798x1749/d381147a5b/image-services.jpg/m/1920x1200/filters:format(auto):no_upscale():quality(70) 1920w,https://a-ca.storyblok.com/f/2000531/2798x1749/d381147a5b/image-services.jpg/m/2048x1280/filters:format(auto):no_upscale():quality(70) 2048w"
                      sizes="100vw"
                    />
                    <img
                      src="https://a-ca.storyblok.com/f/2000531/2798x1749/d381147a5b/image-services.jpg/m/2400x1500/filters:format(auto):no_upscale()"
                      alt=""
                      fetchPriority="auto"
                      loading="lazy"
                      className="c-image_img"
                      width={2400}
                      height={1500}
                    />
                  </picture>
                </div>
              </div>
            </section>

            {/* Services Block */}
            <div className="c-block-services">
              <c-services className="c-services">
                <div className="c-grid-container mt-[120px] items-start xl:mt-[200px]">
                  <div className="col-span-4 grid grid-cols-subgrid xl:sticky xl:top-0 xl:left-0 xl:col-span-8 xl:pt-4" data-scroll data-scroll-offset="40%">
                    <div className="col-span-3 mb-[74px] self-start xl:col-span-4 xl:col-start-2 xl:mb-0">
                      <h2 className="c-heading-h2 c-appear-blur-in">Your vision, our mission</h2>
                    </div>
                    <div className="c-appear-up-in c-appear-delay-1 relative col-span-2 col-start-1 mt-[5px] flex aspect-[453/725] items-center overflow-hidden rounded-lg xl:col-span-4 xl:col-start-1 xl:mt-[210px]">
                      <div className="c-image is-loaded w-full -cover -lazy-load" style={{ aspectRatio: "0.6666666666666666" }}>
                        <picture className="c-image_inner flex h-full w-full">

                          <img
                            src="/img/5.jpg"
                            alt=""
                            fetchPriority="auto"
                            loading="lazy"
                            className="c-image_img"
                            width={450}
                            height={675}
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

                    </div>
                  </div>

                  <ul className="l:mt-[499px] col-span-4 mt-[64px] flex flex-col gap-[20px] self-start xl:col-start-9 xl:row-start-1 xl:mt-0" data-scroll data-scroll-offset="15%">
                    <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-1">
                      <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                        <span className="c-heading-h4-alt after:content-['']">01</span>
                        <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                          New construction
                        </h3>
                      </div>
                      <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                        <p>
                          McGrath builds homes that combine quality, innovation and durability. Each project is
                          tailor-made to offer the optimal living environment, built to stand the test of time.
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
                          Rethink your home with a complete renovation. Modernization, optimization of space and
                          quality materials: we make your home a place to live and feel good, with expertise and
                          know-how.
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
                          Optimize your space and comfort with a made-to-measure extension. McGrath builds extensions
                          that integrate harmoniously with your home, for a living environment that evolves with you.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </c-services>
            </div>

            {/* About Block — Mastering every stage */}
            <div className="c-block-about">
              <section className="c-about my-[120px] xl:my-[200px]">
                <div className="c-grid-container before:bg-powder relative before:absolute before:top-0 before:right-[var(--grid-edge-xl)] before:left-[var(--grid-edge-xl)] before:h-[1px] before:content-[''] max-xl:before:hidden xl:items-start xl:before:left-[var(--grid-edge-xl)]">
                  <div className="col-span-3 row-start-1 mb-[64px] xl:sticky xl:top-0 xl:col-span-4 xl:col-start-2 xl:mb-0 xl:py-[272px]">
                    <div className="w-full" data-scroll data-scroll-offset="10%">
                      <h2 className="c-heading-h2 c-appear-blur-in">Mastering every stage of your project</h2>
                    </div>
                  </div>
                  <div className="col-span-2 row-start-2 xl:col-span-3 xl:col-start-5 xl:row-start-1 xl:mt-auto" data-scroll data-scroll-offset="5%">
                    <p className="c-text-body-indent c-appear-blur-in c-appear-delay-1">
                      As your general contractor, we coordinate all stakeholders, foster collaboration,
                      and maintain strict cost control.
                    </p>
                  </div>
                  <div className="before:bg-powder relative col-span-2 row-start-2 before:absolute before:top-[16px] before:bottom-0 before:-left-[var(--grid-gutter-xl)] before:w-[1px] before:content-[''] max-xl:before:hidden xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:pt-[272px]" data-scroll data-scroll-offset="5%">
                    <div className="c-appear-up-in c-appear-delay-2 flex aspect-[453/724] w-full items-center overflow-hidden rounded-lg" data-scroll>
                      <div className="c-image is-loaded w-full -cover -lazy-load h-[104%] w-full" style={{ aspectRatio: "0.625" }} data-scroll="true" data-scroll-speed="-0.05">
                        <picture className="c-image_inner flex h-full w-full">
                          <source
                            srcSet="https://a-ca.storyblok.com/f/2000531/906x1450/910bb9e900/section-about-portrait.jpg/m/128x205/filters:format(auto):no_upscale():quality(70) 128w,https://a-ca.storyblok.com/f/2000531/906x1450/910bb9e900/section-about-portrait.jpg/m/256x410/filters:format(auto):no_upscale():quality(70) 256w,https://a-ca.storyblok.com/f/2000531/906x1450/910bb9e900/section-about-portrait.jpg/m/512x819/filters:format(auto):no_upscale():quality(70) 512w,https://a-ca.storyblok.com/f/2000531/906x1450/910bb9e900/section-about-portrait.jpg/m/1024x1638/filters:format(auto):no_upscale():quality(70) 1024w,https://a-ca.storyblok.com/f/2000531/906x1450/910bb9e900/section-about-portrait.jpg/m/1440x2304/filters:format(auto):no_upscale():quality(70) 1440w,https://a-ca.storyblok.com/f/2000531/906x1450/910bb9e900/section-about-portrait.jpg/m/1920x3072/filters:format(auto):no_upscale():quality(70) 1920w,https://a-ca.storyblok.com/f/2000531/906x1450/910bb9e900/section-about-portrait.jpg/m/2048x3277/filters:format(auto):no_upscale():quality(70) 2048w"
                            sizes="100vw"
                          />
                          <img
                            src="https://a-ca.storyblok.com/f/2000531/906x1450/910bb9e900/section-about-portrait.jpg/m/450x720/filters:format(auto):no_upscale()"
                            alt=""
                            fetchPriority="auto"
                            loading="lazy"
                            className="c-image_img"
                            width={450}
                            height={720}
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="c-grid-container mt-[44px] space-y-[20px]" data-scroll data-scroll-offset="5%">
                  <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-1">
                    <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                      <span className="c-heading-h4-alt after:content-['']">01</span>
                      <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                        Pre-construction
                      </h3>
                    </div>
                    <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                      <ul>
                        <li><p>Project Analysis</p></li>
                        <li><p>Estimating and Budgeting</p></li>
                        <li><p>Obtaining Permits</p></li>
                        <li><p>Planning and Schedules</p></li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-2">
                    <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                      <span className="c-heading-h4-alt after:content-['']">02</span>
                      <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                        Construction
                      </h3>
                    </div>
                    <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                      <ul>
                        <li><p>Construction Phase Execution</p></li>
                        <li><p>Quality Control</p></li>
                        <li><p>Safety Management</p></li>
                        <li><p>Subcontractor Management</p></li>
                        <li><p>Schedule and Budget Monitoring</p></li>
                        <li><p>On site sorting of construction waste</p></li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-3">
                    <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                      <span className="c-heading-h4-alt after:content-['']">03</span>
                      <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                        Post-construction
                      </h3>
                    </div>
                    <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                      <ul>
                        <li><p>Building inspection with the client</p></li>
                        <li><p>Certificate of occupancy</p></li>
                        <li><p>Compliant documentation</p></li>
                        <li><p>Warranty</p></li>
                        <li><p>After-sales service and follow-up</p></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </section>
            </div>

            {/* Contact Block */}
            <div className="c-block-contact">
              <c-contact className="c-contact block my-[105px] xl:my-[200px]" data-scroll="true" data-scroll-offset="5%">
                <div className="c-grid-container">
                  <div className="c-appear-up-in col-span-4 xl:col-span-9 xl:col-start-4">
                    <h2 className="c-text-label">Nous contacter</h2>
                  </div>
                </div>
                <address className="c-grid-container c-heading-h2 [&_div]:border-powder mt-[37px] flex flex-col not-italic [&_div]:border-b [&_div]:py-[8px]">
                  <div className="c-appear-up-in c-appear-delay-1 ease-in-quart hover:ease-out-quad hover:border-blue col-span-4 transition-colors duration-300 xl:col-span-9 xl:col-start-4">

                    <a href="tel:019 762 47284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ease-in-quart hover:ease-out-quad hover:text-blue col-span-4 flex w-full transition-colors duration-300"
                    >
                      019 762 47284
                    </a>
                  </div>
                  <div className="c-appear-up-in c-appear-delay-2 ease-in-quart hover:ease-out-quad hover:border-blue col-span-4 transition-colors duration-300 xl:col-span-9 xl:col-start-4">
                    <a
                      href="info@mcgrathbd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ease-in-quart hover:ease-out-quad hover:text-blue col-span-4 flex w-full transition-colors duration-300"
                    >
                      info@mcgrathbd.com
                    </a>
                  </div>
                  <div className="c-grid-cols-subgrid c-appear-up-in c-appear-delay-3 col-span-4 grid xl:col-span-9 xl:col-start-4">

                    <a href="https://maps.app.goo.gl/CCJVtn2SZoKVSzYV9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ease-in-quart hover:ease-out-quad hover:text-blue col-span-6 transition-colors duration-300"
                    >
                      116 Kazi Nazrul Islam
                      Avenue, Ramna, Dhaka-1217
                    </a>
                  </div>
                </address>
              </c-contact>
            </div>

            {/* Block Title */}
            <div className="c-block-title">
              <c-block-title className="undefined" data-scroll="true" data-scroll-offset="10%">
                <div className="c-grid-container">
                  <div className="col-span-4 grid grid-cols-subgrid xl:col-span-9 xl:col-start-4">
                    <h2
                      className="c-heading-h3-indented js-splitted col-span-4 xl:col-span-9"
                      aria-label="McGrath builds sustainable homes where quality, design and innovation meet. From single-family homes to large-scale residential projects, each construction reflects our expertise and commitment. Explore our achievements and find inspiration for your future home."
                    >
                      <span className="c-heading-h3-indent-spacer">&nbsp;</span> McGrath builds sustainable homes
                      where quality, design and innovation meet. From single-family homes to large-scale residential
                      projects, each construction reflects our expertise and commitment. Explore our achievements and
                      find inspiration for your future home.
                    </h2>
                  </div>
                </div>
              </c-block-title>
            </div>

            {/* About Block — History of trust */}
            <div className="c-block-about">
              <section className="c-about my-[120px] xl:my-[200px]">
                <div className="c-grid-container before:bg-powder relative before:absolute before:top-0 before:right-[var(--grid-edge-xl)] before:left-[var(--grid-edge-xl)] before:h-[1px] before:content-[''] max-xl:before:hidden xl:items-start xl:before:left-[var(--grid-edge-xl)]">
                  <div className="col-span-3 row-start-1 mb-[64px] xl:sticky xl:top-0 xl:col-span-4 xl:col-start-2 xl:mb-0 xl:py-[272px]">
                    <div className="w-full" data-scroll data-scroll-offset="10%">
                      <h2 className="c-heading-h2 c-appear-blur-in">A history of trust and knowledge</h2>
                    </div>
                  </div>
                  <div className="col-span-2 row-start-2 xl:col-span-3 xl:col-start-5 xl:row-start-1 xl:mt-auto" data-scroll data-scroll-offset="5%">
                    <p className="c-text-body-indent c-appear-blur-in c-appear-delay-1">
                      With a tradition rooted in knowledge, McGrath builds sustainable homes with passion and rigor.
                      Commitment, quality and innovation are the cornerstones of each and every one of our projects.
                      Discover our history, our values and our expertise in residential construction.
                    </p>
                    <div className="c-appear-up-in c-appear-delay-2 mt-[20px] xl:mt-[22px]">

                      <a href="/about-us"
                        target="_self"
                        title="About us"
                        data-astro-cid-n7iexiqw
                        className="c-button c-text-cta c-button-m c-button-appear"
                      >
                        <span className="c-button-bg" data-astro-cid-n7iexiqw ></span>
                        <span className="c-button_inner" data-astro-cid-n7iexiqw>
                          <span className="c-bullet" data-astro-cid-n7iexiqw>
                            <span className="c-bullet-hover" data-astro-cid-n7iexiqw></span>
                          </span>
                          <span className="c-button_label" data-astro-cid-n7iexiqw>
                            <span className="c-button_label-hover" data-astro-cid-n7iexiqw >About us</span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="before:bg-powder relative col-span-2 row-start-2 before:absolute before:top-[16px] before:bottom-0 before:-left-[var(--grid-gutter-xl)] before:w-[1px] before:content-[''] max-xl:before:hidden xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:pt-[272px]" data-scroll data-scroll-offset="5%">
                    <div className="c-appear-up-in c-appear-delay-2 flex aspect-[453/724] w-full items-center overflow-hidden rounded-lg" data-scroll>
                      <div className="c-image is-loaded w-full -cover -lazy-load h-[104%] w-full" style={{ aspectRatio: "0.8840864440078585" }} data-scroll="true" data-scroll-speed="-0.05">
                        <picture className="c-image_inner flex h-full w-full">

                          <img
                            src="/img/4.jpg"
                            alt=""
                            fetchPriority="auto"
                            loading="lazy"
                            className="c-image_img"
                            width={450}
                            height={509}
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <ul className="c-grid-container mt-[44px] space-y-[20px]" data-scroll data-scroll-offset="5%"></ul>
          </div>

        </div>
      </div>

      {/* Full Project Card */}
      <c-full-project-card
        className="c-full-project-card block mt-[220px]"
        data-astro-cid-wipjvxqe="true"
      >
        <Link
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
        </Link>
      </c-full-project-card>

    </main >
  );
}
