import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SubLayout from "@/layouts/SubLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OG Styles",
  description: "Shop whatever you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SubLayout children={children} />
      </body>
    </html>
  );
}
