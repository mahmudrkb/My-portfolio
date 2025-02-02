import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const HomeLayout = () => {
  return (
    <div id="home" className="josefin-sans ">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
