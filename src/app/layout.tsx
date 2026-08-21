import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-le-quoc-thang.vercel.app"),
  title: "Lê Quốc Thắng | Full-stack Developer",
  description:
    "Portfolio của Lê Quốc Thắng, Full-stack Developer với 4 năm kinh nghiệm xây dựng website, mobile app và hệ thống sản phẩm thực tế.",
  keywords: [
    "Lê Quốc Thắng",
    "Le Quoc Thang",
    "Full-stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lê Quốc Thắng | Full-stack Developer",
    description:
      "Portfolio giới thiệu kỹ năng, kinh nghiệm và các dự án web/mobile đã triển khai.",
    url: "/",
    siteName: "Lê Quốc Thắng Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 1280,
        height: 1280,
        alt: "Lê Quốc Thắng",
      },
    ],
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lê Quốc Thắng | Full-stack Developer",
    description:
      "Portfolio giới thiệu kỹ năng, kinh nghiệm và các dự án web/mobile đã triển khai.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
