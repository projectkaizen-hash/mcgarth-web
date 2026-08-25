
import TeamSection from "./TeamSection";


export default function About() {
  return (
    <main id="swup" className="transition-fade">
      <div id="content">
        <div>
          <c-hero
            className="c-hero undefined false overflow-visible"
            data-scroll="true"
            data-scroll-call="hero-about"
            id="about"
          >
            <div className="c-grid-container overflow-visible">
              <div className="c-hero-title_wrapper overflow-visible flex-column col-span-4 flex items-end justify-end xl:col-span-11 pt-8">
                <h1 className="c-heading-h1 js-splitted" aria-label="A strong legacy">
                  A strong legacy
                </h1>
              </div>
              <div className="col-span-4 border-b border-black xl:col-span-12 mt-1"></div>
            </div>
          </c-hero>

          <c-intro-about className="c-intro-about" data-scroll="true">
            <div className="c-grid-container">
              <div className="c-intro__card c-grid-cols-subgrid relative col-span-2 grid grid-rows-2 pt-1 pb-2 xl:col-span-6">
                <span className="c-text-body c-appear-blur-in c-appear-delay-1 col-span-2 font-medium xl:col-span-6">
                  A strong legacy
                </span>
                <div className="col-span-2 mt-auto xl:col-span-3">
                  <p className="c-text-body-indent intro-text c-appear-blur-in c-appear-delay-2">
                    Construction McGrath is first and foremost a family story.
                    Founded in 2017 by three brothers - Alexandre, Nicolas and Louis
                    McGrath - the company is rooted in the precious heritage handed
                    down by their father Paul and grandfather Louis.
                  </p>
                </div>
              </div>
              <div className="c-intro__card c-grid-cols-subgrid relative col-span-2 grid grid-rows-2 pt-1 pb-2 before:absolute before:top-1 before:bottom-1 before:-left-1 before:w-[1px] before:bg-black before:content-[''] xl:col-span-6 xl:pl-2">
                <div className="c-text-body c-appear-blur-in c-appear-delay-3 col-span-2 flex flex-row justify-between font-medium xl:col-span-6">
                  <span>Construction</span> <span>McGrath </span>
                </div>
                <span className="c-heading-h1 c-appear-blur-in c-appear-delay-4 col-span-2 mt-auto xl:col-span-5">
                  2017
                </span>
              </div>
            </div>
          </c-intro-about>

          <div className="c-blocks">
            <div className="c-block-image c-space-cancel">
              <section className="c-grid-container c-appear-blur-in grid" data-scroll>
                <div className="c-safari-image-radius col-span-4 flex items-center overflow-hidden rounded-[4px] bg-current xl:col-span-12">
                  <div
                    className="c-image is-loaded w-full -cover -lazy-load h-[110%] w-full"
                    style={{ ["--width" as string]: "2400", ["--height" as string]: "1500", aspectRatio: "1.6" }}
                    data-scroll="true"
                    data-scroll-speed="-0.075"
                  >
                    <picture className="c-image_inner flex h-full w-full">

                      <img
                        src="https://a-ca.storyblok.com/f/2000531/2798x1749/8c9537279d/a-propos.jpg/m/2400x1500/filters:format(auto):no_upscale()"
                        alt=""
                        title="Paul McGrath au vilebrequin et ses frères en 1946"
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
            </div>

            <div className="c-block-title">
              <c-block-title
                className="undefined"
                data-scroll="true"
                data-scroll-offset="10%"
              >
                <div className="c-grid-container">
                  <div className="col-span-4 grid grid-cols-subgrid xl:col-span-9 xl:col-start-4">
                    <h2
                      className="c-heading-h3-indented js-splitted col-span-4 xl:col-span-9"
                      aria-label="Contractors from father to son, the McGrath have played a concrete role in the construction of modern Quebec. Today, the values they instilled - honesty, humility, rigor and empathy - are the very foundations of Construction McGrath ."
                    >
                      <span className="c-heading-h3-indent-spacer">&nbsp;</span>
                      Contractors from father to son, the McGrath have played a
                      concrete role in the construction of modern Quebec. Today, the
                      values they instilled - honesty, humility, rigor and empathy -
                      are the very foundations of Construction McGrath .
                    </h2>
                  </div>
                </div>
              </c-block-title>
            </div>

            <div className="c-block-content">
              <section className="undefined" data-scroll>
                <div className="c-grid-container my-[80px] xl:my-[115px]">
                  <h2 className="c-heading-h2 c-appear-blur-in col-span-3 mb-[92px] xl:col-span-4 xl:col-start-2 xl:mb-0">
                    A heritage of expertise, a passion for building
                  </h2>
                  <div className="c-p-no-split columns-1 xl:columns-2 gap-2 xl:col-span-6 col-span-3 col-start-2 xl:col-start-7 c-appear-blur-in c-appear-delay-1">
                    <p>
                      In 1907, Louis began his apprenticeship as a carpenter. He
                      became a building contractor in 1929, and with the help of his
                      sons, he built houses, schools, churches, a presbytery and
                      many other buildings that would leave their mark on the
                      landscape until his retirement in 1956. Many of these
                      buildings still stand today, testifying to their solidity and
                      durability, notably the hotel on Main Street in Cowansville.
                    </p>
                    <p>
                      In 1957, Paul joined the company founded by his older brothers
                      in 1949, where he held the roles of mechanic, driver, operator
                      and executive foreman. He contributed to major construction
                      sites in Quebec, including Expo 67, James Bay and Highway 10,
                      before becoming owner and manager of the Ford car dealership
                      in Carignan, where he left his mark for 38 years.
                    </p>
                    <p>
                      Apples don&#39;t fall far from the tree, they say. Alexandre,
                      a carpenter by trade, founded Construction McGrath in 2017
                      with his two brothers, themselves already entrepreneurs. In
                      2022, Alexandre Biron joined the team as an active
                      shareholder, supporting the company&#39;s growth and forging
                      new links for its future.
                    </p>
                    <p>
                      Specializing in high-quality residential construction in the
                      Eastern Townships, our company makes a point of offering
                      exceptional homes, built with care and built to stand the test
                      of time. We take a made-to-measure approach, where each
                      project is the fruit of close collaboration with our
                      customers. From planning to site management, we use the finest
                      materials and most advanced techniques to guarantee
                      uncompromising quality.
                    </p>
                    <p>
                      Proud of our history and family heritage, we carry on every
                      day the tradition of excellence, quality and respect that
                      forged us and guides each and every one of our projects.
                      Contact us to bring yours to life.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="c-block-slider">
              <section className="block undefined">
                <c-slider className="c-slider" data-scroll="true">
                  <div className="c-grid-container mt-[100px] mb-[54px] xl:mt-[200px]">
                    <div className="col-span-3 xl:col-span-5 xl:col-start-2">
                      <h2 className="c-text-label">Our story</h2>
                      <p className="c-appear-blur-in c-heading-h2 mt-[16px] xl:mt-[24px]">
                        Yesterday&#39;s experience, tomorrow&#39;s vision
                      </p>
                    </div>
                  </div>
                  <c-slideshow className="c-slideshow mb-[500px]">
                    <div className="relative mb-[100px] xl:mb-[150px]">
                      <ul className="slideshow-container flex gap-[10px] overflow-x-auto max-xl:pr-[var(--grid-edge-s)] max-xl:pl-[var(--grid-edge-s)] xl:gap-0 xl:pr-2">
                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "1.6159250585480094" }}
                          >
                            <div
                              className="c-image is-loaded is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "690", ["--height" as string]: "427", aspectRatio: "1.6159250585480094" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/690x427/b94d6fb712/img1.png/m/690x427/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="McGrath Family, 1941"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={690}
                                  height={427}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            McGrath Family, 1941
                          </p>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "0.7213114754098361" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "308", ["--height" as string]: "427", aspectRatio: "0.7213114754098361" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/308x427/49c1325df9/img2.png/m/308x427/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="Contract for work to be carried out in 1948"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={308}
                                  height={427}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            Contract for work to be carried out in 1948
                          </p>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "1.7777777777777777" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "2400", ["--height" as string]: "1350", aspectRatio: "1.7777777777777777" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/4032x2268/4dd511a57c/outils-anciens.jpeg/m/2400x1350/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="Louis McGrath 's toolbox"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={2400}
                                  height={1350}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            Louis McGrath &#39;s toolbox
                          </p>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "1.2450532724505328" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "2400", ["--height" as string]: "1928", aspectRatio: "1.2448132780082988" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/2454x1971/b714113165/pxl_20250309_143251015-2.jpg/m/2400x1928/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="Exploitation in the St. Lawrence basin for Expo 67"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={2400}
                                  height={1928}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            Exploitation in the St. Lawrence basin for Expo 67
                          </p>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "1.4121475054229935" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "2400", ["--height" as string]: "1700", aspectRatio: "1.411764705882353" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/2604x1844/8f796ad7d1/famille-desourdy.jpeg/m/2400x1700/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="The McGrath brothers in 1980"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={2400}
                                  height={1700}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            The McGrath brothers in 1980
                          </p>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "1.2699696663296258" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "2400", ["--height" as string]: "1890", aspectRatio: "1.2698412698412698" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/2512x1978/235421c9e9/pxl_20250309_143314879-2.jpg/m/2400x1890/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="Transporting a 1954 cable excavator"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={2400}
                                  height={1890}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            Transporting a 1954 cable excavator
                          </p>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "1.405330372015547" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "2400", ["--height" as string]: "1708", aspectRatio: "1.405152224824356" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/2531x1801/2f78b239a9/pxl_20250309_143441463-2.jpg/m/2400x1708/filters:format(auto):no_upscale()"
                                  alt=""
                                  title=""
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={2400}
                                  height={1708}
                                />
                              </picture>
                            </div>
                          </div>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "1.2443181818181819" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "2400", ["--height" as string]: "1929", aspectRatio: "1.244167962674961" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/2409x1936/8d2716c58c/pxl_20250309_143231276-2.jpg/m/2400x1929/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="Machine layout 1975"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={2400}
                                  height={1929}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            Machine layout 1975
                          </p>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "0.7219173069886572" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "1973", ["--height" as string]: "2733", aspectRatio: "0.7219173069886572" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/1973x2733/9b47430e6e/pxl_20250213_181137559-mp-2.jpg/m/1973x2733/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="Louis McGrath 1891-1968"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={1973}
                                  height={2733}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            Louis McGrath 1891-1968
                          </p>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "1.4306645735217163" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "2400", ["--height" as string]: "1678", aspectRatio: "1.430274135876043" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/2734x1911/268657d0d5/pxl_20250309_143541664-2.jpg/m/2400x1678/filters:format(auto):no_upscale()"
                                  alt=""
                                  title=""
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={2400}
                                  height={1678}
                                />
                              </picture>
                            </div>
                          </div>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "0.6784930504754938" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "1855", ["--height" as string]: "2734", aspectRatio: "0.6784930504754938" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/1855x2734/f3e8fe24e6/pxl_20250309_143516215-2.jpg/m/1855x2734/filters:format(auto):no_upscale()"
                                  alt=""
                                  title=""
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={1855}
                                  height={2734}
                                />
                              </picture>
                            </div>
                          </div>
                        </li>

                        <li className="slide-item select-disable pointer-events-none relative block shrink-0 snap-center xl:snap-start xl:pl-[20px]">
                          <div
                            className="flex h-[50vw] min-w-[181px] items-center justify-center overflow-hidden rounded-lg select-none xl:h-[30vw]"
                            style={{ aspectRatio: "0.77294921875" }}
                          >
                            <div
                              className="c-image is-loaded w-full -cover -lazy-load h-full w-full object-cover select-none xl:min-w-[181px]"
                              style={{ ["--width" as string]: "1583", ["--height" as string]: "2048", aspectRatio: "0.77294921875" }}
                            >
                              <picture className="c-image_inner flex h-full w-full">

                                <img
                                  src="https://a-ca.storyblok.com/f/2000531/1583x2048/d6a8edf6b3/485479334_2593982864133042_905824986992563835_n.jpg/m/1583x2048/filters:format(auto):no_upscale()"
                                  alt=""
                                  title="Tender for a presbytery 1948"
                                  fetchPriority="auto"
                                  loading="lazy"
                                  className="c-image_img"
                                  width={1583}
                                  height={2048}
                                />
                              </picture>
                            </div>
                          </div>
                          <p className="c-text-body xl:c-text-small mt-[8px] w-[181px] select-none xl:mt-[16px] xl:w-[265px]">
                            Tender for a presbytery 1948
                          </p>
                        </li>
                      </ul>

                      <div className="right-[8px] z-5 hidden justify-end gap-[4px] max-xl:-bottom-[12px] xl:absolute xl:-top-[90px] xl:right-[20px] xl:flex">
                        <button
                          type="button"
                          className="prev-slide rounded-[100px] border-[2px] border-black bg-white px-[15px] py-[16px] transition-all duration-300 hover:scale-95 xl:px-[28px]"
                        >
                          <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 hover:scale-95"
                          >
                            <path
                              d="M10.5 5.00008H1.5M1.5 5.00008L5.30769 1.19238M1.5 5.00008L5.30769 8.80777"
                              stroke="#141415"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="next-slide rounded-[100px] border-[2px] border-black bg-white px-[15px] py-[16px] transition-all duration-300 hover:scale-105 xl:px-[28px]"
                        >
                          <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 hover:scale-95"
                          >
                            <path
                              d="M1.5 5.00008H10.5M10.5 5.00008L6.69231 8.80777M10.5 5.00008L6.69231 1.19238"
                              stroke="#141415"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </c-slideshow>
                </c-slider>
              </section>
            </div>

            <div className="c-block-content">
              <section className="undefined" data-scroll>
                <div className="c-grid-container my-[80px] xl:my-[115px]">
                  <div className="c-p-no-split columns-1 xl:columns-2 gap-2 xl:col-span-6 col-span-3 col-start-2 xl:col-start-7 c-appear-blur-in">
                    <p>
                      Our commitment goes beyond construction. Deeply rooted in our
                      community, we actively support local causes such as the
                      Cowansville Hospital Foundation and the Guignolée de Bromont,
                      as well as sports teams like the Brome Lake Ducks Rugby Club.
                    </p>
                    <p>
                      Concerned about our environmental impact, we sort residual
                      materials at source on our worksites. Since 2022, we have been
                      involved in the development of the new Ecotri concept, which
                      enables us to divert 70% to 80% of residual materials from
                      landfill sites.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <TeamSection />

            <div className="c-block-services">
              <c-services className="c-services">
                <div className="c-grid-container mt-[120px] items-start xl:mt-[200px]">
                  <div
                    className="col-span-4 grid grid-cols-subgrid xl:sticky xl:top-0 xl:left-0 xl:col-span-8 xl:pt-4"
                    data-scroll
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
                        style={{ ["--width" as string]: "450", ["--height" as string]: "675", aspectRatio: "0.6666666666666666" }}
                      >
                        <picture className="c-image_inner flex h-full w-full">

                          <img
                            src="/img/5.jpg"
                            alt=""
                            title=""
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
                        Every project is unique, and we make every effort to bring
                        it to life with precision and commitment. Thanks to our
                        expertise in project management and construction, we can
                        offer you solutions tailored to your needs, with support
                        every step of the way.
                      </p>
                      <div className="c-appear-up-in c-appear-delay-3 mt-[20px] xl:mt-[40px]">
                        <a
                          href="/en/services"
                          target="_self"
                          title="Services"
                          data-astro-cid-n7iexiqw
                          className="c-button c-text-cta c-button-m c-button-appear"
                        >
                          <span className="c-button-bg" data-astro-cid-n7iexiqw></span>
                          <span className="c-button_inner" data-astro-cid-n7iexiqw>
                            <span className="c-bullet" data-astro-cid-n7iexiqw>
                              <span className="c-bullet-hover" data-astro-cid-n7iexiqw></span>
                            </span>
                            <span className="c-button_label" data-astro-cid-n7iexiqw>
                              <span className="c-button_label-hover" data-astro-cid-n7iexiqw>Services</span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <ul
                    className="l:mt-[499px] col-span-4 mt-[64px] flex flex-col gap-[20px] self-start xl:col-start-9 xl:row-start-1 xl:mt-0"
                    data-scroll
                    data-scroll-offset="15%"
                  >
                    {[
                      {
                        num: "01",
                        title: "New construction",
                        delay: "c-appear-delay-1",
                        desc: "McGrath builds homes that combine quality, innovation and durability. Each project is tailor-made to offer the optimal living environment, built to stand the test of time.",
                      },
                      {
                        num: "02",
                        title: "Complete renovation",
                        delay: "c-appear-delay-2",
                        desc: "Rethink your home with a complete renovation. Modernization, optimization of space and quality materials: we make your home a place to live and feel good, with expertise and know-how.",
                      },
                      {
                        num: "03",
                        title: "Extension",
                        delay: "c-appear-delay-3",
                        desc: "Optimize your space and comfort with a made-to-measure extension. McGrath builds extensions that integrate harmoniously with your home, for a living environment that evolves with you.",
                      },
                    ].map((service) => (
                      <li
                        key={service.num}
                        className={`relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in ${service.delay}`}
                      >
                        <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                          <span className="c-heading-h4-alt after:content-['']">{service.num}</span>
                          <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                            {service.title}
                          </h3>
                        </div>
                        <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                          <p>{service.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </c-services>
            </div>

            <div className="c-block-contact">
              <c-contact
                className="c-contact block my-[105px] xl:my-[200px]"
                data-scroll="true"
                data-scroll-offset="5%"
              >
                <div className="c-grid-container">
                  <div className="c-appear-up-in col-span-4 xl:col-span-9 xl:col-start-4">
                    <h2 className="c-text-label">Contact us</h2>
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
