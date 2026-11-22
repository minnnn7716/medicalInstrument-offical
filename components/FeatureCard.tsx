import Image, { type StaticImageData } from "next/image"

export type FeatureCard = {
  iconImage: string | StaticImageData
  title: string
  content: string
  className?: string
}

export default function FeatureCard({
  iconImage,
  title,
  content,
  className = "",
}: FeatureCard) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-4xl bg-white p-6 pt-4 text-center shadow-lg/5 ${className}`}
    >
      <div className="text-primary">
        <Image
          src={iconImage}
          alt=""
          aria-hidden
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </div>
      <h4 className="font-serif text-xl font-extrabold text-primary">
        {title}
      </h4>
      <p className="text-sm">{content}</p>
    </div>
  )
}
