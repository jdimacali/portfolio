import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Background from "@/components/background";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Dimacali | Personal Portfolio",
  description:
    "James is a self taught full-stack developer that specializes in React.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 h-[5000px] relative pt-28 sm:pt-36`}
      >
        <Background />
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
