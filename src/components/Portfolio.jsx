import React from "react";
import chatApp from "../assets/portfolio/chat-app.png"
import ecommerce from "../assets/portfolio/tokyo-ecommerce.png"
import corek from "../assets/portfolio/corek-project.png"
import construction from "../assets/portfolio/construction.png"
import todoApp from "../assets/portfolio/todo-app.png"
import quizApp from "../assets/portfolio/quiz-app.png"
// import todoApp from "../assets/portfolio/todoApp.png"

const Portfolio = () => {
  const portfolios = [
    {
      info: "A mern chat app built from scratch with chakra ui styling framework",
      id: 1,
      src: chatApp,
      href: "https://jweb-chat-app.onrender.com",
      git: "https://github.com/ejioforJs/chat-app"
    },
    {
      info: "A mern e-commerce website built from scratch with tailwindcss styling framework",
      id: 2,
      src: ecommerce,
      href: "https://tokyoecommerce.onrender.com",
      git: "https://github.com/ejioforJs/tokyoEcommerce"
    },
    {
      info: "A mern e-learning website built from scratch using tailwindcss styling utility framework",
      id: 3,
      src: corek,
      href: "https://corek-project.onrender.com",
      git: "https://github.com/ejioforJs/corek-project"
    },
    {
      info: "A quiz app built from scratch using react library localStorage for data storage",
      id: 4,
      src: quizApp,
      href: "https://quiz-app-sm7o.onrender.com",
      git: "https://github.com/ejioforJs/quiz-app"
    },
    {
      info: "A construction website created from scratch using react library",
      id: 5,
      src: construction,
      href: "https://building-app.onrender.com",
      git: "https://github.com/ejioforJs/Building-app"
    },
    {
      info: "A todo app built from scratch using react library and localStorage for data storage",
      id: 6,
      src: todoApp,
      href: "https://todo-app-i72m.onrender.com",
      git: "https://github.com/ejioforJs/Todo-App"
    }
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

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0">
          {portfolios.map(({ id, src, info, href, git}) => (
            <div 
              key={id}
              data-aos="fade-up"
              data-aos-duration="1500"
              className="shadow-md group shadow-gray-600 rounded-lg overflow-hidden">
              <p className="text-center mb-4">{info}</p>
              <img
                src={src}
                alt="portfolio"
                className="rounded-md duration-500 group-hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={git} className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;