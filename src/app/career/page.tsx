/** Refresh from Sanity at most every 5 minutes (ISR). */
export const revalidate = 300;

import Header from "@/components/global/header";
import Script from "next/script";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import CareerContent from "@/components/career/career";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open positions at McGrath BD. Build your future with a team delivering sustainable homes across Bangladesh.",
};

export default function Career() {
  return (
    <>
      <Header />
      <ContactModal />
      <CareerContent />
      <Footer />
          <Script type="module" src="/_astro/Hero.astro_astro_type_script_index_0_lang.omEH7RPR.js" />
      <Script type="module" src="/_astro/BlockTitle.astro_astro_type_script_index_0_lang.DkQLZZMJ.js" />
</>
  );
}
