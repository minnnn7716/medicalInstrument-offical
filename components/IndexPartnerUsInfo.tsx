import type { CSSProperties } from "react"
import FeatureCard, { type FeatureCard as FeatureCardType } from "./FeatureCard"
import CustomLinkButton from "./CustomLinkButton"

type IndexPartnerUsInfoProps = {
  backgroundColor: string
  index: number
  title: string
  cardInfo: FeatureCardType[]
  beforeTitleOpacity?: string
  afterBgColor?: string
  afterTitleOpacity?: string
}

export default function IndexPartnerUsInfo({
  backgroundColor,
  index,
  title,
  cardInfo,
  beforeTitleOpacity,
  afterBgColor = "",
  afterTitleOpacity,
}: IndexPartnerUsInfoProps) {
  const isNeedAfterBg = afterBgColor !== ""
  const afterLayerClass = isNeedAfterBg
    ? "relative after:content-[''] after:absolute after:inset-0 after:-z-10 after:bg-(--partner-after-bg)"
    : ""
  const sectionStyle = {
    "--partner-bg": backgroundColor,
    ...(isNeedAfterBg ? { "--partner-after-bg": afterBgColor } : {}),
  } as CSSProperties

  return (
    <div
      className={`rounded-t-[56px] bg-(--partner-bg) pt-20 pb-16 md:rounded-t-[100px] md:pt-35 md:pb-25 ${afterLayerClass}`}
      style={sectionStyle}
    >
      <div className="container mx-auto px-5 md:px-0">
        <h3
          data-title={title}
          data-index={index}
          className={`index-partner-title relative mb-6 ml-10 font-serif text-3xl font-extrabold text-primary before:absolute before:bottom-[.18em] before:-left-[.3em] before:font-fragment before:text-[8rem] before:leading-0 before:font-normal before:text-black before:italic before:mix-blend-overlay md:mb-4 md:ml-22 md:before:bottom-[.22em] md:before:-left-[.6em] ${beforeTitleOpacity || ""} after:absolute after:bottom-[.05em] after:left-[.25em] after:text-3xl after:text-black after:mix-blend-overlay md:after:bottom-[.15em] md:after:text-5xl ${afterTitleOpacity || ""} `}
        >
          {title}
        </h3>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {cardInfo.map((item, index) => (
            <li key={`${index}-${item.title}`} className="h-full">
              <FeatureCard
                iconImage={item.iconImage}
                title={item.title}
                content={item.content}
                className="h-full"
              />
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center md:mt-4 md:justify-end">
          <CustomLinkButton
            href="/why-partner-with-us"
            content="more"
            themeColor="transparent"
          />
        </div>
      </div>
    </div>
  )
}
