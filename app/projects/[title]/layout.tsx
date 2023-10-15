import Link from "next/link";
import { BsArrowBarLeft } from "react-icons/bs";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative pt-28 sm:pt-36 ">
      <Link href={"/"}>
        <BsArrowBarLeft className="absolute top-7 left-7 h-10 w-10" />
      </Link>
      {children}
    </section>
  );
}
