import React from "react";

interface ProductCardProps {
  name: string;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl }) => {
  return (
    <article className="grow">
      <img
        src={imageUrl}
        className="aspect-[0.75] object-contain w-full"
        alt={name}
      />
      <div className="bg-white pt-4">
        <div className="relative">
          <h3 className="text-[#252020] text-ellipsis whitespace-nowrap text-lg font-bold uppercase z-0">
            {name}
          </h3>
          <div className="text-[#888792] text-sm font-normal underline mt-2">
            <span className="text-decoration-none text-[#888792]">Sign in</span>
            <span className="text-decoration-none text-[#888792]">
              {" "}
              or Create an account to see pricing
            </span>
          </div>
          <button
            className="absolute z-0 right-0 bottom-0"
            aria-label="Add to favorites"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/15858c240962787651e2d77cd40f3dbb6a47c578?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 h-6"
              alt="Heart icon"
            />
          </button>
        </div>
      </div>
    </article>
  );
};
