import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingBot from "@/components/FloatingBot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VocaBot — Instituto San José",
  description: "Chatbot de orientación vocacional del Instituto San José, Laboulaye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingBot />
      </body>
    </html>
  );
}
