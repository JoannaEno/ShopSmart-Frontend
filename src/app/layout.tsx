import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NavBar, Footer } from "@/components/compositions"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bayafy",
  description: "Your online commerce solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <NavBar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
