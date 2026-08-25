import Header from "@/components/global/header";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import ContactContent from "@/components/contact/contact";
import { sanityClient, projectsQuery } from "@/lib/sanity";

async function getProjects() {
  const projects = await sanityClient.fetch(projectsQuery);
  return projects;
}

export default async function Contact() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <ContactModal />
      <ContactContent projects={projects} />
      <Footer />
    </>
  );
}
