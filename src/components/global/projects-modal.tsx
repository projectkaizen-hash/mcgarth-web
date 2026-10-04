'use client';

import Link from "next/link";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { sanityClient, projectsQuery } from "@/lib/sanity";
import { Project } from "@/lib/types";

export interface ProjectsModalRef {
  openModal: () => void;
}

const ProjectsModal = forwardRef<ProjectsModalRef>((props, ref) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('projects-is-open');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  useEffect(() => {
    // Fetch projects data from API route
    fetch('/api/projects')
      .then(res => res.json())
      .then((data: Project[]) => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('projects-is-open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  const ongoingProjects = projects.filter(p => p.status === 'active' && p.href);
  const upcomingProjects = projects.filter(p => p.status === 'pending' && p.href);
  const completedProjects = projects.filter(p => p.status === 'completed' && p.href);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="c-site-header_projects-modal no-scrollbar is-open">
      <div
        className="c-site-header_projects-modal-inner no-scrollbar"
        data-lenis-prevent
      >
        <button
          type="button"
          onClick={closeModal}
          className="c-site-header_nav-close cursor-pointer"
        >
          <span className="sr-only">Close projects window</span>
        </button>
        
        {/* Ongoing Row */}
        <div className="c-site-header_projects-modal-row">
          <div className="w-full">
            <h3 className="c-projects-modal-row-title">Ongoing</h3>
            <div className="c-projects-modal-grid">
              {ongoingProjects.length > 0 ? (
                ongoingProjects.map((project) => (
                  <Link
                    key={project._id}
                    href={project.href}
                    className="c-projects-modal-item"
                    onClick={closeModal}
                  >
                    <div className="c-projects-modal-item-image">
                      <img loading="lazy" decoding="async" src={project.image} alt={project.title} />
                    </div>
                    <div className="c-projects-modal-item-content">
                      <p className="c-projects-modal-item-title">{project.title}</p>
                      <p className="c-projects-modal-item-year">{project.year}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="c-projects-modal-empty">No ongoing projects</p>
              )}
            </div>
          </div>
        </div>

        {/* Upcoming Row */}
        <div className="c-site-header_projects-modal-row">
          <div className="w-full">
            <h3 className="c-projects-modal-row-title">Upcoming</h3>
            <div className="c-projects-modal-grid">
              {upcomingProjects.length > 0 ? (
                upcomingProjects.map((project) => (
                  <Link
                    key={project._id}
                    href={project.href}
                    className="c-projects-modal-item"
                    onClick={closeModal}
                  >
                    <div className="c-projects-modal-item-image">
                      <img loading="lazy" decoding="async" src={project.image} alt={project.title} />
                    </div>
                    <div className="c-projects-modal-item-content">
                      <p className="c-projects-modal-item-title">{project.title}</p>
                      <p className="c-projects-modal-item-year">{project.year}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="c-projects-modal-empty">No upcoming projects</p>
              )}
            </div>
          </div>
        </div>

        {/* Completed Row */}
        <div className="c-site-header_projects-modal-row">
          <div className="w-full">
            <h3 className="c-projects-modal-row-title">Completed</h3>
            <div className="c-projects-modal-grid">
              {completedProjects.length > 0 ? (
                completedProjects.map((project) => (
                  <Link
                    key={project._id}
                    href={project.href}
                    className="c-projects-modal-item"
                    onClick={closeModal}
                  >
                    <div className="c-projects-modal-item-image">
                      <img loading="lazy" decoding="async" src={project.image} alt={project.title} />
                    </div>
                    <div className="c-projects-modal-item-content">
                      <p className="c-projects-modal-item-title">{project.title}</p>
                      <p className="c-projects-modal-item-year">{project.year}</p>
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
        onClick={closeModal}
        className="c-site-projects-backdrop fixed inset-0"
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      />
    </div>
  );
});

ProjectsModal.displayName = 'ProjectsModal';

export default ProjectsModal;
