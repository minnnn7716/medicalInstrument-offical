"use client"

import ChevronRightIcon from "./icon/ChevronRightIcon"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import {
  pendingContactScrollKey,
  scrollToContactUs,
  scrollToSection,
} from "@/lib/scroll"

export default function CustomLinkButton({
  href = "#",
  content,
  themeColor = "light",
  isNewBlank = false,
}: {
  href: string
  content: string
  themeColor?: "light" | "dark" | "transparent"
  isNewBlank?: boolean
}) {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "/contact-us") {
      e.preventDefault()
      if (isHomePage) {
        scrollToContactUs()
        return
      }

      sessionStorage.setItem(pendingContactScrollKey, "1")
      router.push("/")
      return
    }

    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.slice(1)
      scrollToSection(id)
    }
  }
  const colorThemeClass =
    themeColor === "light"
      ? "bg-primary-foreground text-primary hover:bg-[#d5e4ef]"
      : themeColor === "dark"
        ? "bg-primary text-white hover:bg-[#0e2561]"
        : "text-primary"

  return (
    <Link
      href={href}
      target={isNewBlank ? "_blank" : "_self"}
      rel={isNewBlank ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={`flex w-fit items-center gap-2 rounded-tl-[1.25rem] rounded-br-[1.25rem] py-1.5 font-serif text-xl font-semibold ${colorThemeClass} ${themeColor === "transparent" ? "" : "pr-8 pl-10"} transition duration-300 hover:translate-x-1`}
    >
      {content} <ChevronRightIcon size={20} />
    </Link>
  )
}
