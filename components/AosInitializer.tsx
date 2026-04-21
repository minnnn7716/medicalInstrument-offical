"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import AOS from "aos"

export default function AosInitializer() {
  const pathname = usePathname()

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    })

    const refreshAos = () => {
      AOS.refreshHard()
    }

    const frameId = window.requestAnimationFrame(refreshAos)
    const timeoutId = window.setTimeout(refreshAos, 250)

    window.addEventListener("load", refreshAos)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
      window.removeEventListener("load", refreshAos)
    }
  }, [pathname])

  return null
}