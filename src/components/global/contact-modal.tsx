'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";

export default function ContentModel() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then((data: Project[]) => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const ongoingProjects = projects.filter(p => p.status === 'active' && p.href);
  const upcomingProjects = projects.filter(p => p.status === 'pending' && p.href);
  const completedProjects = projects.filter(p => p.status === 'completed' && p.href);

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
          <div className="c-projects-modal-grid">
            {ongoingProjects.length > 0 ? (
              ongoingProjects.map((project) => (
                <Link
                  key={project._id}
                  href={project.href}
                  className="c-projects-modal-item"
                >
                  <div className="c-projects-modal-item-content">
                    <p className="c-projects-modal-item-title text-lg">{project.title}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="c-projects-modal-empty">No ongoing projects</p>
            )}
          </div>
          </div>
        </div>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <div>
          <Link href="/projects/upcoming">
            <span id="phone-content">Upcoming ({upcomingCount})</span>
          </Link>
          <div className="c-projects-modal-grid">
            {upcomingProjects.length > 0 ? (
              upcomingProjects.map((project) => (
                <Link
                  key={project._id}
                  href={project.href}
                  className="c-projects-modal-item"
                >
                  <div className="c-projects-modal-item-content">
                    <p className="c-projects-modal-item-title">{project.title}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="c-projects-modal-empty">No upcoming projects</p>
            )}
          </div>
          </div>
        </div>
        <div className="c-site-header_contact-modal-row js-contact-stg opacity-0">
          <div>
          <Link href="/projects/completed">
            <span id="email-content">Completed ({completedCount})</span>
          </Link>
          <div className="c-projects-modal-grid">
            {completedProjects.length > 0 ? (
              completedProjects.map((project) => (
                <Link
                  key={project._id}
                  href={project.href}
                  className="c-projects-modal-item"
                >
                  <div className="c-projects-modal-item-content">
                    <p className="c-projects-modal-item-title">{project.title}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="c-projects-modal-empty">No completed projects</p>
            )}
          </div>
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
