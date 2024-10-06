import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "ShinaTokan",
  description: "Shinatokan - A Next.js project for library management",
};

const defaultFont = Inter(
  {
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        {children}
      </body>
    </html>
  );
}
