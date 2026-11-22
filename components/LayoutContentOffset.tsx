"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type LayoutContentOffsetProps = {
  children: ReactNode
}

export default function LayoutContentOffset({
  children,
}: LayoutContentOffsetProps) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return <div className={cn(!isHomePage && "pt-20")}>{children}</div>
}
