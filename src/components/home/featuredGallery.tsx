import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import McGrathLogo from "@/components/global/logo";

import {
  featuredGalleryImagesQuery,
  homeRotatingProjectsQuery,
  sanityClient,
} from "@/lib/sanity";

interface FeaturedImage {
  image: {
    asset: { url: string };
    alt?: string;
    title?: string;
  };
  title?: string | null;
  href?: string | null;
  year?: number | null;
  status?: string | null;
  startDate?: string | null;
  location?: string | null;
  handOverDate?: string | null;
  coordinates?: { lat: number; lng: number } | null;
}

export default async function FeaturedGallery() {
  // Projects picked in Studio → Home settings drive the rotating circle.
  const settings = await sanityClient.fetch<{
    projects?: FeaturedImage[] | null;
  }>(homeRotatingProjectsQuery);
  const selectedProjects = settings?.projects ?? [];

  // Fall back to featured gallery images until projects are selected.
  const featuredImages: FeaturedImage[] =
    selectedProjects.length > 0
      ? selectedProjects
      : await sanityClient.fetch<FeaturedImage[]>(featuredGalleryImagesQuery);

  const wheelItems: WorksWheelItem[] = featuredImages.map((item) => ({
    title: item.title || item.image.title || "Project",
    image: item.image.asset.url,
    href: item.href || "/gallery",
    location: item.location ?? undefined,
    coordinates: item.coordinates ?? undefined,
    status: item.status ?? undefined,
    startDate: item.startDate ?? undefined,
    year: item.year ?? undefined,
    handOverDate: item.handOverDate || (item.year ? String(item.year) : undefined),
  }));

  // Pinning container: outer wrapper gives scroll height (e.g. 350vh)
  // while the inner section stays pinned (sticky top-0 h-screen).
  // The user scrolls naturally through this track, turning the wheel!
  return (
    <div className="c-block-home-gallery relative w-full h-[350vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden px-[8px] xl:px-[20px] pt-[70px] pb-2 flex items-center justify-center">
        <div
          className="relative w-full h-full rounded-[8px] overflow-hidden bg-[#F1ECE8] dark:bg-[#1f1d1a] shadow-sm"
          id="home-gallery"
        >
          <WorksWheel
            items={wheelItems}
            label={
              <div className="flex items-center justify-center w-[64px] sm:w-[80px] xl:w-[96px]">
                <McGrathLogo className="w-full text-current" />
              </div>
            }
            action="Explore"
            className="bg-transparent dark:bg-transparent h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
