"use client"

import { MouseEvent, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  clearHashFromUrl,
  pendingContactScrollKey,
  scrollToContactUs,
} from "@/lib/scroll"

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"
  const [hasReachedAboutUs, setHasReachedAboutUs] = useState(false)
  const [hasScrolledOnMobile, setHasScrolledOnMobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const shouldUseDesktopWhiteBackground = !isHomePage || hasReachedAboutUs
  const shouldUseMobileWhiteBackground = !isHomePage || hasScrolledOnMobile
  const shouldUseDarkMobileMenu = isMobileMenuOpen
  const shouldShowMobileBrandText =
    shouldUseDarkMobileMenu || shouldUseMobileWhiteBackground

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false)

    if (!isHomePage) {
      return
    }

    event.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    clearHashFromUrl()
  }

  const handleNavLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMobileMenuOpen(false)

    if (href !== "/contact-us") {
      return
    }

    event.preventDefault()

    if (isHomePage) {
      scrollToContactUs()
      return
    }

    sessionStorage.setItem(pendingContactScrollKey, "1")
    router.push("/")
  }

  useEffect(() => {
    if (!isHomePage) {
      return
    }

    if (sessionStorage.getItem(pendingContactScrollKey) === "1") {
      sessionStorage.removeItem(pendingContactScrollKey)
      requestAnimationFrame(scrollToContactUs)
    }

    const aboutSection = document.getElementById("about-us")

    const updateScrollState = () => {
      setHasScrolledOnMobile(window.scrollY > 0)

      if (!aboutSection) {
        return
      }

      const triggerPoint = aboutSection.offsetTop - 96
      setHasReachedAboutUs(window.scrollY >= triggerPoint)
    }

    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateScrollState)
    }
  }, [isHomePage])

  const navLinks = [
    { href: "/about-us", label: "About us" },
    { href: "/why-partner-with-us", label: "Why Partner With Us" },
    { href: "/product-experience", label: "Product Experience" },
    { href: "/contact-us", label: "Contact" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-100 flex h-20 items-center justify-between px-4 py-2 font-serif transition-[background-color,border-color,backdrop-filter] duration-300 sm:px-10 2xl:px-12",
          shouldUseDarkMobileMenu
            ? "border-b border-white/10 bg-slate-950/78 text-white backdrop-blur-md"
            : cn(
                shouldUseMobileWhiteBackground
                  ? "bg-white text-slate-900"
                  : "text-white",
                shouldUseDesktopWhiteBackground
                  ? "md:bg-white md:text-slate-900"
                  : "md:bg-transparent md:text-white"
              )
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={handleHomeClick}
        >
          <Image
            src="/demo-logo.svg"
            alt="Medical Instrument concept logo"
            width={50}
            height={50}
          />
          <div
            className={cn(
              "transition-[opacity,transform] duration-300 md:translate-y-0 md:text-slate-900 md:opacity-100",
              shouldShowMobileBrandText
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            )}
          >
            <h1 className="text-3xl leading-none font-extrabold">MEDICAL</h1>
            <p className="text-sm leading-none">INSTRUMENT · CONCEPT</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className={cn(
            "hidden gap-2 text-base font-medium transition-shadow duration-300 md:flex md:text-lg 2xl:text-xl",
            shouldUseDesktopWhiteBackground
              ? "text-slate-900"
              : "text-white text-shadow-lg/30"
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block px-3 transition duration-300 hover:-translate-y-1"
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <X className={cn("h-6 w-6", "text-white")} />
          ) : (
            <Menu
              className={cn(
                "h-6 w-6",
                shouldUseMobileWhiteBackground ? "text-slate-900" : "text-white"
              )}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed top-0 right-0 left-0 z-50 origin-top overflow-hidden pt-20 transition-[max-height,opacity,transform] duration-500 ease-out md:hidden",
          "bg-linear-to-b from-slate-950 via-slate-900 to-slate-800 shadow-[0_24px_48px_rgba(2,6,23,0.24)]",
          isMobileMenuOpen
            ? "max-h-112 scale-y-100 opacity-100"
            : "pointer-events-none max-h-0 scale-y-95 opacity-0"
        )}
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border-b border-white/10 px-4 py-3 text-white transition duration-300 hover:bg-white/8"
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
