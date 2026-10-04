'use client';

import { useTheme } from "next-themes";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProjectsModal from "./projects-modal";
import McGrathLogo from "./logo";
import { useRef } from "react";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const { data: session } = useSession();
  const projectsModalRef = useRef<{ openModal: () => void }>(null);

  const handleProjectsClick = () => {
    projectsModalRef.current?.openModal();
  };

  return (
    <c-site-header className="c-site-header" id="site-header">
      <div className="c-grid-container relative flex items-center">
        <div className="xl:col-span-3 xl:col-start-1">
          <Link href="/" className="c-site-header_logo block" title="home">
            <McGrathLogo className="w-full hidden xl:block" />
            <c-logo-text-only
              className="c-logo-text-only down w-full block max-w-[140px] xl:hidden"
              dir="down"
              style={{ opacity: 1 }}
              appear="false"
              data-scroll="true"
              data-scroll-css-progress="true"
            >
              <McGrathLogo className="block w-full overflow-visible" />
            </c-logo-text-only>
          </Link>
        </div>
        <nav className="c-site-header_nav flex items-end justify-between xl:col-span-5 xl:col-start-7 xl:items-center">
          <Link
            href="/"
            className="c-site-header_logo block xl:hidden max-xl:max-w-[calc(100%-35%)]"
            data-menu-open="false"
            title="home"
          >
            <svg
              className="w-full hidden xl:block"
              viewBox="0 0 139 21"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.1109 12.1944L14.0939 17.8875C14.8187 19.3386 15.0785 20.0081 14.8766 20.5H22.2222C21.9453 20.3916 21.5963 20.0081 20.5827 18.3507L13.442 5.68518H8.77952L1.63953 18.3507C0.626267 20.0081 0.276957 20.392 0 20.5H7.3456C7.14369 20.0081 7.40348 19.3386 8.12835 17.8875L11.1113 12.1944H11.1109Z" />
              <path d="M0.768279 5.68518H5.84337V9.39218L0.768279 18.2322V5.68518Z" />
              <path d="M35.4375 12.7455C35.4375 10.1147 34.1061 8.84861 32.0812 8.84861H30.6103V16.6632H32.0812C34.1061 16.6632 35.4375 15.3783 35.4375 12.7455ZM39.3696 12.7455C39.3696 17.1972 36.8273 20.1837 32.0812 20.1837H26.2222C26.5991 19.2546 26.6773 17.7115 26.6773 15.4562V10.0359C26.6773 7.78052 26.5991 6.23751 26.2222 5.32708H32.0812C36.8273 5.32708 39.3696 7.7017 39.3696 12.7455Z" />
              <path d="M44.3452 3.42837L47.5838 0.5L50.2843 1.6676L46.2138 4.13977L44.3452 3.42738V3.42837ZM51.7948 9.26441C51.1785 8.92743 50.3238 8.8289 48.6966 8.8289H45.6163V11.2617H48.1793C49.5285 11.2617 50.4821 11.2025 50.8798 11.0242V14.3881C50.4821 14.2097 49.5285 14.1496 48.1793 14.1496H45.6163V16.6819H48.6966C50.3238 16.6819 51.1785 16.5834 51.7948 16.2474V20.1837H41.2282C41.6051 19.2546 41.6833 17.7115 41.6833 15.4562V10.0359C41.6833 7.78052 41.6051 6.23751 41.2282 5.32708H51.7948V9.26441Z" />
              <path d="M53.6535 19.6497L54.4488 15.5951H54.607C55.1422 16.3666 56.2165 16.9213 57.269 16.9213C58.2413 16.9213 58.818 16.5055 58.818 15.7931C58.818 14.9418 57.4866 14.4078 56.3352 13.4983C55.0037 12.4894 53.9512 11.4607 53.9512 9.5807C53.9512 6.93019 56.0958 5.01079 59.373 5.01079C60.6441 5.01079 61.6966 5.28766 62.4503 5.62464L61.8133 9.34422H61.6164C61.1406 8.82988 60.3839 8.55301 59.6094 8.55301C58.7359 8.55301 58.0811 8.94812 58.0811 9.65952C58.0811 10.4911 59.1336 10.8675 60.4828 11.8568C62.0527 12.984 62.9469 14.0324 62.9469 15.9705C62.9469 18.6023 60.743 20.5 57.6834 20.5C55.9157 20.5 54.4052 20.1049 53.6515 19.6497" />
              <path d="M75.472 12.7258C75.472 10.1739 73.9437 8.72938 71.9189 8.72938C69.894 8.72938 68.3835 10.1739 68.3835 12.7258C68.3835 15.2778 69.9118 16.7814 71.9189 16.7814C73.9259 16.7814 75.472 15.3369 75.472 12.7258ZM64.2714 12.7258C64.2714 7.95788 67.5674 5.0098 71.9189 5.0098C76.2703 5.0098 79.5633 7.95788 79.5633 12.7258C79.5633 17.4938 76.2881 20.5 71.9189 20.5C67.5496 20.5 64.2714 17.5322 64.2714 12.7258Z" />
              <path d="M93.7948 10.0359V15.0601C93.7948 18.3638 91.4712 20.5 87.6786 20.5C83.8861 20.5 81.5625 18.3638 81.5625 15.0601V10.0359C81.5625 7.80023 81.5031 6.25722 81.1262 5.32708H85.9505C85.5944 5.94093 85.5143 6.79126 85.5143 8.41309V14.2284C85.5143 15.8907 86.1899 16.7607 87.6796 16.7607C89.1693 16.7607 89.845 15.8907 89.845 14.2284V8.41309C89.845 6.79126 89.7639 5.94093 89.4087 5.32708H94.233C93.8561 6.25623 93.7958 7.79924 93.7958 10.0359" />
              <path d="M103.002 12.0933C104.413 12.0933 105.188 11.5582 105.188 10.4113C105.188 9.26441 104.435 8.76978 103.002 8.76978H100.858V12.0933H103.002ZM96.9246 15.4562V10.0359C96.9246 7.78052 96.8465 6.23751 96.4696 5.32708H103.421C106.816 5.32708 109.082 6.94891 109.082 10.3325C109.082 12.2312 108.227 13.8343 106.737 14.6452L108.188 17.949C108.822 19.3728 109.16 20.0064 109.596 20.1847H104.572C104.811 19.8477 104.671 19.3147 104.234 18.2062L103.142 15.4355H100.857V17.079C100.857 18.7008 100.937 19.5511 101.294 20.1847H96.4696C96.8465 19.2555 96.9246 17.7125 96.9246 15.4571" />
              <path d="M120.529 12.7455C120.529 10.1147 119.197 8.84861 117.172 8.84861H115.701V16.6632H117.172C119.197 16.6632 120.529 15.3783 120.529 12.7455ZM124.462 12.7455C124.462 17.1972 121.919 20.1837 117.173 20.1837H111.314C111.691 19.2546 111.769 17.7115 111.769 15.4562V10.0359C111.769 7.78052 111.691 6.23751 111.314 5.32708H117.173C121.919 5.32708 124.462 7.7017 124.462 12.7455Z" />
              <path d="M129.042 15.4759V14.2688L124.513 6.79126C123.819 5.66406 123.52 5.42561 123.203 5.32708H128.428C128.267 5.66406 128.468 6.13799 128.963 7.12627L130.988 10.905H131.009L133.055 7.10656C133.551 6.1173 133.73 5.66307 133.59 5.32609H138.815C138.495 5.42462 138.199 5.66307 137.502 6.79028L132.974 14.2679V15.4749C132.974 17.7106 133.054 19.2733 133.432 20.1827H128.587C128.963 19.2733 129.042 17.7106 129.042 15.4749" />
            </svg>
            <c-logo-text-only
              className="c-logo-text-only down w-full xl:hidden"
              dir="down"
              style={{ opacity: 1 }}
              appear="false"
              data-scroll="true"
              data-scroll-css-progress="true"
            >
              <McGrathLogo className="block w-full overflow-visible" />
            </c-logo-text-only>
          </Link>
          <button
            type="button"
            className="c-site-header_nav-close js-mobile-menu-trigger cursor-pointer xl:hidden"
          >
            <span className="c-visually-hidden">Close menu</span>
          </button>
          <ul className="c-site-header_nav-list inline-flex flex-wrap items-center">
            <li className="c-site-header_nav-item" data-nav-id="/gallery">
              <Link
                href="/gallery"
                className="c-site-header_nav-link c-underline-link max-xl:before:bottom-[4px] max-xl:before:h-[2px]"
              >
                Gallery
              </Link>
            </li>
            <li className="c-site-header_nav-item" data-nav-id="/about-us">
              <Link
                href="/about-us"
                className="c-site-header_nav-link c-underline-link after:hidden max-xl:before:bottom-[4px] max-xl:before:h-[2px]"
              >
                About,
              </Link>
            </li>

            <li className="c-site-header_nav-item" data-nav-id="/services">
              <Link
                href="/services"
                className="c-site-header_nav-link c-underline-link max-xl:before:bottom-[4px] max-xl:before:h-[2px]"
              >
                Services
              </Link>
            </li>
            <li className="c-site-header_nav-item max-xl:hidden" data-nav-id="/career">
              <Link
                href="/career"
                className="c-site-header_nav-link c-underline-link"
              >
                Career
              </Link>
            </li>



            <li className="c-site-header_nav-item xl:hidden">
              <Link
                href="/career"
                className="c-underline-link c-site-header_nav-link max-xl:before:bottom-[4px] max-xl:before:h-[2px]"
              >
                Career
              </Link>
            </li>

            <li className="c-site-header_nav-item" data-nav-id="/contact">
              <Link
                href="/contact"
                className="c-site-header_nav-link c-underline-link max-xl:before:bottom-[4px] max-xl:before:h-[2px]"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="xl:hidden" data-swup-replace="">
            <button
              type="button"
              className="c-underline-link cursor-pointer c-site-header_contact"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              data-no-swup
            >
              {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

        </nav>
        <ProjectsModal ref={projectsModalRef} />
        <div className="c-s-text-right gap-unit-md col-span-1 flex justify-end max-xl:col-start-3">
          <button
            type="button"
            className="c-underline-link c-site-header_contact js-contact-trigger cursor-pointer xl:before:bottom-[1px]"
          >
            Projects
          </button>
          <div className="max-xl:hidden">
            {session?.user ? (
              <a
                href="/dashboard"
                className="c-underline-link cursor-pointer c-site-header_contact"
                data-no-swup
              >
                {session.user.name?.split(' ')[0] || 'User'}
              </a>
            ) : (
              <a
                href="/login"
                className="c-underline-link cursor-pointer c-site-header_contact"
                data-no-swup
              >
                Login
              </a>
            )}
          </div>
        </div>
        <div className="col-span-1 flex justify-end xl:hidden">
          <button
            type="button"
            className="c-site-header-burger js-mobile-menu-trigger"
          >
            <span className="c-visually-hidden">Open menu</span>
            <span className="c-site-header-burger_bar" />
            <span className="c-site-header-burger_bar" />
          </button>
        </div>
      </div>
      <div
        className="c-site-header-backdrop fixed inset-0 xl:pointer-events-none xl:hidden"
        aria-hidden="true"
      />
    </c-site-header>
  );
}
