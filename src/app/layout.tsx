import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yuan-Hsiang (Oliver) Huang | NTU Information Management",
  description:
    "Personal website of Yuan-Hsiang Huang — NTU IM student specializing in Operations Research, Optimization, and Data Science.",
  keywords: ["Yuan-Hsiang Huang", "Oliver Huang", "NTU", "Information Management", "Operations Research", "Data Science"],
  authors: [{ name: "Yuan-Hsiang Huang" }],
  openGraph: {
    title: "Yuan-Hsiang (Oliver) Huang",
    description: "NTU IM Student · Operations Research · Data Science",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
