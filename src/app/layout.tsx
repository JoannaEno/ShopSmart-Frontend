
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NavBar, Footer } from "@/components/compositions"
import App from "./App";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopSmart",
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
          <App>
            {children}
          </App>

        </div>
        <Footer />
      </body>

    </html>
  );
}

