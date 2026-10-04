import Header from "@/components/global/header";
import Script from "next/script";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import AboutContent from "@/components/about/about";
import type { Metadata } from "next";

export const revalidate = 300; // ISR: refresh from Sanity every 5 minutes

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, team and values behind McGrath BD — residential construction in Bangladesh.",
};

export default function About() {
  return (
    <>
      <Header />
      <ContactModal />
      <AboutContent />
      <Footer />
          <Script type="module" src="/_astro/Hero.astro_astro_type_script_index_0_lang.omEH7RPR.js" />
      <Script type="module" src="/_astro/BlockTitle.astro_astro_type_script_index_0_lang.DkQLZZMJ.js" />
      <Script type="module" src="/_astro/SlideShow.astro_astro_type_script_index_0_lang.C7BlXj66.js" />
</>
  );
}
