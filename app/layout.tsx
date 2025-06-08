import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./(main)/NavBar";
import Footer from "./(main)/Footer";

export const metadata: Metadata = {
  title: "JetDev | Personal Portfolio",
  description: "Jethro is a front-end developer based in the Philippines.",
};

// !Set one
// const headerFont = localFont({
//   src: "../fonts/PilcrowRounded-Semibold.otf",
//   variable: "--font-header",
// });
// const regularFont = localFont({
//   src: "../fonts/Hind-Regular.otf",
//   variable: "--font-regular",
// });

// !Set two
const headerFont = localFont({
  src: "../fonts/Chillax-Semibold.otf",
  variable: "--font-header",
});
const regularFont = localFont({
  src: "../fonts/Synonym-Regular.otf",
  variable: "--font-regular",
});
// const header2Font = localFont({
//   src: "../fonts/OffBit-101Bold.ttf",
//   variable: "--font-header-2",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${headerFont.variable} ${regularFont.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
