"use client"

import { MouseEvent } from "react"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"

const pendingContactScrollKey = "medical-instrument:scroll-contact-us"

const clearHashFromUrl = () => {
  if (!window.location.hash) {
    return
  }

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`)
}

const scrollToContactUs = () => {
  document.getElementById("contactUs")?.scrollIntoView({ behavior: "smooth" })
  clearHashFromUrl()
}

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
    <footer className="bg-[#152652] text-white pt-6 pb-8 md:py-6 px-10 2xl:px-12 font-mono flex flex-col md:flex-row items-center justify-between">
      <ul>
        <li><p className="font-serif text-lg">MEDICAL <br className="md:hidden"/> INSTRUMENT · PORTFOLIO DEMO</p></li>
        <li><a className="mb-2 md:mb-0 inline-block text-sm text-[#D3E8FB] font-light hover:translate-x-1 transition duration-300" href="mailto:hello@example.com">hello@example.com</a></li>
        <li><a className="inline-block text-sm text-[#D3E8FB] font-light hover:translate-x-1 transition duration-300" href="/#contactUs" target="_blank">Fictional brand · Independent portfolio demonstration</a></li>
      </ul>

      <ul className="flex-col md:flex-row text-sm hidden md:flex">
        <li className="px-4"><Link href="/about-us" className="inline-block hover:-translate-y-1 transition duration-300">About us</Link></li>
        <li className="px-4"><Link href="/why-partner-with-us" className="inline-block hover:-translate-y-1 transition duration-300">Why Partner With Us</Link></li>
        <li className="px-4"><Link href="/product-experience" className="inline-block hover:-translate-y-1 transition duration-300">Product Experience</Link></li>
        <li className="pl-4"><Link href="/contact-us" onClick={handleContactClick} className="inline-block hover:-translate-y-1 transition duration-300">Contact</Link></li>
      </ul>
    </footer>
  )
}