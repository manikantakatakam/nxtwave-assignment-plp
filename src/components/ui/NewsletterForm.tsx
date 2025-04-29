
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white text-black px-4 py-3 flex-1 min-w-0"
          required
        />
        <Button 
          type="submit"
          className="bg-black text-white border border-white uppercase font-medium hover:bg-gray-800"
        >
          Subscribe
        </Button>
      </div>
    </form>
  );
};
