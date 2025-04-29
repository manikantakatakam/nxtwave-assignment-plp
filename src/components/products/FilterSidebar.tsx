import React from "react";

export const FilterSidebar = () => {
  return (
    <aside className="z-10 w-0 mt-[652px] max-md:mt-10">
      <div className="flex w-full max-w-[300px] flex-col text-lg text-[#252020] font-normal whitespace-nowrap">
        <div className="self-stretch flex-1 shrink basis-[0%] w-full gap-2">
          Customizable
        </div>
      </div>

      {[1, 2, 3, 4, 7, 8, 10, 11].map((num) => (
        <React.Fragment key={num}>
          <hr className="border-neutral-200 border min-h-px w-full mt-6 border-solid" />
          <div className="w-full mt-6">
            <div className="w-full">
              <div className="flex w-full items-center justify-between">
                <div className="rotate-[-1.570796314870016rad] self-stretch flex min-h-4 w-0 my-auto" />
              </div>
              <div className="text-[#252020] text-lg font-normal mt-2">All</div>
            </div>
          </div>
        </React.Fragment>
      ))}

      <hr className="border-neutral-200 border min-h-px w-full mt-6 border-solid" />
    </aside>
  );
};
