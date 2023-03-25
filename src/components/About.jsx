import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="pb-8 mt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-xl">
          My name is Solomon James Ejiofor and I am a 20 years old full-stack software developer who specializes in creating dynamic and beautiful web pages. I have been coding for the past 3 years, and have been loving every minute of it. I am currently an electrical engineering student of the prestigious University of Nigeria Nsukka(UNN) who loves solving technical and logical problems and generally I am an overall thinker. You can check out some of my works and skills below.
        </p>
      </div>
    </div>
  );
};

export default About;