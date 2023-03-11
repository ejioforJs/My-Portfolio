import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import chatApp from "../assets/portfolio/chatApp.png"
import ecommerce from "../assets/portfolio/ecommerce.png"
import construction from "../assets/portfolio/construction.png"
import todoApp from "../assets/portfolio/todoApp.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatApp,
    },
    {
      id: 2,
      src: ecommerce,
    },
    {
      id: 3,
      src: construction,
    },
    // {
    //   id: 4,
    //   src: todoApp,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div 
        data-aos="fade-left"
        data-aos-duration="1500"
        className="pb-8 mt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div 
              data-aos="fade-up"
              data-aos-duration="1500"
              key={id} className="shadow-md group shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt=""
                className="rounded-md duration-500 group-hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;