import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Invitation Yoga & Hevia",
  description: "Undangan pernikahan digital",
  icons: {
    icon: [
      { url: "/images/Logo2.png", sizes: "32x32", type: "image/png" },
      { url: "/images/Logo2.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/Logo2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
