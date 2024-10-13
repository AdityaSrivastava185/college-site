"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-10" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">IoT projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.pintitle}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden min-h-full lg:h-[50vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  {/* <img src="/bg.png" alt="bgimg" /> */}
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="object-contain h-auto max-w-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
