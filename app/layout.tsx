import type { Metadata } from "next";
import "../styles/globals.css";
// import Header from "../components/ui/Header/Header";
// import Footer from "../components/ui/Footer/Footer";
import Providers from "../components/providers";
import { anton, outfit } from "../components/fonts";
import Script from "next/script";
import ClientLayout from "../components/layouts/client-layout";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${anton.variable}`}>
      <body className={outfit.className}>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
          {/* <Header /> */}

          {/* <Footer /> */}
        </Providers>
        <Script
          strategy={"beforeInteractive"}
          src="../js/plugins/swiper.min.js"
        ></Script>
      </body>
    </html>
  );
}
