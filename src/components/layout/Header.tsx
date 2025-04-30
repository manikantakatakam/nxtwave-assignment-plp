
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
export const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">

      <div className="border-b border-neutral-200 py-3 px-4 md:py-6 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          {isMobile ? (
            <>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="text-black text-2xl font-extrabold flex items-center">
                <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
              </div>
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5" />
                <Heart className="w-5 h-5" />
                <ShoppingBag className="w-5 h-5" />
              </div>
            </>
          ) : (
            <>
              <div className="md:hidden">
                <Menu className="w-6 h-6" />
              </div>
              
              <div className="text-black text-4xl font-extrabold flex-1 text-start flex items-center">
                <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
              </div>
              
              <div className="flex items-center gap-4">
                <Search className="w-5 h-5" />
                <Heart className="w-5 h-5" />
                <div className="hidden md:block">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b52c53ed4c6e41d30f9498a6d6744c3c3e5ef313?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-5 h-5"
                  />
                </div>
                <ShoppingBag className="w-5 h-5" />
                <div className="hidden md:flex items-center gap-1 ml-2">
                  <span className="text-sm font-medium">ENG</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e771220b378b1021e4a4911659f1fa0ae80c2cba?placeholderIfAbsent=true"
                    className="w-3 h-3 object-contain"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {isMobile ? (
          <nav className="container mx-auto flex border-t border-neutral-200 mt-3 pt-2">
            <div className="flex gap-4 text-xs uppercase">
              <Link to="/" className="font-bold">Home</Link>
              <Link to="/shop" className="font-bold">Shop</Link>
            </div>
          </nav>
        ) : (
          <nav className="container mx-auto flex justify-center mt-6">
            <div className="flex gap-6 md:gap-10 text-sm md:text-base uppercase font-semibold">
              <Link to="/shop" className="hover:text-gray-600">Shop</Link>
              <Link to="/skills" className="hover:text-gray-600">Skills</Link>
              <Link to="/stories" className="hover:text-gray-600">Stories</Link>
              <Link to="/about" className="hover:text-gray-600">About</Link>
              <Link to="/contact-us" className="hover:text-gray-600">Contact Us</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
