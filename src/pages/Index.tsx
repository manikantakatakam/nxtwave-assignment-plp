import React, { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FilterSidebar } from "../components/products/FilterSidebar";
import { ProductCard } from "../components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useProducts } from "@/hooks/use-products";

export default function Index() {
  const isMobile = useIsMobile();
  const [showFilter, setShowFilter] = useState(false);
  
  // Fetch products from API
  const { data: products, isLoading, isError } = useProducts();

  // Fallback products if API fails
  const fallbackProducts = [
    {
      id: 1,
      name: "RECYCLED BACKPACK",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/33cb42c0cde016064a0bb86bc21c19d866cfd280?placeholderIfAbsent=true",
      price: 59.99,
    },
    {
      id: 2,
      name: "PRODUCT NAME",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true",
      price: 49.99,
    },
    { 
      id: 3, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true",
      price: 79.99
    },
    { 
      id: 4, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true",
      price: 39.99
    },
    { 
      id: 5, 
      name: "PRODUCT NAME", 
      imageUrl: "/lovable-uploads/5b4aade0-59f6-4799-af5e-eaf98cfdb2d5.png",
      price: 29.99
    },
    { 
      id: 6, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true",
      price: 69.99
    },
    { 
      id: 7, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true",
      price: 89.99
    },
    { 
      id: 8, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true",
      price: 54.99
    },
    { 
      id: 9, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/33cb42c0cde016064a0bb86bc21c19d866cfd280?placeholderIfAbsent=true",
      price: 44.99
    },
    { 
      id: 10, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true",
      price: 74.99
    },
    { 
      id: 11, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true",
      price: 64.99
    },
    { 
      id: 12, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true",
      price: 94.99
    },
    { 
      id: 13, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/33cb42c0cde016064a0bb86bc21c19d866cfd280?placeholderIfAbsent=true",
      price: 34.99
    },
    { 
      id: 14, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f0e39fceab3b60ec63129d86c8759ae0b7262c01?placeholderIfAbsent=true",
      price: 58.99
    },
    { 
      id: 15, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b052db9694b7c57d2c908aae9c785a19ef50ec66?placeholderIfAbsent=true",
      price: 88.99
    },
    { 
      id: 16, 
      name: "PRODUCT NAME", 
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e1fe636b03b5b03c3d4a8f99554cd56a08d2d997?placeholderIfAbsent=true",
      price: 48.99
    },
  ];

  // Use fetched products or fallback if loading/error
  const displayProducts = products || fallbackProducts;

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
            {!isMobile && (
              <div className="text-[#252020] text-lg font-bold uppercase">
                {displayProducts.length} ITEMS
              </div>
            )}
            <button 
              className="flex items-center gap-2 text-base text-[#888792] font-normal underline"
              onClick={() => setShowFilter(!showFilter)}
            >
              {isMobile ? (
                <span className="uppercase font-bold text-[#252020] no-underline">FILTER</span>
              ) : (
                <>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/17a486bc7f4a124e8a2076d17b8d6f447a1915a8?placeholderIfAbsent=true"
                    className="w-4 h-4 object-contain"
                    alt="Filter"
                  />
                  <span className="underline uppercase">SHOW FILTER</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 text-lg text-[#252020] font-bold uppercase">
            <span>RECOMMENDED</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        <hr className="border-neutral-200 mb-8" />

        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="text-center py-10">
            <p className="text-red-500 text-lg">Failed to load products. Please try again later.</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-black text-white"
            >
              Refresh Page
            </Button>
          </div>
        )}

        {/* Product grid */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
