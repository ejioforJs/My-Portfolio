import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-red-500 bg-gradient-to-b from-black via-black to-gray-800 z-10"
    >
      <div className="max-w-screen-lg flex-col-reverse gap-y-20 mx-auto flex items-center justify-center h-full px-4 md:flex-row">
        <div 
        data-aos="fade-right"
        data-aos-duration="1500"
        className="mt-auto md:mt-24 flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, JavaScript and Node.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div
        data-aos="fade-left"
        data-aos-duration="1500"
        >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-96 mt-24 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
