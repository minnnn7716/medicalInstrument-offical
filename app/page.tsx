import type { Metadata } from "next"
import { demoProducts } from "@/lib/demo-products"
import Image from "next/image"
import CustomLinkButton from "@/components/CustomLinkButton"
import ScrollAnchor from "@/components/layout/ScrollAnchor"
import IndexPartnerUsInfo from "@/components/IndexPartnerUsInfo"
import ContactForm from "@/components/ContactForm"

import CertificateIcon from "@/app/assects/icons/certificate.svg"
import AnalyzeIcon from "@/app/assects/icons/analyze.svg"
import GroupIcon from "@/app/assects/icons/group.svg"
import ShakeHandIcon from "@/app/assects/icons/handshake.svg"
import BuildingIcon from "@/app/assects/icons/building.svg"
import BankIcon from "@/app/assects/icons/bank.svg"

import skinGraftingSurgeryImg from "@/app/assects/images/Professional skin grafting surgery.webp"
import sutureSurgery from "@/app/assects/images/Suture surgery.jpg"
import contactUsBG_shakeHand from "@/app/assects/images/Contact us background - shake hand.jpg"
import contactUsBG_shakeHand_mobile from "@/app/assects/images/Contact us background-shake hand-mobile.jpg"

export const metadata: Metadata = {
  title: {
    absolute: "Medical Instrument",
  },
}

