import type { Metadata } from "next";
import "./globals.css";
import "@/styles/css/style.css";
import "@/styles/css/font.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://vijayathiraj.vercel.app"),

  title: "Vijay Athiraj",
  description: "👨‍💻 Vijayathiraj: Full stack developer expertly crafting interactive applications using React, Next.js, Node.js, Nest.js, Express.js, MongoDB, PostgreSQL and Tailwind CSS. Dedicated to high-quality UI and scalable components. View my portfolio!",
  keywords: ["Vijay Athiraj", "Full stack developer", "React", "Next.js", "Node.js", "Nest.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS"],
  authors: [{ name: "Vijay Athiraj" }],
  creator: "Vijay Athiraj",
  publisher: "Vijay Athiraj",
  openGraph: {
    title: "Vijay Athiraj",
    description: "👨‍💻 Vijayathiraj: Full stack developer expertly crafting interactive applications using React, Next.js, Node.js, Nest.js, Express.js, MongoDB, PostgreSQL and Tailwind CSS. Dedicated to high-quality UI and scalable components. View my portfolio!",
    url: "https://vijayathiraj.vercel.app",
    siteName: "Vijay Athiraj",
    images: [
      {
        url: "/images/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Vijay Athiraj",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Athiraj",
    description: "👨‍💻 Vijayathiraj: Full stack developer expertly crafting interactive applications using React, Next.js, Node.js, Nest.js, Express.js, MongoDB, PostgreSQL and Tailwind CSS. Dedicated to high-quality UI and scalable components. View my portfolio!",
    images: ["/images/favicon.ico"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
