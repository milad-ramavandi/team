import type { Metadata } from "next";
import { Outfit, Anton } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import Providers from "../components/providers";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

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
