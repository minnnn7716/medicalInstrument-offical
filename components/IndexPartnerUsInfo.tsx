import type { CSSProperties } from "react"
import FeatureCard, { type FeatureCard as FeatureCardType } from "./FeatureCard"
import CustomLinkButton from "./CustomLinkButton";

type IndexPartnerUsInfo = {
  bgColorClass: string;
  index: number;
  title: string;
  cardInfo: FeatureCardType[];
  beforeTitleOpacity?: string;
  afterBgColor?: string;
  afterTitleOpacity?: string;
}

export default function IndexPartnerUsInfo({
  bgColorClass,
  index,
  title,
  cardInfo,
  beforeTitleOpacity,
  afterBgColor = "",
  afterTitleOpacity
}: IndexPartnerUsInfo) {
  const isNeedAfterBg = afterBgColor != "";
  const afterLayerClass = isNeedAfterBg
    ? "relative after:content-[''] after:absolute after:inset-0 after:-z-10 after:bg-(--partner-after-bg)"
    : "";
  const sectionStyle = {
    "--partner-bg": bgColorClass,
    ...(isNeedAfterBg ? { "--partner-after-bg": afterBgColor } : {})
  } as CSSProperties;

  return <div
    className={`rounded-t-[56px] md:rounded-t-[100px] pt-20 md:pt-35 pb-16 md:pb-25 bg-(--partner-bg) ${afterLayerClass}`}
    style={sectionStyle}
  >
    <div className="container mx-auto px-5 md:px-0">
      <style>{`
      .index-partner-title::before {
        content: attr(data-index);
      }

      .index-partner-title::after {
        content: '';
      }

      @media (min-width: 768px) {
        .index-partner-title::after {
          content: attr(data-title);
        }
      }
    `}</style>

      <h3
        data-title={title}
        data-index={index}
        className={`
        index-partner-title relative ml-10 md:ml-22 mb-6 md:mb-4 font-serif font-extrabold text-3xl text-primary
        before:absolute before:font-fragment before:text-[8rem] before:italic before:font-normal before:leading-0 before:-left-[.3em] md:before:-left-[.6em] before:bottom-[.18em] md:before:bottom-[.22em] before:text-black before:mix-blend-overlay ${beforeTitleOpacity || ""}
        after:absolute after:text-3xl md:after:text-5xl after:left-[.25em] after:bottom-[.05em] md:after:bottom-[.15em] after:text-black after:mix-blend-overlay ${afterTitleOpacity || ""}
      `}
      >
        {title}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {
          cardInfo.map((item, index) => (
            <li
              key={`${index}-${item.title}`}
              className="h-full"
            >
              <FeatureCard
                iconImage={item.iconImage}
                title={item.title}
                content={item.content}
                className="h-full"
              />
            </li>
          ))
        }
      </ul>
      <div className="mt-6 flex justify-center md:justify-end md:mt-4">
        <CustomLinkButton href="/why-partner-with-us" content="more" themeColor="transparent" />
      </div>
    </div>
  </div>
}