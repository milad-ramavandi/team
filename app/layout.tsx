import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import Providers from "../components/providers";
import { anton, outfit } from "../components/fonts";

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
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
