import { TfiArrowCircleUp } from "react-icons/tfi";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="  bg-black p-3 ">
      <div  
        
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-end mr-10  text-purple-700  "
      >
        <TfiArrowCircleUp onClick={() => scrollToSection("home")} className="  hover:text-white hover:bg-purple-700 rounded-full size-10 animate__animated animate__bounce" />
      </div>

      <footer className="footer footer-center text-purple-700 ">
        <aside className="py-7 ">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Rakib{" "}
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
