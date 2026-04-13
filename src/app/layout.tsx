import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Nýjustu Fréttir | Myndband.com",
  description: "Next.js og DatoCMS verkefni",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is">
      <body>{children}</body>
    </html>
  );
}