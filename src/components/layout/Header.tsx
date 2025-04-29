import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-black flex w-full items-center gap-[40px_100px] text-xs text-[#EB4C6B] font-normal tracking-[1px] justify-between flex-wrap px-[274px] py-2 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex items-center gap-2.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div>Lorem ipsum dolor</div>
        </div>
        <div className="self-stretch flex items-center gap-2.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div>Lorem ipsum dolor</div>
        </div>
        <div className="self-stretch flex items-center gap-2.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div>Lorem ipsum dolor</div>
        </div>
      </div>

      <div className="border-b-neutral-200 bg-white flex w-full flex-col overflow-hidden items-stretch tracking-[1px] px-20 py-[30px] border-b border-solid max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1248px] items-center gap-5 whitespace-nowrap justify-between max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/90d8a493346c2b616adbac449071c60b6d96cf71?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
          />
          <div className="text-black text-4xl font-extrabold self-stretch">
            LOGO
          </div>
          <div className="self-stretch flex items-center gap-6 text-base text-[#252020] font-bold my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/97d421a488a1e4eb7291fbf4d3e62edcb993a8c1?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/0c88c9e138b773985abd1872fded389e039aa2bc?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/b52c53ed4c6e41d30f9498a6d6744c3c3e5ef313?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/f393dc3e782e36f4d793bbc2945cc82fd037e3cb?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <div className="self-stretch flex items-center gap-[5px] my-auto">
              <div>ENG</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/e771220b378b1021e4a4911659f1fa0ae80c2cba?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
            </div>
          </div>
        </div>

        <nav className="self-center flex gap-[40px_64px] text-xl text-[#252020] font-bold flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          <Link to="/shop" className="whitespace-nowrap w-[52px]">
            SHOP
          </Link>
          <Link to="/skills" className="whitespace-nowrap w-[65px]">
            SKILLS
          </Link>
          <Link to="/stories" className="whitespace-nowrap w-[79px]">
            STORIES
          </Link>
          <Link to="/about" className="whitespace-nowrap w-[65px]">
            ABOUT
          </Link>
          <Link to="/contact" className="w-[119px]">
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  );
};
