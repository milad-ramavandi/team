import localFont from "next/font/local";

export const Outfit = localFont({
  src: "../../public/fonts/Outfit/static/Outfit-Regular.ttf",
  variable: "--font-outfit",
  display: "swap",
});

export const Anton = localFont({
  weight: "400",
  src: "../../public/fonts/Anton/Anton-Regular.ttf",
  variable: "--font-anton",
  display: "swap",
});
