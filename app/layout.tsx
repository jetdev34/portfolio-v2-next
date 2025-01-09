import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headerFont.variable} ${regularFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
