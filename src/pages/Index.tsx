
import React, { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FilterSidebar } from "../components/products/FilterSidebar";
import { ProductCard } from "../components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Expanded product data to match the reference image
const products = [
  {
    id: 1,
    name: "PPXOC MILKYWAY DRESS IN PRESSED FLOWERS",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/33cb42c0cde016064a0bb86bc21c19d866cfd280?placeholderIfAbsent=true",
  },
  {
    id: 2,
    name: "PPXOC MILKYWAY DRESS IN PRESSED FLOWERS",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true",
  },
  { 
    id: 3, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true" 
  },
  { 
    id: 4, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true" 
  },
  { 
    id: 5, 
    name: "PRODUCT NAME", 
    imageUrl: "/lovable-uploads/33122aa9-9cec-43d1-bf6e-065c40972043.png" 
  },
  { 
    id: 6, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true" 
  },
  { 
    id: 7, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true" 
  },
  { 
    id: 8, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true" 
  },
  { 
    id: 9, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/33cb42c0cde016064a0bb86bc21c19d866cfd280?placeholderIfAbsent=true" 
  },
  { 
    id: 10, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true" 
  },
  { 
    id: 11, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true" 
  },
  { 
    id: 12, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true" 
  },
  { 
    id: 13, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/33cb42c0cde016064a0bb86bc21c19d866cfd280?placeholderIfAbsent=true" 
  },
  { 
    id: 14, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true" 
  },
  { 
    id: 15, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true" 
  },
  { 
    id: 16, 
    name: "PRODUCT NAME", 
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true" 
  },
];

export default function Index() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 pb-16">
        <div className="flex flex-col items-center text-center my-12">
          <h1 className="text-[#252020] text-4xl md:text-5xl lg:text-6xl font-normal tracking-[1px] uppercase">
            DISCOVER OUR PRODUCTS
          </h1>

          <p className="text-[#252020] text-lg md:text-xl lg:text-2xl font-normal leading-8 mt-4 max-w-[720px]">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>

        <hr className="border-neutral-200 my-8" />

        {/* Product filters and count */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-6">
            <div className="text-[#252020] text-lg font-bold uppercase">
              3425 ITEMS
            </div>
            <button 
              className="flex items-center gap-2 text-base text-[#888792] font-normal underline"
              onClick={() => setShowFilter(!showFilter)}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/17a486bc7f4a124e8a2076d17b8d6f447a1915a8?placeholderIfAbsent=true"
                className="w-4 h-4 object-contain"
                alt="Filter"
              />
              <span className="underline uppercase">SHOW FILTER</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-lg text-[#252020] font-bold uppercase">
            <span>RECOMMENDED</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/68a6f8a1763cc13734547a9343204a65c32ab4c4?placeholderIfAbsent=true"
              className="w-4 h-4 object-contain"
              alt="Arrow down"
            />
          </div>
        </div>

        <hr className="border-neutral-200 mb-8" />

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
