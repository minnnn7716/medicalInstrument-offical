"use client"

import { MouseEvent, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

import logo from "@/app/assects/images/demo-logo.svg"
import { cn } from "@/lib/utils"

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
  const shouldShowMobileBrandText = shouldUseDarkMobileMenu || shouldUseMobileWhiteBackground

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false)

    if (!isHomePage) {
      return
    }

    event.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    clearHashFromUrl()
  }

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
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
          "fixed top-0 left-0 right-0 z-100 h-20 px-4 sm:px-10 2xl:px-12 py-2 flex items-center justify-between font-serif transition-[background-color,border-color,backdrop-filter] duration-300",
          shouldUseDarkMobileMenu
            ? "border-b border-white/10 bg-slate-950/78 text-white backdrop-blur-md"
            : cn(
                shouldUseMobileWhiteBackground ? "bg-white text-slate-900" : "text-white",
                shouldUseDesktopWhiteBackground
                  ? "md:bg-white md:text-slate-900"
                  : "md:bg-transparent md:text-white",
              ),
        )}
      >
        <Link href="/" className="flex items-center gap-2" onClick={handleHomeClick}>
          <Image src={logo} alt="Medical Instrument Logo" width={50} />
          <div
            className={cn(
              "transition-[opacity,transform] duration-300 md:opacity-100 md:translate-y-0 md:text-slate-900",
              shouldShowMobileBrandText
                ? "opacity-100 translate-y-0"
                : "pointer-events-none -translate-y-1 opacity-0",
            )}
          >
            <h1 className="text-3xl font-extrabold leading-none">MEDICAL</h1>
            <p className="text-sm leading-none">INSTRUMENT · PORTFOLIO DEMO</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className={cn(
            "hidden md:flex gap-2 text-base md:text-lg 2xl:text-xl transition-shadow duration-300 font-medium",
            shouldUseDesktopWhiteBackground ? "text-slate-900" : "text-white text-shadow-lg/30",
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block px-3 hover:-translate-y-1 transition duration-300"
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                "w-6 h-6",
                "text-white",
              )}
            />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6",
                shouldUseMobileWhiteBackground ? "text-slate-900" : "text-white",
              )}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 overflow-hidden pt-20 md:hidden transition-[max-height,opacity,transform] duration-500 ease-out origin-top",
          "bg-linear-to-b from-slate-950 via-slate-900 to-slate-800 shadow-[0_24px_48px_rgba(2,6,23,0.24)]",
          isMobileMenuOpen
            ? "max-h-112 opacity-100 scale-y-100"
            : "pointer-events-none max-h-0 opacity-0 scale-y-95",
        )}
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-3 border-b border-white/10 text-white transition duration-300 hover:bg-white/8"
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
