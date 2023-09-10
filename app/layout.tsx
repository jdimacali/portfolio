import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Background from "@/components/background";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Toaster from "react-hot-toast";
import ToasterProvider from "@/components/toaster-provider";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

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
        className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50`}
        suppressHydrationWarning={true}
      >
        <Background />
        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            {children}
            <ToasterProvider />
            <ThemeSwitch />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
