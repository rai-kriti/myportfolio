import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PayAttention from "@/components/PayAttention";
import ProfileCard from "@/components/ProfileCard";
import TopRated from "@/components/TopRated";
import TopContributor from "@/components/TopContributors";
import { Receipt } from "lucide-react";
import RecentActions from "@/components/RecentActions";
import "@fortawesome/fontawesome-free/css/all.min.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KRITI RAI ",
  description: "Portfolio of Kriti Rai ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Header />
         <Navbar/>
         
         <main className="max-w-[1100px]  w-full mx-auto  mt-4">
          {children}
        </main>
        
      </body>
    </html>
  );
}
