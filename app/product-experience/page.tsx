import { demoProducts } from "@/lib/demo-products"
import type { Metadata } from "next"
import SubPageBanner from "@/components/SubPageBanner"
import banner from "@/app/assects/images/Product experience - banner.jpg"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Product Experience",
}

export default function Page() {
  return <>
    <SubPageBanner title="Product Experience" imageUrl={banner} />

    <section className="container py-15 px-6">
      <div className="md:pl-8 md:pr-10">
        <h2 className="mb-10 pl-6 leading-none font-serif font-extrabold text-primary text-4xl border-l-[6px] border-primary" data-aos="fade-up" data-aos-offset="-120">Product Experience</h2>

        <ul className="flex flex-col gap-12">
          {productList.map(({ brand, productName, brandUrl, image, description }) => (
            <li key={productName} className="flex flex-col md:flex-row gap-6 md:gap-8 border-b pb-8 border-gray-300 last:border-0 last:pb-0" data-aos="fade-up" data-aos-offset="-120">
              <div className="relative w-full md:w-45 md:shrink-0">
                {
                  brandUrl ? (
                    <a href={brandUrl} target="_blank" className="block h-full w-full hover:-translate-y-2 transition duration-300">
                      <Image src={image} alt={productName} width={320} height={320} />
                    </a>
                  ) : (
                    <div className="block h-full w-full">
                      <Image src={image} alt={productName} width={320} height={320} />
                    </div>
                  )
                }
              </div>

              <div>
                {
                  brandUrl ? (<>
                    <a href={brandUrl ?? "#"} target="_blank" className="group flex flex-col md:flex-row gap-3 md:gap-4 leading-tight md:leading-none transition-transform duration-300 hover:translate-x-1 mb-4">
                      <h3 className="content-center w-40 md:w-50 bg-primary group-hover:bg-[#3357b5] py-1 md:py-2 text-center text-white font-mono font-semibold">{brand}</h3>
                      <h4 className="content-center font-serif text-2xl font-bold">{productName}</h4>
                    </a></>) : (<>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 leading-tight md:leading-none transition-transform duration-300 mb-4">
                  <h3 className="content-center w-40 md:w-50 bg-primary py-1 md:py-2 text-center text-white font-mono font-semibold">{brand}</h3>
                  <h4 className="content-center font-serif text-2xl font-bold">{productName}</h4>
                  </div>
                  </>)
                }

                <ul className="list-decimal ml-6 pr-6">
                  {description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
}

const productList = demoProducts
