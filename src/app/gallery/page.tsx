import Header from "@/components/global/header";
import Script from "next/script";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import GalleryContent from "@/components/gallery/gallery";
import type { Metadata } from "next";

export const revalidate = 300; // ISR: refresh from Sanity every 5 minutes

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from McGrath BD construction projects — ongoing, completed and upcoming residential developments.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <ContactModal />
      <GalleryContent />
      <Footer />
          <Script type="module" src="/_astro/GalleryScroller.astro_astro_type_script_index_0_lang.DmHB1ilt.js" />
</>
  );
}
