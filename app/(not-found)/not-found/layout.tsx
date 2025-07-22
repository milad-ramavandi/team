import Script from "next/script";
import { anton, outfit } from "../../../components/fonts";
import BootstrapProvider from "../../../components/providers/bootstrap-provider";
import Header from "../../../components/ui/Header/Header";
import "../../../styles/globals.css";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'test',
  description: 'test',
}

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${anton.variable}`}>
      <body className={outfit.className}>
        <BootstrapProvider>
          <Header isNotFound={true} />
          {children}
        </BootstrapProvider>
        <Script
          strategy={"beforeInteractive"}
          src="../js/plugins/swiper.min.js"
        ></Script>
      </body>
    </html>
  );
}
