import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import WhatsAppButton from "@/components/global/whatsapp-button";
import NavigationBridge from "@/components/global/navigation-bridge";
import { SWUP_GUARD_SCRIPT } from "@/components/global/swup-guard";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mcgrathbd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "McGrath Developments Ltd — Residential Construction in Bangladesh",
    template: "%s — McGrath Developments Ltd",
  },
  description:
    "McGrath Developments Ltd specializes in residential construction, delivering sustainable homes that blend craftsmanship, innovation, and industry expertise.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "McGrath Developments Ltd",
    url: siteUrl,
    images: [
      {
        url: "/img/3.jpg",
        width: 2400,
        height: 1325,
        alt: "McGrath Developments Ltd residential construction project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/3.jpg"],
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "McGrath Developments Ltd",
  url: siteUrl,
  email: "info@mcgrathbd.com",
  telephone: "+8801976247284",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SEL Rose-N-Dale Suite: 1101, 116 Kazi Nazrul Islam Avenue, Ramna",
    addressLocality: "Dhaka",
    postalCode: "1217",
    addressCountry: "BD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" data-no-swup suppressHydrationWarning>
        {/* Must run before the legacy Astro bundles below — see swup-guard.ts */}
        <script dangerouslySetInnerHTML={{ __html: SWUP_GUARD_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
            {children}
          </ThemeProvider>
        </Providers>
        <NavigationBridge />
        <WhatsAppButton />
        <Script type="module" src="/_astro/SiteHeader.astro_astro_type_script_index_0_lang.CA4e70z3.js" />
        <Script type="module" src="/_astro/ContactModal.astro_astro_type_script_index_0_lang.B2yI8U3U.js" />
        <Script type="module" src="/_astro/SiteFooter.astro_astro_type_script_index_0_lang.Cc1yhH2z.js" />
        {/* Page-level custom elements: must be defined globally. Swup swaps only
            #swup on navigation, so scripts rendered inside a page never load
            when you arrive from another page (e.g. the homepage wheel). */}
        <Script type="module" src="/_astro/BlockTitle.astro_astro_type_script_index_0_lang.DkQLZZMJ.js" />
        <Script type="module" src="/_astro/InlineVideo.astro_astro_type_script_index_0_lang.DtCmFUbV.js" />
        <Script type="module" src="/_astro/BlockVideo.astro_astro_type_script_index_0_lang.itwtrYdv.js" />
        <Script type="module" src="/_astro/Hero.astro_astro_type_script_index_0_lang.omEH7RPR.js" />
        <Script type="module" src="/_astro/SlideShow.astro_astro_type_script_index_0_lang.C7BlXj66.js" />
        <Script type="module" src="/_astro/GalleryScroller.astro_astro_type_script_index_0_lang.DmHB1ilt.js" />
        <Script type="module" src="/_astro/Layout.astro_astro_type_script_index_1_lang.DAuA-wcV.js" />
        <Script type="module" src="/_astro/Layout.astro_astro_type_script_index_0_lang.D9wEY__Y.js" />
      </body>
    </html>
  );
}
