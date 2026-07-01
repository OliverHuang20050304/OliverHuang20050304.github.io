import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeToggle />
      <div className="container">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
