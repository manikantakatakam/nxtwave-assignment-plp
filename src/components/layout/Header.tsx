
import React from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-black flex w-full items-center justify-center gap-8 md:gap-16 lg:gap-24 text-xs text-[#EB4C6B] font-normal py-1 px-4">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            className="w-3 h-3 object-contain"
          />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            className="w-3 h-3 object-contain"
          />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            className="w-3 h-3 object-contain"
          />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      <div className="border-b border-neutral-200 py-6 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="md:hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/90d8a493346c2b616adbac449071c60b6d96cf71?placeholderIfAbsent=true"
              className="w-6 h-6 object-contain"
            />
          </div>
          
          <div className="text-black text-4xl font-extrabold flex-1 text-center">
            LOGO
          </div>
          
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5" />
            <Heart className="w-5 h-5" />
            <User className="w-5 h-5 hidden md:block" />
            <ShoppingBag className="w-5 h-5" />
            <div className="hidden md:flex items-center gap-1 ml-2">
              <span className="text-sm font-medium">ENG</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e771220b378b1021e4a4911659f1fa0ae80c2cba?placeholderIfAbsent=true"
                className="w-3 h-3 object-contain"
              />
            </div>
          </div>
        </div>

        <nav className="container mx-auto flex justify-center mt-6">
          <div className="flex gap-6 md:gap-10 text-sm md:text-base uppercase font-semibold">
            <Link to="/shop" className="hover:text-gray-600">Shop</Link>
            <Link to="/skills" className="hover:text-gray-600">Skills</Link>
            <Link to="/stories" className="hover:text-gray-600">Stories</Link>
            <Link to="/about" className="hover:text-gray-600">About</Link>
            <Link to="/contact-us" className="hover:text-gray-600">Contact Us</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
