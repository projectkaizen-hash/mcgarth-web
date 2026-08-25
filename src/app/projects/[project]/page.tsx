import Header from "@/components/global/header";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import { sanityClient, projectsQuery } from "@/lib/sanity";
import { Project } from "@/lib/types";
import SingleProjectContent from "@/components/projects/singleProject";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project: projectSlug } = await params;

  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  const projectIndex = projects.findIndex(p => p.href === `/projects/${projectSlug}`);
  const project = projects[projectIndex];

  if (!project) notFound();

  return (
    <>
      <Header />
      <ContactModal />
      <SingleProjectContent project={project} index={projectIndex} allProjects={projects} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  return projects
    .filter(p => p.href && typeof p.href === 'string')
    .map(p => ({ project: p.href.replace('/projects/', '') }));
}