import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./style.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import WhatsAppButton from "@/components/global/whatsapp-button";

export const metadata: Metadata = {
  title: "Home - McGrath BD",
  description:
    "McGrath specializes in residential construction, delivering sustainable homes that blend craftsmanship, innovation, and industry expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
            {children}
          </ThemeProvider>
        </Providers>
        <WhatsAppButton />
        <Script type="module" src="/_astro/SiteHeader.astro_astro_type_script_index_0_lang.CA4e70z3.js" />
        <Script type="module" src="/_astro/ContactModal.astro_astro_type_script_index_0_lang.B2yI8U3U.js" />
        <Script type="module" src="/_astro/InlineVideo.astro_astro_type_script_index_0_lang.DtCmFUbV.js" />
        <Script type="module" src="/_astro/BlockVideo.astro_astro_type_script_index_0_lang.itwtrYdv.js" />
        <Script type="module" src="/_astro/BlockTitle.astro_astro_type_script_index_0_lang.DkQLZZMJ.js" />
        <Script type="module" src="/_astro/RotatingImages.astro_astro_type_script_index_0_lang.BQ368rCi.js" />
        <Script type="module" src="/_astro/BlockHomeGallery.astro_astro_type_script_index_0_lang.BwoT9FdZ.js" />
        <Script type="module" src="/_astro/SiteFooter.astro_astro_type_script_index_0_lang.Cc1yhH2z.js" />
        <Script type="module" src="/_astro/Layout.astro_astro_type_script_index_1_lang.DAuA-wcV.js" />
        <Script type="module" src="/_astro/Layout.astro_astro_type_script_index_0_lang.D9wEY__Y.js" />
        <Script type="module" src="/_astro/SlideShow.astro_astro_type_script_index_0_lang.C7BlXj66.js" />
        <Script type="module" src="/_astro/Hero.astro_astro_type_script_index_0_lang.omEH7RPR.js" />
        <Script type="module" src="/_astro/GalleryScroller.astro_astro_type_script_index_0_lang.DmHB1ilt.js" />
      </body>
    </html>
  );
}