import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col py-4 justify-center max-w-screen-lg mx-auto h-full">
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="pb-8 mt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/9b513e6e-f87f-40de-b6d0-1e01569bde37"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
            data-aos="fade-left"
            data-aos-duration="1500"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white text-sm focus:outline-none"
            />
            <input
            data-aos="fade-right"
            data-aos-duration="1500"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 text-sm bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
            data-aos="fade-left"
            data-aos-duration="1500"
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent text-sm border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button 
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;