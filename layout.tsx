import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const regular = localFont({
  src: "./fonts/Almarai-Regular.ttf",
  variable: "--font-regular",
});
const light = localFont({
  src: "./fonts/Almarai-Light.ttf",
  variable: "--font-light",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${regular.variable} ${light.variable}`}>
        {children}
      </body>
    </html>
  );
}
