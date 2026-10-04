/** Refresh from Sanity at most every 5 minutes (ISR). */
export const revalidate = 300;

import Header from "@/components/global/header";
import Script from "next/script";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import ServicesContent from "@/components/services/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services",
  description:
    "Residential construction services from McGrath BD — design, build and project delivery.",
};

export default function Services() {
  return (
    <>
      <Header />
      <ContactModal />
      <ServicesContent />
      <Footer />
          <Script type="module" src="/_astro/Hero.astro_astro_type_script_index_0_lang.omEH7RPR.js" />
      <Script type="module" src="/_astro/BlockTitle.astro_astro_type_script_index_0_lang.DkQLZZMJ.js" />
</>
  );
}
