import Header from "@/components/global/header";
import Script from "next/script";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import ProjectContent from "@/components/projects/projects";

import type { Metadata } from "next";

export const revalidate = 300; // ISR: refresh from Sanity every 5 minutes

export const metadata: Metadata = {
  alternates: { canonical: "/projects/upcoming" },
  title: "Upcoming Projects",
  description:
    "McGrath BD residential projects coming soon.",
};

export default function UpcomingProjects() {
  return (
    <>
      <Header />
      <ContactModal />
      <ProjectContent filter="upcoming" />
      <Footer />
          <Script type="module" src="/_astro/Hero.astro_astro_type_script_index_0_lang.omEH7RPR.js" />
      <Script type="module" src="/_astro/BlockTitle.astro_astro_type_script_index_0_lang.DkQLZZMJ.js" />
</>
  );
}
