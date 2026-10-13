import { sanityClient, projectsSummaryQuery } from "@/lib/sanity";
import Link from "next/link";
import { Project } from "@/lib/types";

export default async function ContentModel() {
  let projects: Project[] = [];
  try {
    projects = await sanityClient.fetch<Project[]>(projectsSummaryQuery);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  const ongoingProjects = projects.filter(p => p.status === 'active');
  const upcomingProjects = projects.filter(p => p.status === 'pending');
  const completedProjects = projects.filter(p => p.status === 'completed');

  const ongoingCount = ongoingProjects.length;
  const upcomingCount = upcomingProjects.length;
  const completedCount = completedProjects.length;

  return (
    <c-contact-modal className="c-site-header_contact-modal no-scrollbar">
      <div
        className="c-site-header_contact-modal-inner no-scrollbar flex flex-col xl:flex-row gap-[1px]"
        data-lenis-prevent
      >
        <button
          type="button"
          className="c-site-header_nav-close js-contact-trigger cursor-pointer opacity-0"
        >
          <span className="sr-only">Close contact window</span>
        </button>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <div>
          <Link href="/projects/ongoing">
            <span>
              Ongoing ({ongoingCount})
            </span>
          </Link>
          </div>
        </div>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <div>
          <Link href="/projects/upcoming">
            <span id="phone-content">Upcoming ({upcomingCount})</span>
          </Link>
          </div>
        </div>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <div>
          <Link href="/projects/completed">
            <span id="email-content">Completed ({completedCount})</span>
          </Link>
          </div>
        </div>
        
      </div>
      <div
        className="c-site-contact-backdrop fixed inset-0 xl:!opacity-0"
        aria-hidden="true"
      />
    </c-contact-modal>
  );
}
