import Header from "@/components/global/header";
import Script from "next/script";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import ContactContent from "@/components/contact/contact";
import { sanityClient, projectsQuery } from "@/lib/sanity";

async function getProjects() {
  const projects = await sanityClient.fetch(projectsQuery);
  return projects;
}

import type { Metadata } from "next";

export const revalidate = 300; // ISR: refresh from Sanity every 5 minutes

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with McGrath BD. We are here to help with your construction needs and answer questions about our projects.",
};

export default async function Contact() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <ContactModal />
      <ContactContent projects={projects} />
      <Footer />
          <Script type="module" src="/_astro/Hero.astro_astro_type_script_index_0_lang.omEH7RPR.js" />
      <Script type="module" src="/_astro/BlockTitle.astro_astro_type_script_index_0_lang.DkQLZZMJ.js" />
</>
  );
}
