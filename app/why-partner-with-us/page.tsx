import type { Metadata } from "next"
import Image from "next/image"
import SubPageBanner from "@/components/SubPageBanner"
import banner from "@/app/assects/images/Contact us background - shake hand.jpg"

import CertificateIcon from "@/app/assects/icons/certificate.svg"
import AnalyzeIcon from "@/app/assects/icons/analyze.svg"
import GroupIcon from "@/app/assects/icons/group.svg"
import ShakeHandIcon from "@/app/assects/icons/handshake.svg"
import BuildingIcon from "@/app/assects/icons/building.svg"
import BankIcon from "@/app/assects/icons/bank.svg"

export const metadata: Metadata = {
  title: "Why Partner With Us",
}

export default function Page() {
  return (
    <>
      <SubPageBanner title="Why Partner With Us" imageUrl={banner} />

      <section className="container px-4 pb-8 pt-12 sm:px-6 md:py-15">
        <div className="md:pl-8 md:pr-10">
          <h2 className="mb-8 border-l-[6px] border-primary pl-4 font-serif text-3xl leading-tight font-extrabold text-primary sm:pl-6 md:mb-10 md:text-4xl md:leading-none" data-aos="fade-up" data-aos-offset="-120">Why Partner With Us</h2>

          {
            featureList.map(({ title, feature }, index) => (
              <ul className="mb-10 pl-0 font-mono last:mb-0 sm:pl-4" key={title} data-aos="fade-up" data-aos-offset="-120">
                <li className="mb-12 last:mb-0 md:mb-15">
                  <div className="flex items-end">
                    <p className="font-fragment italic text-7xl leading-none text-primary mb-1 mr-2">{index + 1}</p>
                    <h3 className="mb-4 inline-block -skew-x-12 bg-primary px-4 py-2 text-lg font-medium text-white sm:pr-12 md:text-xl md:pr-15">
                      <span className="inline-block skew-x-12" dangerouslySetInnerHTML={{ __html: title }}></span>
                    </h3>
                  </div>

                  <ul className="space-y-4 md:space-y-6 ml-12">
                    {feature.map(({ subtitle, content, icon }) => (
                      <li key={subtitle} className="grid grid-cols-1 gap-3 last:mb-0 md:grid-cols-6 md:gap-6">
                        <h4 className="flex items-center gap-3 bg-primary-foreground px-3 py-2 text-base font-medium text-primary md:col-span-2 md:content-center md:px-2 md:py-0 md:text-lg">
                          <Image src={icon} alt="" aria-hidden width={30} height={30} className="h-7 w-7 shrink-0 object-contain" />
                          {subtitle}
                        </h4>
                        <p className="text-sm leading-7 md:col-span-4 md:text-base" dangerouslySetInnerHTML={{ __html: content }}></p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))
          }
        </div>
      </section>
    </>
  )
}

const featureList = [
  {
    title: "Professional Expertise",
    feature: [
      {
        subtitle: "Regulatory Affairs (RA)",
        content: "Our dedicated RA specialists are experienced in Taiwan FDA (TFDA) regulations, enabling efficient product registration and import licensing.",
        icon: CertificateIcon
      },
      {
        subtitle: "Market Strategy & Positioning",
        content: "We understand the local market and develop targeted strategies to support successful product launches and market adoption.",
        icon: AnalyzeIcon
      },
      {
        subtitle: "Sales & Clinical Support",
        content: "Our experienced team supports the full process from product introduction to clinical use, working closely with healthcare professionals.",
        icon: GroupIcon
      }
    ]
  },
  {
    title: "Strong Sales Network",
    feature: [
      {
        subtitle: "Hospital Coverage",
        content: "We have established relationships with hospitals across Taiwan, covering a significant portion of the market.",
        icon: ShakeHandIcon
      },
      {
        subtitle: "Local Distribution Channels",
        content: "Through collaboration with local distributors, we are able to reach broader and niche market segments.",
        icon: BuildingIcon
      },
      {
        subtitle: "Clinical & Academic Connections",
        content: "We maintain close relationships with key medical associations such as the Taiwan Surgical Association, the Taiwan Society of Plastic Surgery, supporting and the Taiwan Society for Burn Injuries and Wound Healing Association.<br />These connections facilitate effective communication of clinical outcomes and help accelerate product adoption in the market.",
        icon: BankIcon
      }
    ]
  }
]