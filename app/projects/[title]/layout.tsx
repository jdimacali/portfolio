import Footer from "@/components/footer";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative pt-28 sm:pt-36">
      <Link href={"/"}>
        <FaArrowCircleLeft className="absolute top-7 left-7 h-8 w-8 shadow-2xl hover:scale-[1.15] transition-all" />
      </Link>
      {children}
      <Footer />
    </section>
  );
}
