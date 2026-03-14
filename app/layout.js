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
  title: "Olamide Ojelade — Product-Focused Frontend & Mobile Developer",
  description:
    "Frontend and mobile developer crafting high-performance web apps and beautiful mobile experiences. Specializing in Next.js, Vue, Flutter, and modern UI systems. I build fast, scalable, and visually refined digital products.",
  keywords: [
    "Olamide Ojelade",
    "Frontend Developer",
    "Next.js Developer",
    "Vue Developer",
    "Flutter Developer",
    "UI/UX Engineer",
    "Web Developer Nigeria",
    "Mobile App Developer",
    "Product Designer Developer",
    "Fullstack Frontend Engineer",
  ],
  authors: [{ name: "Olamide Ojelade" }],
  creator: "Olamide Ojelade",
  openGraph: {
    title: "Olamide Ojelade — Frontend & Mobile Developer",
    description:
      "I design and build elegant digital products using Next.js, Vue, Flutter, and modern frontend technologies.",
    url: "https://yourdomain.com",
    siteName: "Olamide Ojelade Portfolio",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Olamide Ojelade Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olamide Ojelade — Frontend & Mobile Developer",
    description:
      "Building high-quality web apps and mobile experiences with Next.js, Vue, and Flutter.",
    images: ["/portfolio-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
