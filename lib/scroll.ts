// Called from client-side event handlers and effects only.
export const pendingContactScrollKey = "portfolio:scroll-contact-us"

export function clearHashFromUrl() {
  if (!window.location.hash) return

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}`
  )
}

export function scrollToSection(targetId: string) {
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  clearHashFromUrl()
}

export function scrollToContactUs() {
  scrollToSection("contactUs")
}
