import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FilterSidebar } from "../components/products/FilterSidebar";
import { ProductCard } from "../components/products/ProductCard";

const products = [
  {
    id: 1,
    name: "PPXOC Milkyway dress in pressed flowers",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/33cb42c0cde016064a0bb86bc21c19d866cfd280?placeholderIfAbsent=true",
  },
  {
    id: 2,
    name: "PPXOC Milkyway dress in pressed flowers",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true",
  },
  { id: 3, name: "Product Name", imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true" },
  { id: 4, name: "Product Name", imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true" },
  // Add more products as needed
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-[652px] max-md:pt-[100px]">
        <FilterSidebar />

        <div className="bg-white mt-[-1498px] w-full overflow-hidden max-md:max-w-full max-md:mt-[-200px]">
          <div className="flex w-full flex-col items-stretch mt-[72px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <h1 className="text-[#252020] text-center text-6xl font-normal tracking-[1px] uppercase self-center max-md:max-w-full max-md:text-[40px]">
              DISCOVER OUR PRODUCTS
            </h1>

            <p className="text-[#252020] text-center text-[22px] font-normal leading-10 self-center w-[721px] mt-4 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>

            <hr className="border-neutral-200 border w-[1248px] shrink-0 max-w-full h-px mt-[71px] border-solid max-md:mt-10" />

            <div className="bg-white leading-10 pt-6 max-md:max-w-full">
              <div className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full max-md:mr-2.5">
                <div className="flex items-stretch gap-[40px_73px]">
                  <div className="text-[#252020] text-lg font-bold uppercase">
                    3425 Items
                  </div>
                  <button className="items-center bg-white flex gap-2 text-base text-[#888792] font-normal text-right underline">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/17a486bc7f4a124e8a2076d17b8d6f447a1915a8?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                    />
                    <span className="underline">SHOW FILTER</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-lg text-[#252020] font-bold whitespace-nowrap uppercase">
                  <span>RECOMMENDED</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/68a6f8a1763cc13734547a9343204a65c32ab4c4?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  />
                </div>
              </div>
              <hr className="border-neutral-200 border shrink-0 h-px mt-[23px] border-solid max-md:max-w-full" />
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                />
              ))}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
