import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "@/components/Container";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evento - Find events around you",
  description: "Browse more than 100k events around you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-950 text-white overflow-y-scroll overflow-x-hidden w-full   `}
        // className={`${inter.className} bg-gray-950 text-white overflow-y-scroll   `}
      >
        <Container>
          <Header />

          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
