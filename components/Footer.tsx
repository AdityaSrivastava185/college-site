import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { Vortex } from "./ui/vortex";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-2" id="contact">
      {/* background grid */}
      <Vortex backgroundColor="transparent">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take the <span className="text-purple">next step</span> to
            build the imagination into reality
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to us and let&apos;s discuss how I can help you achieve
            your goals.
          </p>
          <a href="mailto:signodes_iot@niet.co.in">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex sm:mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © Signodes Club , NIET
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </Vortex>
    </footer>
  );
};

export default Footer;
