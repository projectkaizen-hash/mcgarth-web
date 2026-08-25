'use client';

import { useState } from 'react';
import { JobVacancy } from '@/lib/types';

interface ApplicationFormProps {
  jobVacancies: JobVacancy[];
}

export default function ApplicationForm({ jobVacancies }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Handle form submission here
    alert('Application submitted successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="c-application-form" data-scroll>
      <div className="c-grid-container my-[80px] xl:my-[115px]">
        <h2 className="c-heading-h2 c-appear-blur-in col-span-3 mb-[92px] xl:col-span-4 xl:col-start-2 xl:mb-3">
          Apply now
        </h2>
        <div className="col-span-10 xl:col-start-2 c-appear-blur-in c-appear-delay-1">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-3">
              <div className="space-y-2">
                <label htmlFor="name" className="c-text-label block">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="c-form-input w-full border border-black bg-transparent px-2 py-2 rounded-md border-powder focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="c-text-label block">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="c-form-input w-full border border-black bg-transparent px-2 py-2 rounded-md border-powder focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="c-text-label block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="c-form-input w-full border border-black bg-transparent px-2 py-2 rounded-md border-powder focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="role" className="c-text-label block">
                  Position Applying For *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="c-form-select w-full border border-black bg-transparent px-2 py-2 rounded-md border-powder focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                >
                  <option value="">Select a position</option>
                  {jobVacancies.map((job) => (
                    <option key={job._id} value={job.title}>
                      {job.title} - {job.location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="c-text-label block">
                Cover Letter / Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="c-form-textarea w-full border border-black bg-transparent px-2 py-2 rounded-md border-powder focus:outline-none focus:ring-2 focus:ring-black resize-none transition-all duration-300"
                placeholder="Tell us about yourself and why you'd like to join our team"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="resume" className="c-text-label block">
                Resume / CV *
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="c-form-file w-full border border-black bg-transparent px-2 py-2 rounded-md border-powder focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
              <p className="c-text-small text-gray-600">Accepted formats: PDF, DOC, DOCX</p>
            </div>

            <div className="c-appear-up-in c-appear-delay-1">
              <button
                type="submit"
                data-astro-cid-n7iexiqw="true"
                className="c-button c-text-cta c-button-m"
              >
                <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                  <span className="c-bullet" data-astro-cid-n7iexiqw="true">
                    <span className="c-bullet-hover" data-astro-cid-n7iexiqw="true"></span>
                  </span>
                  <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                    <span className="c-button_label-hover" data-astro-cid-n7iexiqw="true">Submit Application</span>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
