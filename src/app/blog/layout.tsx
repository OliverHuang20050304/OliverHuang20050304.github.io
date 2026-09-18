import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Controls from "@/components/Controls";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Controls />
      <div className="container">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
