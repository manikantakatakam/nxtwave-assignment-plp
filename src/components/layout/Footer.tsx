import React from "react";
import { NewsletterForm } from "../ui/NewsletterForm";

export const Footer = () => {
  return (
    <footer className="bg-black flex w-full flex-col mt-12 pt-[79px] pb-4 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-center w-full max-w-[1207px] ml-3 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[57%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
              <h3 className="text-white text-xl font-bold uppercase">
                Be the first to know
              </h3>
              <p className="text-white text-base font-normal mt-6">
                Sign up for updates from mettā muse.
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="w-[43%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col text-base text-white font-bold max-md:max-w-full max-md:mt-10">
              <h3 className="text-xl uppercase">CONTACT US</h3>
              <a href="tel:+442211335360" className="font-normal mt-4">
                +44 221 133 5360
              </a>
              <a
                href="mailto:customercare@mettamuse.com"
                className="font-normal mt-4"
              >
                customercare@mettamuse.com
              </a>

              <h3 className="text-xl uppercase mt-6">Currency</h3>
              <div className="flex items-center gap-[5px] whitespace-nowrap tracking-[1px] mt-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/97c9f9c9ac515a3177018476f3ecfad32ce3b1c2?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-3xl"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/82ea9c388108a53252acf659a2cb801c87af01e1?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-1.5 self-stretch shrink-0 my-auto"
                />
                <span>USD</span>
              </div>
              <p className="text-xs font-normal self-stretch mt-4 max-md:max-w-full">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white border-solid mt-[25px]" />

      <div className="w-[954px] max-w-full mt-14 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[22%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch text-white max-md:mt-10">
              <h2 className="text-[25px] font-bold">mettā muse</h2>
              <nav className="text-lg font-normal mt-[18px]">
                <a href="/about" className="block">
                  About Us
                </a>
                <a href="/stories" className="block mt-4">
                  Stories
                </a>
                <a href="/artisans" className="block mt-4">
                  Artisans
                </a>
                <a href="/boutiques" className="block mt-4">
                  Boutiques
                </a>
                <a href="/contact" className="block mt-4">
                  Contact Us
                </a>
                <a href="/compliance" className="block mt-4">
                  EU Compliances Docs
                </a>
              </nav>
            </div>
          </div>

          <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[65%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col text-white font-normal max-md:mt-[21px]">
                    <h3 className="text-xl font-bold uppercase">Quick Links</h3>
                    <nav className="text-lg mt-6">
                      <a href="/shipping" className="block">
                        Orders & Shipping
                      </a>
                      <a href="/seller" className="block mt-4">
                        Join/Login as a Seller
                      </a>
                      <a href="/payment" className="block mt-4">
                        Payment & Pricing
                      </a>
                      <a href="/returns" className="block mt-4">
                        Return & Refunds
                      </a>
                      <a href="/faqs" className="block mt-4">
                        FAQs
                      </a>
                      <a href="/privacy" className="block mt-4">
                        Privacy Policy
                      </a>
                      <a href="/terms" className="block mt-4">
                        Terms & Conditions
                      </a>
                    </nav>
                    <p className="text-center text-sm mt-[37px]">
                      Copyright © 2023 mettamuse. All rights reserved.
                    </p>
                  </div>
                </div>

                <div className="w-[35%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col max-md:mt-[21px]">
                    <h3 className="text-white text-xl font-bold uppercase">
                      Follow Us
                    </h3>
                    <div className="flex gap-3 mt-6">
                      <a href="#" aria-label="Facebook">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/69daa0bbabae89e4e14dee710819b96a058369fb?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-8 shrink-0"
                          alt="Facebook"
                        />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/2ca174a4cd604d5f81df9446568d6545/2bb924f340ba29d2054938451831f3c9e73a38ee?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-8 shrink-0"
                          alt="Instagram"
                        />
                      </a>
                    </div>
                    <h3 className="text-white text-xl font-bold uppercase self-stretch mt-14 max-md:mt-10">
                      mettā muse Accepts
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
