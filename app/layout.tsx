import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Background from "@/components/background";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Toaster from "react-hot-toast";
import ToasterProvider from "@/components/toaster-provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Dimacali | Personal Portfolio",
  description:
    "James is a self taught full-stack developer that specializes in React.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth [overflow-anchor:none]">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-36`}
        suppressHydrationWarning={true}
      >
        <Background />
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <ToasterProvider />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
