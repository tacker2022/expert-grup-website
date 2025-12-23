import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
      </body>
    </html>
  );
}
