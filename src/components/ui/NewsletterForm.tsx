import React, { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-stretch flex w-full items-stretch gap-4 text-lg flex-wrap mt-[51px] max-md:max-w-full max-md:mt-10"
    >
      <input
        type="email"
        placeholder="Enter your e-mail..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white min-h-[47px] gap-2 text-[#BFC8CD] font-normal grow shrink basis-auto px-6 py-[13px] max-md:px-5"
      />
      <button
        type="submit"
        className="self-stretch opacity-30 bg-black min-h-12 overflow-hidden text-white font-medium whitespace-nowrap uppercase rounded-[5px] px-6"
      >
        Subscribe
      </button>
    </form>
  );
};
