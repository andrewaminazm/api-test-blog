import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "API Test Blog — Manual & Automation API Testing",
    template: "%s | API Test Blog",
  },
  description:
    "Your complete guide to API testing — manual testing, REST Assured, Cypress, Python, Postman collections, and 100+ test cases with real-world examples.",
  keywords: [
    "API testing",
    "REST Assured",
    "Cypress",
    "Python API testing",
    "Postman",
    "manual API testing",
    "automation",
    "QA",
  ],
  authors: [{ name: "API Test Blog" }],
  openGraph: {
    type: "website",
    title: "API Test Blog — Manual & Automation API Testing",
    description: "Your complete guide to API testing with real examples.",
    siteName: "API Test Blog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`} suppressHydrationWarning>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
