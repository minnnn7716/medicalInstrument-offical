import type { Metadata } from "next"
import banner from "@/app/assects/images/About us - banner.jpg"
import SubPageBanner from "@/components/SubPageBanner"

export const metadata: Metadata = {
  title: "About Us",
}

export default function Page() {
  return (
    <>
      <SubPageBanner title="About Us" imageUrl={banner} />

      <section className="container px-6 py-15">
        <div className="mb-20 md:pr-10 md:pl-8" data-aos="fade-up">
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
        </div>

        <div className="font-mono md:pr-10 md:pl-8" data-aos="fade-up">
          <h2 className="mb-10 border-l-[6px] border-primary pl-6 font-serif text-4xl leading-none font-extrabold text-primary">
            Illustrative Milestones
          </h2>

          {milestonesList.map(({ year, milestones }) => (
            <ul className="mb-6 pl-4 last:mb-0" key={year}>
              <li>
                <h3 className="mb-4 inline-block bg-primary pr-15 pl-4 text-xl font-medium text-white">
                  {year}
                </h3>
                <ul className="list-inside list-disc">
                  {milestones.map((milestone, index) => (
                    <li key={index}>{milestone}</li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </section>
    </>
  )
}

// Fictional timeline used only to demonstrate the page layout.
const milestonesList = [
  {
    year: "2016",
    milestones: [
      "The fictional medical equipment concept was introduced.",
      "A sample wound care collection was outlined.",
      "The first product presentation was designed.",
    ],
  },
  {
    year: "2017",
    milestones: [
      "Additional sample product categories were added.",
      "A demonstration partner network was outlined.",
    ],
  },
  {
    year: "2018",
    milestones: [
      "The example catalog was expanded.",
      "Clinical support content was introduced.",
    ],
  },
  {
    year: "2019",
    milestones: ["The fictional team expanded its service concept."],
  },
  {
    year: "2021",
    milestones: ["A sample surgical equipment collection was introduced."],
  },
  {
    year: "2022",
    milestones: ["The concept catalog received a content update."],
  },
  {
    year: "2024",
    milestones: ["The responsive website experience was refined."],
  },
  {
    year: "2025",
    milestones: ["The independent portfolio demonstration was prepared."],
  },
]
