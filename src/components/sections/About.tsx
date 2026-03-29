import React from "react";
import Tilt from "react-parallax-tilt";
import profileImg from "../../assets/mine2.png"; 
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
          />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* 2. Flex container: Mobile par upar-niche aur Desktop (md:) par side-by-side */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side: Text Content */}
        <div className="flex-1">
          <Header useMotion={true} {...config.sections.about} />

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
          >
            {config.sections.about.content}
          </motion.p>
        </div>

        {/* Right Side: Your Profile Image */}
        <motion.div 
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] shrink-0"
        >
          <img 
            src={profileImg} 
            alt="Hassan Jamil"
            className="w-full h-full object-cover rounded-2xl border-4 border-[#915eff] shadow-card
                       grayscale hover:grayscale-0 transition-all duration-300"           />
        </motion.div>  
      </div>

      {/* Services Cards (Niche hi rahen ge) */}
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");