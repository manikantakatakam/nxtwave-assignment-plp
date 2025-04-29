
import React from "react";
import { Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProductCardProps {
  name: string;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl }) => {
  const isMobile = useIsMobile();
  
  return (
    <article className="flex flex-col group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          alt={name}
        />
        <button
          className="absolute z-10 right-3 top-3"
          aria-label="Add to favorites"
        >
          <Heart className="w-5 h-5 stroke-white fill-transparent hover:fill-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="pt-3">
        <div className="relative">
          <h3 className="text-[#252020] text-sm font-bold uppercase line-clamp-2">
            {name}
          </h3>
          <div className="text-[#888792] text-xs font-normal mt-1 cursor-pointer hover:underline">
            Sign in or Create an account to see pricing
          </div>
          {isMobile && (
            <div className="text-[#888792] text-xs font-normal mt-1">
              <span className="text-[#252020]">SOLD OUT</span> on AUGUST 15, 2023
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
