import type { Metadata } from "next";
import { Archivo_Black, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relledomi Entertainment — Home of Street Games",
  description:
    "Relledomi Entertainment creates live street competitions and viral content across East Africa. Home of Street Games — coming to Nairobi streets.",
  keywords: [
    "Relledomi",
    "Street Games",
    "Nairobi",
    "entertainment",
    "street competitions",
    "Kenya",
  ],
  openGraph: {
    title: "Relledomi Entertainment — Home of Street Games",
    description:
      "Live street competitions and viral content across East Africa.",
    url: "https://relledomi.com",
    siteName: "Relledomi Entertainment",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
