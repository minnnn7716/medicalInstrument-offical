"use client"

import { scrollToSection } from "@/lib/scroll"

export default function ScrollAnchor({
  targetId,
  className,
  children,
}: {
  targetId: string
  className?: string
  children: React.ReactNode
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection(targetId)
  }

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
