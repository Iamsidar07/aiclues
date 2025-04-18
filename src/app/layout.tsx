import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from './components/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIClues Inc - Discover channel partners for your business",
  description:
    "We help the enterprises increase their direct and indirect sales (by discovering the right channel partners for them). We manage the sales process end to end starting from lead generation to contract closure or a part of it depending on the client's requirements.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        <Navbar />
        <main className="flex flex-col min-h-screen items-center relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
