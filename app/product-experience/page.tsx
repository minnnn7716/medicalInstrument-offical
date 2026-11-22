import type { Metadata } from "next"
import SubPageBanner from "@/components/SubPageBanner"
import banner from "@/app/assects/images/Product experience - banner.jpg"
import Image from "next/image"
import Link from "next/link"
import { demoProducts } from "@/lib/demo-products"

export const metadata: Metadata = {
  title: "Product Experience",
}

export default function Page() {
  return (
    <>
      <SubPageBanner title="Product Experience" imageUrl={banner} />

      <section className="container px-6 py-15">
        <div className="md:pr-10 md:pl-8">
          <h2
            className="mb-10 border-l-[6px] border-primary pl-6 font-serif text-4xl leading-none font-extrabold text-primary"
            data-aos="fade-up"
            data-aos-offset="-120"
          >
            Product Experience
          </h2>

          <ul className="flex flex-col gap-12">
            {demoProducts.map(
              ({ id, brand, productName, brandUrl, image, description }) => (
                <li
                  id={id}
                  key={productName}
                  className="flex flex-col gap-6 border-b border-gray-300 pb-8 last:border-0 last:pb-0 md:flex-row md:gap-8"
                  data-aos="fade-up"
                  data-aos-offset="-120"
                >
                  <div className="relative w-full md:w-45 md:shrink-0">
                    {brandUrl ? (
                      <Link
                        href={brandUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full w-full transition duration-300 hover:-translate-y-2"
                      >
                        <Image
                          src={image}
                          alt={productName}
                          width={320}
                          height={320}
                        />
                      </Link>
                    ) : (
                      <div className="block h-full w-full">
                        <Image
                          src={image}
                          alt={productName}
                          width={320}
                          height={320}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    {brandUrl ? (
                      <>
                        <Link
                          href={brandUrl ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mb-4 flex flex-col gap-3 leading-tight transition-transform duration-300 hover:translate-x-1 md:flex-row md:gap-4 md:leading-none"
                        >
                          <h3 className="w-40 content-center bg-primary py-1 text-center font-mono font-semibold text-white group-hover:bg-[#3357b5] md:w-50 md:py-2">
                            {brand}
                          </h3>
                          <h4 className="content-center font-serif text-2xl font-bold">
                            {productName}
                          </h4>
                        </Link>
                      </>
                    ) : (
                      <>
                        <div className="mb-4 flex flex-col gap-3 leading-tight transition-transform duration-300 md:flex-row md:gap-4 md:leading-none">
                          <h3 className="w-40 content-center bg-primary py-1 text-center font-mono font-semibold text-white md:w-50 md:py-2">
                            {brand}
                          </h3>
                          <h4 className="content-center font-serif text-2xl font-bold">
                            {productName}
                          </h4>
                        </div>
                      </>
                    )}

                    <ul className="ml-6 list-decimal pr-6">
                      {description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </>
  )
}
