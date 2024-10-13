"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section className="py-12">
      <h1 className="heading">
        Companies Our Alumni
        <span className="text-purple"> Employed At </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-7">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 pt-10 ">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-full h-auto bg-white"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
