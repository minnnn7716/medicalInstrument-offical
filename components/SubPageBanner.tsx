import Image from "next/image"
import type { StaticImageData } from "next/image"

export default function SubPageBanner({
  title,
  imageUrl,
}: {
  title: string
  imageUrl: StaticImageData
}) {
  return (
    <section className="hero-fade-in h-[30svh] md:h-[50svh] 2xl:h-[40svh]">
      <Image
        src={imageUrl}
        alt={`${title} banner`}
        className="h-full w-full object-cover"
      />
    </section>
  )
}
