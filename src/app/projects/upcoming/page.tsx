import Header from "@/components/global/header";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import ProjectContent from "@/components/projects/projects";

export default function UpcomingProjects() {
  return (
    <>
      <Header />
      <ContactModal />
      <ProjectContent filter="upcoming" />
      <Footer />
    </>
  );
}
