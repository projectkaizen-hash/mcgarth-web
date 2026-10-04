import Link from "next/link";
import { sanityClient, galleryQuery } from '@/lib/sanity'
import { GalleryCard } from '@/lib/types'

export default async function Gallery() {
  const cards: GalleryCard[] = await sanityClient.fetch(galleryQuery)

  return (
    <main id="swup" className="transition-fade">
      <div id="content">
        <main>
          <c-gallery-scroller class="c-gallery-scroller block w-full overflow-hidden">
            <span
              className="c-icon c-gallery-scroller_icon fixed top-[50%] left-[50%] z-[0] block! w-[40px]! translate-[-50%] xl:w-[76px]!"
              data-astro-cid-nw4aqlt6
            >
              <svg
                width="1.5em"
                height="1em"
                className="svg-logoIcon block! w-[40px]! xl:w-[76px]! h-auto!"
                aria-hidden="true"
                focusable="false"
                data-astro-cid-nw4aqlt6="true"
                data-icon="logoIcon"
              >
                <symbol id="ai:local:logoIcon" viewBox="0 0 79 53">
                  <path
                    fill="#141415"
                    d="m39.5 23.287 10.604 20.367c2.577 5.191 3.5 7.586 2.782 9.346H79c-.985-.388-2.225-1.76-5.829-7.689L47.786 0H31.211L5.83 45.311C2.226 51.241.985 52.614 0 53h26.114c-.718-1.76.205-4.155 2.782-9.346zM2.731 0h18.042v13.262L2.731 44.887z"
                  />
                </symbol>
                <use href="#ai:local:logoIcon"></use>
              </svg>
            </span>

            <div className="c-gallery-scroller_wrapper flex items-center">
              <div className="c-gallery-scroller_content mx-auto flex h-full w-fit flex-col items-center gap-[4px] px-[4px] pt-8 pb-8 whitespace-nowrap xl:flex-row xl:pt-0 xl:pb-0">

                {cards.map((card, index) => (
                  <article
                    key={card._id}
                    is="c-project-card"
                    className="c-project-card relative c-project-card-no-parallax overflow-hidden block mx-auto opacity-0 xl:max-h-[90dvh] xl:w-[40vw]!"
                    style={{ width: card.cardWidth }}
                  >
                    {card.isLinked && (
                      <button
                        type="button"
                        className="c-project-card-click-catcher absolute top-0 left-0 z-1 hidden h-full w-full"
                      >
                        <span className="c-visually-hidden">
                          Afficher plus d&apos;informations
                        </span>
                      </button>
                    )}

                    {card.isLinked && card.project ? (
                      <a className="relative block z-2" href={`/projects/${card.project.slug.current}`}>
                        <div
                          className="c-aspect-ratio c-safari-image-radius relative flex w-full items-center overflow-hidden rounded-[6px] bg-current"
                          style={{ aspectRatio: card.aspectRatio }}
                        >
                          <div
                            className="c-image is-loaded w-full -cover -lazy-load absolute top-0 left-0 h-full w-full"
                            data-scroll="true"
                            style={{
                              aspectRatio: `${card.image.asset.metadata.dimensions.width} / ${card.image.asset.metadata.dimensions.height}`,
                            }}
                          >
                            <picture className="c-image_inner flex h-full w-full">
                              <img
                                src={card.image.asset.url}
                                alt={card.image.alt ?? ''}
                                title={card.image.title ?? ''}
                                fetchPriority="auto"
                                loading="lazy"
                                className="c-image_img"
                                width={card.image.asset.metadata.dimensions.width}
                                height={card.image.asset.metadata.dimensions.height}
                              />
                            </picture>
                          </div>
                        </div>
                        <div className="flex w-full">
                          <div
                            className="c-project-card_appear c-bullet-wrapper absolute right-[4px] bottom-[4px] flex w-[calc(100%-8px)] justify-between rounded bg-white p-[8px] opacity-0 xl:p-[15px]"
                            data-bullet-label="See"
                          >
                            <span className="c-bullet relative top-[2px]">
                              <span className="c-bullet-hover"></span>
                            </span>
                            <div className="flex max-w-[80%] flex-col w-[50%] xl:w-[50%]">
                              <p className="c-text-subtitle flex w-full justify-end border-b pb-[8px]">
                                <span className="flex-grow">{card.project.title}</span>
                                <span className="w-1 border-l"></span>
                                <span>{String(card.project.order ?? index + 1).padStart(2, '0')}</span>
                              </p>
                              <p className="c-text-small pt-[8px]">
                                <i className="mr-0.5">{card.project.year}</i>
                                <span className="pr-1.5 xl:pr-0">{card.project.type}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="relative block z-2">
                        <div
                          className="c-aspect-ratio c-safari-image-radius relative flex w-full items-center overflow-hidden rounded-[6px] bg-current"
                          style={{ aspectRatio: card.aspectRatio }}
                        >
                          <div
                            className="c-image is-loaded w-full -cover -lazy-load absolute top-0 left-0 h-full w-full"
                            style={{
                              aspectRatio: `${card.image.asset.metadata.dimensions.width} / ${card.image.asset.metadata.dimensions.height}`,
                            }}
                            data-scroll="true"
                          >
                            <picture className="c-image_inner flex h-full w-full">
                              <img
                                src={card.image.asset.url}
                                alt={card.image.alt ?? ''}
                                title={card.image.title ?? ''}
                                fetchPriority="auto"
                                loading="lazy"
                                className="c-image_img"
                                width={card.image.asset.metadata.dimensions.width}
                                height={card.image.asset.metadata.dimensions.height}
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                ))}

              </div>

              <Link
                href="/?target=home-gallery"
                data-astro-cid-n7iexiqw="true"
                className="c-button c-text-cta c-button-m c-gallery-scroller_button"
              >
                <span className="c-button-bg" data-astro-cid-n7iexiqw></span>
                <span className="c-button_inner" data-astro-cid-n7iexiqw>
                  <span className="c-bullet" data-astro-cid-n7iexiqw>
                    <span className="c-bullet-hover" data-astro-cid-n7iexiqw></span>
                  </span>
                  <span className="c-button_label" data-astro-cid-n7iexiqw>
                    <span className="c-button_label-hover" data-astro-cid-n7iexiqw>
                      Back to homepage
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </c-gallery-scroller>
        </main>
      </div>
    </main>
  )
}