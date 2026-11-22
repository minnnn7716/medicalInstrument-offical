"use client"

import { MouseEvent } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { pendingContactScrollKey, scrollToContactUs } from "@/lib/scroll"

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    if (isHomePage) {
      scrollToContactUs()
      return
    }

    sessionStorage.setItem(pendingContactScrollKey, "1")
    router.push("/")
  }

  return (
    <footer className="flex flex-col items-center justify-between bg-[#152652] px-10 pt-6 pb-8 font-mono text-white md:flex-row md:py-6 2xl:px-12">
      <ul>
        <li>
          <p className="font-serif text-lg">
            MEDICAL <br className="md:hidden" /> INSTRUMENT · PORTFOLIO DEMO
          </p>
        </li>
        <li>
          <a
            className="mb-2 inline-block text-sm font-light text-[#D3E8FB] transition duration-300 hover:translate-x-1 md:mb-0"
            href="mailto:hello@example.com"
          >
            hello@example.com
          </a>
        </li>
        <li>
          <p className="inline-block text-sm font-light text-[#D3E8FB]">
            Fictional brand · Independent portfolio demonstration
          </p>
        </li>
      </ul>

      <ul className="hidden flex-col text-sm md:flex md:flex-row">
        <li className="px-4">
          <Link
            href="/about-us"
            className="inline-block transition duration-300 hover:-translate-y-1"
          >
            About us
          </Link>
        </li>
        <li className="px-4">
          <Link
            href="/why-partner-with-us"
            className="inline-block transition duration-300 hover:-translate-y-1"
          >
            Why Partner With Us
          </Link>
        </li>
        <li className="px-4">
          <Link
            href="/product-experience"
            className="inline-block transition duration-300 hover:-translate-y-1"
          >
            Product Experience
          </Link>
        </li>
        <li className="pl-4">
          <Link
            href="/#contactUs"
            onClick={handleContactClick}
            className="inline-block transition duration-300 hover:-translate-y-1"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  )
}
