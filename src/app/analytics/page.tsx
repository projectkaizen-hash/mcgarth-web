import Analytics from "@/components/analytics/analytics";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function About() {
  return (
    <>
      <Header />
      <Analytics />
      <Footer />
    </>
  );
}
