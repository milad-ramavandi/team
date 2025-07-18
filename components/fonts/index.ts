import localFont from "next/font/local";

export const outfit = localFont({
  src: "../../public/fonts/Outfit/static/Outfit-Regular.ttf",
  variable: "--font-outfit",
  display: "swap",
});

export const anton = localFont({
  weight: "400",
  src: "../../public/fonts/Anton/Anton-Regular.ttf",
  variable: "--font-anton",
  display: "swap",
});
