import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 h-[5000px] relative pt-28 sm:pt-36`}
      >
        <div className="bg-amber-50 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-teal-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        <Header />
        {children}
      </body>
    </html>
  );
}
