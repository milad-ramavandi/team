import type { Metadata } from "next";
import "../styles/globals.css";
import Script from "next/script";
import Providers from "../components/providers";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import { Anton, Outfit } from "../components/fonts";
import { ContextHeaderProvider } from "../context/header/ContextHeader";

export const metadata: Metadata = {
  title: "Team",
  description: "We are a tech company that turns ideas into smart solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Outfit.variable} ${Anton.variable}`}>
      <body className={`${Outfit.className} main-container`}>
        <Providers>
          <ContextHeaderProvider>
            <Header />
          </ContextHeaderProvider>
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