export default function Page() {
  return (
    <div className="min-h-svh">
      {/* Header */}
      <header className="flex flex-col-reverse bg-linear-to-b from-[#EEF8FF] to-[#ffffff] md:flex-row">
        <section className="flex-auto pl-6 md:size-[45%]">
          <div className="hero-fade-up content-center pr-6 pl-2 md:min-h-svh md:pr-8 md:pl-4 2xl:pr-16 2xl:pl-10">
            <div className="font-serif text-primary">
              <p className="mt-6 mb-2 text-5xl leading-[1.2] font-extrabold md:mt-0">
                Medical <br className="md:hidden" /> Instrument
              </p>
              <h2 className="text-xl font-medium">
                Your Trusted Medical Device Distribution Partner in Taiwan.
              </h2>
            </div>

            <hr className="my-5 w-[10%] border-primary" />

            <p>
              For this concept, we have been connecting global medical device
              manufacturers with hospitals across Taiwan.
              <br />
              <br />
              Specialized in surgical implants, advanced wound care, and dermal
              regeneration solutions.
            </p>

            <div className="mt-4 flex justify-end">
              <CustomLinkButton
                href="/contact-us"
                content="Contact us"
                themeColor="dark"
              />
            </div>
          </div>
        </section>

        <div className="hero-fade-in relative top-0 right-0 ml-auto h-[50svh] w-full overflow-hidden rounded-b-[4rem] md:size-[55%] md:min-h-svh md:rounded-l-[4rem] md:rounded-br-none">
          <Image
            src={skinGraftingSurgeryImg}
            alt="Professional skin grafting surgery"
            loading="eager"
            fill
            sizes="(max-width: 767px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </header>

      {/* About us */}
      <section
        id="about-us"
        className="my-16 grid scroll-mt-24 grid-cols-1 gap-8 md:my-30 md:grid-cols-2 md:gap-0"
        data-aos="fade-up"
      >
        <div className="mr-0 overflow-hidden md:mr-10 md:rounded-r-[2rem]">
          <Image
            src={sutureSurgery}
            alt="Professional suture surgery"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="content-center px-6 py-4 md:pr-10 md:pl-8">
          <h2 className="mb-6 border-l-[6px] border-primary pl-6 font-serif text-4xl leading-none font-extrabold text-primary">
            About us
          </h2>
          <p className="mb-6">
            Medical Instrument is a Taiwan-based medical device distributor
            created for portfolio demonstration.
            <br />
            <br />
            We focus on introducing high-quality medical solutions to healthcare
            institutions across Taiwan. Our core areas include surgical
            implants, advanced wound care, and dermal regeneration.
            <br />
            <br />
            With long-term relationships in the healthcare sector, we support
            our partners in bringing products into real clinical use.
            <br />
            <br />
            Based in Taiwan, supporting market entry and expansion.
          </p>

          <div className="flex justify-center md:justify-end">
            <CustomLinkButton
              href="/about-us"
              content="more"
              themeColor="light"
            />
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section>
        <h2
          className="-mb-6.5 text-center font-serif text-4xl font-extrabold text-primary md:-mb-7.5 md:text-[2.75rem]"
          data-aos="fade-up"
        >
          Why Partner With Us
        </h2>

        <IndexPartnerUsInfo
          backgroundColor="#E7EFF9"
          index={1}
          title="Professional Expertise"
          cardInfo={[
            {
              iconImage: CertificateIcon,
              title: "Regulatory Affairs (RA)",
              content:
                "Experienced in Taiwan FDA (TFDA) processes and hospital entry.",
            },
            {
              iconImage: AnalyzeIcon,
              title: "Market Strategy & Positioning",
              content: "Support product launch and market adoption.",
            },
            {
              iconImage: GroupIcon,
              title: "Sales & Clinical Support",
              content:
                "Supports the full process from product introduction to clinical use.",
            },
          ]}
        />

        <IndexPartnerUsInfo
          backgroundColor="#CCDFF8"
          index={2}
          title="Strong Sales Network"
          afterBgColor="#E7EFF9"
          beforeTitleOpacity="before:opacity-60"
          afterTitleOpacity="after:opacity-60"
          cardInfo={[
            {
              iconImage: ShakeHandIcon,
              title: "Hospital Coverage",
              content: "Access to major medical centers across Taiwan.",
            },
            {
              iconImage: BuildingIcon,
              title: "Local Distribution Channels",
              content: "Reliable logistics with full market coverage.",
            },
            {
              iconImage: BankIcon,
              title: "Clinical & Academic Connections",
              content: "Established relationships with key opinion leaders.",
            },
          ]}
        />
      </section>

      <section className="relative overflow-hidden before:absolute before:top-[-10%] before:left-[-18%] before:-z-1 before:h-[65vw] before:w-[65vw] before:rounded-[15vw] before:bg-[#E7EFF9] before:blur-xl before:content-[''] after:absolute after:right-[-10%] after:bottom-[-5%] after:-z-1 after:h-[40vw] after:w-[40vw] after:rounded-[15vw] after:bg-[#FFF8ED] after:blur-xl after:content-[''] md:before:top-[-35%] md:before:left-[-3%] md:before:h-[35vw] md:before:w-[35vw] md:after:right-[-3%] md:after:bottom-[-10%] md:after:h-[20vw] md:after:w-[20vw]">
        <div
          className="container grid grid-cols-1 gap-4 px-6 py-15 md:grid-cols-3 md:gap-15 md:py-20 md:pr-0 md:pl-20"
          data-aos="fade-up"
        >
          <div className="flex flex-col justify-between">
            <h2 className="mb-6 border-l-[6px] border-primary pl-5 font-serif text-4xl leading-none font-extrabold text-primary md:mb-0 md:pl-6 md:text-5xl">
              Product
              <br />
              Experience
            </h2>
            <div className="mt-6 hidden justify-end md:flex">
              <CustomLinkButton
                href="/product-experience"
                content="more"
                themeColor="transparent"
              />
            </div>
          </div>
          <ul className="md:col-span-2 md:col-start-2">
            {productList.map((product, index) => (
              <li
                key={`${index}-${product.productName}`}
                className="mb-8 last:mb-3"
              >
                <a
                  href={product.url}
                  className="group flex flex-col gap-3 leading-tight transition-transform duration-300 hover:translate-x-1 md:flex-row md:gap-4 md:leading-none"
                >
                  <h3 className="w-40 content-center bg-primary py-1 text-center font-mono font-semibold text-white group-hover:bg-[#3357b5] md:w-50 md:py-3">
                    {product.brand}
                  </h3>
                  <h4 className="content-center font-serif text-2xl font-bold md:text-xl">
                    {product.productName}
                  </h4>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-end md:hidden">
            <CustomLinkButton
              href="/product-experience"
              content="more"
              themeColor="transparent"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <ScrollAnchor
        targetId="contactUs"
        className="group relative block min-h-[60svh] content-center overflow-hidden px-5 py-10 md:h-[50svh] md:py-0"
      >
        <Image
          src={contactUsBG_shakeHand_mobile}
          alt="Contact us Background - Shake Hand Mobile"
          fill
          className="object-cover md:hidden"
        />
        <Image
          src={contactUsBG_shakeHand}
          alt="Contact us Background - Shake Hand"
          fill
          className="hidden object-cover md:block"
        />

        <div
          className="relative flex flex-col gap-6 font-mono text-lg md:flex-row md:items-center md:justify-between md:text-2xl"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start gap-3 font-bold text-primary transition duration-300 group-hover:translate-x-2">
            <p className="bg-white px-3 py-1">
              Looking for a reliable partner in Taiwan?
            </p>
            <p className="bg-white px-3 py-1">Let’s work together!</p>
          </div>
          <span className="self-start bg-primary px-6 py-2 font-semibold text-white transition duration-300 group-hover:-translate-x-2 group-hover:bg-[#0e2561] md:self-auto md:px-8 md:py-1">
            Contact us
          </span>
        </div>
      </ScrollAnchor>

      {/* Contact Form */}
      <section className="scroll-mt-20 bg-[#253B72] py-20" id="contactUs">
        <div className="mx-auto w-full max-w-3xl px-6 md:w-[50%] md:px-0">
          <h2 className="font-serif text-3xl leading-none font-extrabold tracking-[0.08em] text-white md:text-[2.5rem] md:tracking-widest">
            Let’s Contact
          </h2>
          <p className="my-8 text-sm leading-7 font-light text-white md:my-10">
            We welcome partnership opportunities with medical device
            manufacturers. If you&apos;re looking for a reliable partner in
            Taiwan, we’d love to chat and see how we can work together.
            <br />
            <br />
            Try the interactive form below. This is a portfolio demonstration;
            no messages are sent or stored.
          </p>
          <div data-aos="fade-up">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

const productList = demoProducts.map(({ brand, productName, id }) => ({
  brand,
  productName,
  url: `/product-experience#${id}`,
}))
