/** Refresh from Sanity at most every 5 minutes (ISR). */
export const revalidate = 300;

import Header from "@/components/global/header";
import Script from "next/script";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import HomeContent from "@/components/home/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <ContactModal />
      <HomeContent />
      <Footer />
          <Script type="module" src="/_astro/BlockTitle.astro_astro_type_script_index_0_lang.DkQLZZMJ.js" />
      <Script type="module" src="/_astro/RotatingImages.astro_astro_type_script_index_0_lang.BQ368rCi.js" />
      <Script type="module" src="/_astro/BlockHomeGallery.astro_astro_type_script_index_0_lang.BwoT9FdZ.js" />
      <Script type="module" src="/_astro/InlineVideo.astro_astro_type_script_index_0_lang.DtCmFUbV.js" />
      <Script type="module" src="/_astro/BlockVideo.astro_astro_type_script_index_0_lang.itwtrYdv.js" />
</>
  );
}
