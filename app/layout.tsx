import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.expertgrup2030.com'),
  title: "Expert Grup | Bir Dünya Şirketi",
  description: "Sürdürülebilir mobilite, enerji ve gayrimenkul çözümleri sunan Expert Grup kurumsal web sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
