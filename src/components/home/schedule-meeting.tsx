'use client';

import React, { useState } from 'react';

export default function ScheduleMeeting() {
  // Tomorrow's date as minimum selectable date
  const tomorrowStr = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  })();

  const [meetingType, setMeetingType] = useState<'in-person' | 'virtual'>('in-person');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: tomorrowStr,
    preferredTime: '11:00 AM',
    projectInterest: 'residential',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/schedule-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          meetingType,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit meeting request');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: tomorrowStr,
      preferredTime: '11:00 AM',
      projectInterest: 'residential',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <div className="c-block-about">
      <section className="c-about my-[120px] xl:my-[200px]" data-scroll="true">
        <div className="c-grid-container before:bg-powder relative before:absolute before:top-0 before:right-[var(--grid-edge-xl)] before:left-[var(--grid-edge-xl)] before:h-[1px] before:content-[''] max-xl:before:hidden xl:items-start xl:before:left-[var(--grid-edge-xl)]">
          {/* Left Column: Title + Booking Form */}
          <div
            className="col-span-4 row-start-1 xl:col-span-6 xl:col-start-2 xl:pt-[100px] xl:pb-[140px]"
            data-scroll=""
            data-scroll-offset="5%"
          >
            <div className="w-full mb-[40px] xl:mb-[48px]" data-scroll="" data-scroll-offset="10%">
              <h2 className="c-heading-h2 c-appear-blur-in">
                Schedule a<br />Meeting
              </h2>
            </div>
            {status === 'success' ? (
              <div className="c-appear-up-in rounded-lg border border-powder p-6 xl:p-8 space-y-5 bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="flex items-center space-x-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-sm">
                    ✓
                  </span>
                  <h3 className="c-text-subtitle font-medium text-lg">Meeting Scheduled</h3>
                </div>
                <p className="c-text-body text-sm text-black/75 dark:text-white/75">
                  Thank you, <span className="font-semibold text-black dark:text-white">{formData.name}</span>.
                  Your request for a{' '}
                  <span className="font-semibold text-black dark:text-white">
                    {meetingType === 'in-person' ? 'In-Person Consultation at Ramna' : 'Virtual Video Session'}
                  </span>{' '}
                  on <span className="font-semibold text-black dark:text-white">{formData.preferredDate}</span> at{' '}
                  <span className="font-semibold text-black dark:text-white">{formData.preferredTime}</span> has
                  been received. Our team will verify and send confirmation details to{' '}
                  <span className="font-semibold text-black dark:text-white">{formData.email}</span>.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    data-astro-cid-n7iexiqw="true"
                    className="c-button c-text-cta c-button-m c-button-appear"
                  >
                    <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                    <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                      <span className="c-bullet" data-astro-cid-n7iexiqw="true">
                        <span className="c-bullet-hover" data-astro-cid-n7iexiqw="true"></span>
                      </span>
                      <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                        <span className="c-button_label-hover" data-astro-cid-n7iexiqw="true">
                          Schedule Another
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                {/* Meeting Type Selector */}
                <div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMeetingType('in-person')}
                      className={`px-1.5 py-1.5 rounded-md text-xs uppercase tracking-wider font-medium border transition-all duration-200 text-center ${
                        meetingType === 'in-person'
                          ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                          : 'border-powder text-black/70 dark:text-white/70 hover:border-black dark:hover:border-white'
                      }`}
                    >
                      In-Person (HQ)
                    </button>
                    <button
                      type="button"
                      onClick={() => setMeetingType('virtual')}
                      className={`px-1.5 py-1.5 rounded-md text-xs uppercase tracking-wider font-medium border transition-all duration-200 text-center ${
                        meetingType === 'virtual'
                          ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                          : 'border-powder text-black/70 dark:text-white/70 hover:border-black dark:hover:border-white'
                      }`}
                    >
                      Virtual (Video Call)
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="meeting-name" className="c-text-label block text-[11px] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="meeting-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="c-form-input w-full border border-powder px-1.5 py-1.5 rounded-md"
                  />
                </div>

                {/* Contact: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="meeting-email" className="c-text-label block text-[11px] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="meeting-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@example.com"
                      className="c-form-input w-full border border-powder px-1.5 py-1.5 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="meeting-phone" className="c-text-label block text-[11px] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="meeting-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="017XXXXXXXX"
                      className="c-form-input w-full border border-powder px-1.5 py-1.5 rounded-md"
                    />
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="meeting-date" className="c-text-label block text-[11px] mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="meeting-date"
                      name="preferredDate"
                      min={tomorrowStr}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="c-form-input w-full border border-powder px-1.5 py-1.5 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="meeting-time" className="c-text-label block text-[11px] mb-1">
                      Time Slot *
                    </label>
                    <select
                      id="meeting-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="c-form-select w-full border border-powder px-1.5 py-1.5 rounded-md"
                    >
                      <option value="10:00 AM">10:00 AM – 11:00 AM</option>
                      <option value="11:30 AM">11:30 AM – 12:30 PM</option>
                      <option value="02:30 PM">02:30 PM – 03:30 PM</option>
                      <option value="04:00 PM">04:00 PM – 05:00 PM</option>
                      <option value="05:30 PM">05:30 PM – 06:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Project Interest */}
                <div>
                  <label htmlFor="meeting-interest" className="c-text-label block text-[11px] mb-1">
                    Discussion Focus
                  </label>
                  <select
                    id="meeting-interest"
                    name="projectInterest"
                    value={formData.projectInterest}
                    onChange={handleChange}
                    className="c-form-select w-full border border-powder px-1.5 py-1.5 rounded-md"
                  >
                    <option value="residential">Residential Construction & Development</option>
                    <option value="commercial">Commercial Development</option>
                    <option value="joint-venture">Joint Venture / Landowner Partnership</option>
                    <option value="architecture">Architectural & Structural Design</option>
                    <option value="general">General Inquiry & Overview</option>
                  </select>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="meeting-message" className="c-text-label block text-[11px] mb-1">
                    Notes / Requirements (Optional)
                  </label>
                  <textarea
                    id="meeting-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide any context, location, or goals..."
                    className="c-form-textarea w-full border border-powder px-1.5 py-1.5 rounded-md"
                  />
                </div>

                {status === 'error' && (
                  <p
                    role="alert"
                    className="text-[13px] text-red-600 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 px-3 py-2 rounded-md"
                  >
                    {errorMessage}
                  </p>
                )}

                {/* Submit Button */}
                <div className="pt-2 pb-[70px] md:pb-0">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    data-astro-cid-n7iexiqw="true"
                    className="c-button c-text-cta c-button-m c-button-appear disabled:opacity-60"
                  >
                    <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                    <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                      <span className="c-bullet" data-astro-cid-n7iexiqw="true">
                        <span className="c-bullet-hover" data-astro-cid-n7iexiqw="true"></span>
                      </span>
                      <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                        <span className="c-button_label-hover" data-astro-cid-n7iexiqw="true">
                          {status === 'submitting' ? 'Confirming…' : 'Schedule Meeting'}
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Image */}
          <div
            className="before:bg-powder relative col-span-4 row-start-2 before:absolute before:top-[16px] before:bottom-0 before:-left-[var(--grid-gutter-xl)] before:w-[1px] before:content-[''] max-xl:before:hidden xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:pt-[100px] xl:pb-[140px] xl:sticky xl:top-[100px]"
            data-scroll=""
            data-scroll-offset="5%"
          >
            <div
              className="c-appear-up-in c-appear-delay-2 flex aspect-[453/724] w-full items-center overflow-hidden rounded-lg"
              data-scroll=""
            >
              <div
                className="c-image is-loaded w-full -cover -lazy-load h-[104%] w-full"
                style={{ "--width": 450, "--height": 586, aspectRatio: "0.7679180887372014" } as React.CSSProperties}
                data-scroll="true"
                data-scroll-speed="-0.05"
              >
                <picture className="c-image_inner flex h-full w-full">
                  <img
                    src="/img/4.jpg"
                    alt="McGrath Developments"
                    title="McGrath Developments"
                    fetchPriority="auto"
                    loading="lazy"
                    className="c-image_img object-cover w-full h-full"
                    width={450}
                    height={586}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

