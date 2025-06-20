import React from "react";
import { motion } from "framer-motion";
import GetButton from "../components/GetButton";

const fadeInUp = (delay = 0.5) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7 },
  viewport: { once: true, amount: 1 },
});

const Hero = () => {
  return (
    <section className="relative w-full h-auto flex_center max-md:min-h-[800px] md:h-[100vh] min-[1700px]:h-[1000px] ">
      <div className="container flex_center flex-col gap-6 text-white w-[90%] lg:w-[70%]">

    
        <motion.h3 {...fadeInUp(0.5)} className="text_title">
          Balancing
        </motion.h3>

        <motion.h3 {...fadeInUp(0.8)} className="text_title max-lg:mb-8">
          Crypto Markets
        </motion.h3>

        <motion.p {...fadeInUp(1)} className="text-center w-full lg:w-[60%] text_medium">
          Our fully automated proprietary quantitative trading software provides
          24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
          derivative crypto exchanges.
        </motion.p>


        <GetButton/>
      </div>
    </section>
  );
};

export default Hero;
