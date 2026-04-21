import { demoProducts } from "@/lib/demo-products"
import Image from "next/image"
import type { Metadata } from "next"
import IndexPartnerUsInfo from "@/components/IndexPartnerUsInfo"
import ContactForm from "@/components/ContactForm"
import CustomLinkButton from "@/components/CustomLinkButton"
import ScrollAnchor from "@/components/ScrollAnchor"
import CertificateIcon from "@/app/assects/images/lineicons_certificate-badge-1.svg"
import ChartIcon from "@/app/assects/images/ix_analyze.svg"
import PeopleIcon from "@/app/assects/images/grommet-icons_group.svg"
import ShakeHandIcon from "@/app/assects/images/material-symbols-light_handshake-outline-rounded.svg"
import BuildingIcon from "@/app/assects/images/clarity_building-line.svg"
import BankingIcon from "@/app/assects/images/fluent_building-bank-28-regular.svg"

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
      <header className="flex flex-col-reverse md:flex-row bg-linear-to-b from-[#EEF8FF] to-[#ffffff]">
        <section className="flex-auto md:size-[45%] pl-6">
          {/* <div className="min-h-svh content-center" data-aos="fade-right" data-aos-delay="250">
            <div className="pl-4 font-serif">
              <p className="mb-1 text-6xl font-extrabold">MEDICAL</p>
              <p className="text-2xl tracking-[.25em]">INSTRUMENT · PORTFOLIO DEMO</p>
            </div>

            <hr className="my-3 border-slate-300" />

            <div className="pl-4">
              <p className="leading-loose">
                <span className="font-extrabold">Your Gateway to Taiwan’s Medical Center Market.</span>
                <br />
                Covering 90% of hospitals across Taiwan.</p>
            </div>
          </div> */}

          <div className="hero-fade-up md:min-h-svh content-center pl-2 pr-6 md:pl-4 md:pr-8 2xl:pl-10 2xl:pr-16">
            <div className="font-serif text-primary">
              <p className="text-5xl font-extrabold mb-2 mt-6 md:mt-0 leading-[1.2]">Medical Instrument <br className="md:hidden" /> Medical</p>
              <h2 className="text-xl font-medium">Your Trusted Medical Device Distribution Partner in Taiwan.</h2>
            </div>

            <hr className="w-[10%] my-5 border-primary" />

            <p>
              For this concept, we have been connecting global medical device manufacturers with hospitals across Taiwan.
              <br /><br />
              Specialized in surgical implants, advanced wound care, and dermal regeneration solutions.
            </p>

            <div className="mt-4 flex justify-end">
              <CustomLinkButton href="/contact-us" content="Contact us" themeColor="dark" />
            </div>
          </div>
        </section>

        <div className="hero-fade-in relative top-0 right-0 ml-auto h-[50svh] md:min-h-svh w-full md:size-[55%] rounded-b-[4rem] md:rounded-l-[4rem] md:rounded-br-none overflow-hidden">
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
      <section id="about-us" className="grid grid-cols-1 md:grid-cols-2 my-16 md:my-30 scroll-mt-24 gap-8 md:gap-0" data-aos="fade-up">
        <div className="overflow-hidden md:rounded-r-[2rem] mr-0 md:mr-10">
          <Image
            src={sutureSurgery}
            alt="Professional suture surgery"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="content-center px-6 py-4 md:pl-8 md:pr-10">
          <h2 className="mb-6 pl-6 leading-none font-serif font-extrabold text-primary text-4xl border-l-[6px] border-primary">About us</h2>
          <p className="mb-6">
            Medical Instrument is a Taiwan-based medical device distributor created for portfolio demonstration.
            <br /><br />
            We focus on introducing high-quality medical solutions to healthcare institutions across Taiwan. Our core areas include surgical implants, advanced wound care, and dermal regeneration.
            <br /><br />
            With long-term relationships in the healthcare sector, we support our partners in bringing products into real clinical use.
            <br /><br />
            Based in Taiwan, supporting market entry and expansion.
          </p>

          <div className="flex justify-center md:justify-end">
            <CustomLinkButton href="/about-us" content="more" themeColor="light" />
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section>
        <h2 className="-mb-6.5 md:-mb-7.5 text-center font-serif font-extrabold text-4xl md:text-[2.75rem] text-primary" data-aos="fade-up">
          Why Partner With Us
        </h2>

        <IndexPartnerUsInfo
          bgColorClass="#E7EFF9"
          index={1}
          title="Professional Expertise"
          cardInfo={[
            {
              iconImage: CertificateIcon,
              title: "Regulatory Affairs (RA)",
              content: "Experienced in Taiwan FDA (TFDA) processes and hospital entry."
            },
            {
              iconImage: ChartIcon,
              title: "Market Strategy & Positioning",
              content: "Support product launch and market adoption."
            },
            {
              iconImage: PeopleIcon,
              title: "Sales & Clinical Support",
              content: "Supports the full process from product introduction to clinical use."
            }
          ]}
        />

        <IndexPartnerUsInfo
          bgColorClass="#CCDFF8"
          index={2}
          title="Strong Sales Network"
          afterBgColor="#E7EFF9"
          beforeTitleOpacity="before:opacity-60"
          afterTitleOpacity="after:opacity-60"
          cardInfo={[
            {
              iconImage: ShakeHandIcon,
              title: "Hospital Coverage",
              content: "Access to major medical centers across Taiwan."
            },
            {
              iconImage: BuildingIcon,
              title: "Local Distribution Channels",
              content: "Reliable logistics with full market coverage."
            },
            {
              iconImage: BankingIcon,
              title: "Clinical & Academic Connections",
              content: "Established relationships with key opinion leaders."
            }
          ]}
        />
      </section>

      <section className="
        relative overflow-hidden
        before:content-[''] before:absolute before:bg-[#E7EFF9] before:w-[65vw] before:h-[65vw] md:before:w-[35vw] md:before:h-[35vw] before:top-[-10%] md:before:top-[-35%] before:left-[-18%] md:before:left-[-3%] before:rounded-[15vw] before:blur-xl before:-z-1 
        after:content-[''] after:absolute after:bg-[#FFF8ED] after:w-[40vw] after:h-[40vw] md:after:w-[20vw] md:after:h-[20vw] after:bottom-[-5%] md:after:bottom-[-10%] after:right-[-10%] md:after:right-[-3%] after:rounded-[15vw] after:blur-xl after:-z-1      ">
        <div className="container grid grid-cols-1 md:grid-cols-3 py-15 md:py-20 px-6 md:pl-20 md:pr-0 gap-4 md:gap-15" data-aos="fade-up">
          <div className="flex flex-col justify-between">
            <h2 className="pl-5 md:pl-6 leading-none text-4xl md:text-5xl text-primary font-serif font-extrabold border-l-[6px] border-primary mb-6 md:mb-0">
              Product<br />Experience
            </h2>
            <div className="mt-6 justify-end hidden md:flex">
              <CustomLinkButton href="/product-experience" content="more" themeColor="transparent" />
            </div>
          </div>
          <ul className="md:col-start-2 md:col-span-2">
            {
              productList.map((product, index) => (
                <li key={`${index}-${product.productName}`} className="mb-8 last:mb-3">
                  <a href={product.url} target="_blank" className="group flex flex-col md:flex-row gap-3 md:gap-4 leading-tight md:leading-none transition-transform duration-300 hover:translate-x-1">
                    <h3 className="content-center w-40 md:w-50 bg-primary group-hover:bg-[#3357b5] py-1 md:py-3 text-center text-white font-mono font-semibold">{product.brand}</h3>
                    <h4 className="content-center font-serif text-2xl md:text-xl font-bold">{product.productName}</h4>
                  </a>
                </li>
              ))
            }
          </ul>
          <div className="justify-end flex md:hidden">
            <CustomLinkButton href="#" content="more" themeColor="transparent" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative min-h-[60svh] md:h-[50svh] overflow-hidden content-center px-5 py-10 md:py-0">
        <ScrollAnchor targetId="contactUs" className="group">
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

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between font-mono text-lg md:text-2xl" data-aos="fade-up">
            <div className="flex flex-col items-start gap-3 text-primary font-bold group-hover:translate-x-2 transition duration-300">
              <p className="bg-white py-1 px-3">Looking for a reliable partner in Taiwan?</p>
              <p className="bg-white py-1 px-3">Let’s work together!</p>
            </div>
            <button className="self-start md:self-auto bg-primary text-white font-semibold py-2 px-6 md:py-1 md:px-8 group-hover:bg-[#0e2561] transition duration-300 group-hover:-translate-x-2">Contact us</button>
          </div>
        </ScrollAnchor>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#253B72] scroll-mt-20" id="contactUs">
        <div className="mx-auto w-full max-w-3xl px-6 md:w-[50%] md:px-0">
          <h2 className="font-serif text-white text-3xl md:text-[2.5rem] leading-none font-extrabold tracking-[0.08em] md:tracking-widest">Let’s Contact</h2>
          <p className="text-sm text-white my-8 md:my-10 font-light leading-7">
            We welcome partnership opportunities with medical device manufacturers. If you&apos;re looking for a reliable partner in Taiwan, we’d love to chat and see how we can work together.
            <br /><br />
            Fill out the form below to reach us directly, or feel free to drop us an email at: hello@example.com
          </p>
          <div data-aos="fade-up">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

const productList = demoProducts.map(({ brand, productName, id }) => ({ brand, productName, url: "/product-experience#" + id }))
