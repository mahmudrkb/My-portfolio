import React from "react";
import html from "../assets/html-5.svg";
import css from "../assets/css-3.svg";
import tailwind from "../assets/tailwind-css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import node from "../assets/programing.svg";
import mongoDB from "../assets/mongodb-svgrepo-com.svg";
import express from "../assets/express-js.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
// AOS.init();

const Skills = () => {
  AOS.init();
  return (
  <div className="bg-[url('https://i.ibb.co.com/LDjBFcCN/27230.jpg')] bg-cover bg-center text-white">
      <div id="skills" className="p-3 pt-10 container mx-auto   pb-20">
      <h1 className="text-4xl font-bold my-10  text-center ">
        MY <span className="text-purple-700">SKILLS</span>{" "}
      </h1>
      <div className="grid grid-cols-3 gap-10 place-items-center  ">
        <div
          data-aos="flip-up"
          data-aos-duration="300"
          className="flex flex-col items-center gap-2  "
        >
          {" "}
          <img className=" w-16" src={html} alt="" />
          <h3 className="font-bold">HTML</h3>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="700"
          className="flex flex-col items-center gap-2  "
        >
          {" "}
          <img className=" w-16" src={css} alt="" />
          <h3 className="font-bold">CSS</h3>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1100"
          className="flex flex-col items-center gap-2  "
        >
          {" "}
          <img className=" w-16" src={tailwind} alt="" />
          <h3 className="font-bold">TAILWIND</h3>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1500"
          className="flex flex-col items-center gap-2  "
        >
          {" "}
          <img className=" w-16" src={js} alt="" />
          <h3 className="font-bold">JAVASCRIPT</h3>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1900"
          className="flex flex-col items-center gap-2  "
        >
          {" "}
          <img className=" w-16" src={react} alt="" />
          <h3 className="font-bold">REACT</h3>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="2300"
          className="flex flex-col items-center gap-2  "
        >
          {" "}
          <img className=" w-16" src={node} alt="" />
          <h3 className="font-bold">NODE</h3>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="2700"
          className="flex flex-col items-center gap-2  "
        >
          {" "}
          <img className=" w-16" src={mongoDB} alt="" />
          <h3 className="font-bold">MONGODB</h3>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="3000"
          className="flex flex-col items-center gap-2  "
        >
          {" "}
          <img className=" w-16" src={express} alt="" />
          <h3 className="font-bold">EXPRESS</h3>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Skills;
