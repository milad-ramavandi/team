import type { Metadata } from "next";
import "../styles/globals.css";

import Script from "next/script";
import { anton, outfit } from "../components/fonts";
import Providers from "../components/providers";
import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";

export const metadata: Metadata = {
  title: "test",
  description: "test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${anton.variable}`}>
      <body className={`${outfit.className} main-container`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Script
          strategy={"beforeInteractive"}
          src="../js/plugins/swiper.min.js"
        ></Script>
      </body>
    </html>
  );
}
