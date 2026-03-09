import type { Metadata } from "next";
import { Archivo_Black, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relledomi Entertainment | 3D Voxel Experience",
  description: "Live competitions. Viral content. Brand experiences. Nairobi x US.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased overflow-x-hidden bg-background-main text-text-primary">
        {children}
      </body>
    </html>
  );
}
