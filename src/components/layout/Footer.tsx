
import React from "react";
import { NewsletterForm } from "../ui/NewsletterForm";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-4 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Newsletter Section */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold uppercase">Be the first to know</h3>
            <p className="mt-3">Sign up for updates from mettā muse.</p>
            <NewsletterForm />
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold uppercase">Contact Us</h3>
            <a href="tel:+442211335360" className="block mt-3 hover:underline">
              +44 221 133 5360
            </a>
            <a href="mailto:customercare@mettamuse.com" className="block mt-2 hover:underline">
              customercare@mettamuse.com
            </a>
            
            <h3 className="text-xl font-bold uppercase mt-8">Currency</h3>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black text-xs">
                $
              </div>
              <span>USD</span>
            </div>
            <p className="text-xs mt-3 max-w-xs">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
          
          <div className="lg:col-span-3">
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold">mettā muse</h2>
            <nav className="mt-4 space-y-2">
              <a href="/about" className="block hover:underline">About Us</a>
              <a href="/stories" className="block hover:underline">Stories</a>
              <a href="/artisans" className="block hover:underline">Artisans</a>
              <a href="/boutiques" className="block hover:underline">Boutiques</a>
              <a href="/contact" className="block hover:underline">Contact Us</a>
              <a href="/compliance" className="block hover:underline">EU Compliance Docs</a>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold uppercase">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              <a href="/shipping" className="hover:underline">Orders & Shipping</a>
              <a href="/seller" className="hover:underline">Join/Login as a Seller</a>
              <a href="/payment" className="hover:underline">Payment & Pricing</a>
              <a href="/returns" className="hover:underline">Return & Refunds</a>
              <a href="/faqs" className="hover:underline">FAQs</a>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <a href="/terms" className="hover:underline">Terms & Conditions</a>
            </div>
          </div>

          {/* Follow Us & Payments */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold uppercase">Follow Us</h3>
            <div className="flex gap-3 mt-3">
              <a href="#" aria-label="Facebook" className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/69daa0bbabae89e4e14dee710819b96a058369fb?placeholderIfAbsent=true"
                  className="w-4 h-4"
                  alt="Facebook"
                />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/2bb924f340ba29d2054938451831f3c9e73a38ee?placeholderIfAbsent=true"
                  className="w-4 h-4"
                  alt="Instagram"
                />
              </a>
            </div>
            
            <h3 className="text-xl font-bold uppercase mt-8">mettā muse Accepts</h3>
            <div className="flex gap-2 mt-3 flex-wrap">
              <div className="bg-white text-black w-10 h-6 rounded flex items-center justify-center text-xs">VISA</div>
              <div className="bg-white text-black w-10 h-6 rounded flex items-center justify-center text-xs">MC</div>
              <div className="bg-white text-black w-10 h-6 rounded flex items-center justify-center text-xs">PP</div>
              <div className="bg-white text-black w-10 h-6 rounded flex items-center justify-center text-xs">AMEX</div>
              <div className="bg-white text-black w-10 h-6 rounded flex items-center justify-center text-xs">APPLE</div>
              <div className="bg-white text-black w-10 h-6 rounded flex items-center justify-center text-xs">GPay</div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-10">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
