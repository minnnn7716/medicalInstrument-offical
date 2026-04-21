import { Geist_Mono, Inter, Roboto } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "sonner"

import "./globals.css"
import "aos/dist/aos.css"
import AosInitializer from "@/components/AosInitializer"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import LayoutContentOffset from "../components/LayoutContentOffset"
import { cn } from "@/lib/utils";

const robotoHeading = Roboto({ subsets: ['latin'], variable: '--font-heading' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})


export const metadata: Metadata = {
  title: {
    default: "Medical Instrument",
    template: "%s | Medical Instrument",
  },
  description: "Your Trusted Medical Device Distribution Partner in Taiwan.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, robotoHeading.variable)}
    >
      
      <body suppressHydrationWarning>
        <AosInitializer />
        <Toaster
          position="bottom-center"
          richColors
          theme="light"
          toastOptions={{
            classNames: {
              toast: "mt-6 border border-[#D8C1B4] shadow-lg",
              title: "font-medium",
              description: "text-sm text-[#4B5563]",
            }
          }}
        />
        <Navbar />
          <LayoutContentOffset>{children}</LayoutContentOffset>
        <Footer />
      </body>
    </html>
  )
}
