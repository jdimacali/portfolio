import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-28 sm:pt-36">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
