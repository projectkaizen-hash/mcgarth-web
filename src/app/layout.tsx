import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import WhatsAppButton from "@/components/global/whatsapp-button";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mcgrathbd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "McGrath BD — Residential Construction in Bangladesh",
    template: "%s — McGrath BD",
  },
  description:
    "McGrath specializes in residential construction, delivering sustainable homes that blend craftsmanship, innovation, and industry expertise.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "McGrath BD",
    url: siteUrl,
    images: [
      {
        url: "/img/3.jpg",
        width: 2400,
        height: 1325,
        alt: "McGrath BD residential construction project",
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
  name: "McGrath BD",
  url: siteUrl,
  email: "info@mcgrathbd.com",
  telephone: "+8801976247284",
  address: {
    "@type": "PostalAddress",
    streetAddress: "116 Kazi Nazrul Islam Avenue, Ramna",
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
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
            {children}
          </ThemeProvider>
        </Providers>
        <WhatsAppButton />
        <Script type="module" src="/_astro/SiteHeader.astro_astro_type_script_index_0_lang.CA4e70z3.js" />
        <Script type="module" src="/_astro/ContactModal.astro_astro_type_script_index_0_lang.B2yI8U3U.js" />
        <Script type="module" src="/_astro/SiteFooter.astro_astro_type_script_index_0_lang.Cc1yhH2z.js" />
        <Script type="module" src="/_astro/Layout.astro_astro_type_script_index_1_lang.DAuA-wcV.js" />
        <Script type="module" src="/_astro/Layout.astro_astro_type_script_index_0_lang.D9wEY__Y.js" />
      </body>
    </html>
  );
}