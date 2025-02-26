import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";
import React from "react";

const Banner = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web developer", "Frontend Developer", "MERN Stack Developer"],
      typeSpeed: 100,

      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className=" bg-gradient-to-r from-black to-purple-950 ">
      <div className="hero container mx-auto p-3 py-5 pb-4 lg:pb-0  ">
        <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/hdnnHmg/20250104-012857-1.png"
            className="md:max-w-sm  "
          />
          <div className="space-y-2 text-white">
            <h1 className="text-3xl font-bold">Hello !</h1>
            <h1 className="text-5xl font-bold">
              I am a{" "}
              <span
                ref={el}
                className="  bg-gradient-to-l from-blue-400 to-purple-700 bg-clip-text text-transparent"
              >
                Web Developer !
              </span>
            </h1>
            <p className="py-3  ">
              I'm Rakib a passionate MERN Stack Developer specializing in
              building dynamic, user-centric web applications.I bring your ideas
              to life with modern technologies. Let’s create something amazing
              together.{" "}
            </p>
            <div className=" flex pb-5 items-center gap-5 text-2xl">
              <a
                className="hover:text-purple-500  "
                href="https://github.com/mahmudrkb"
                target="_blank"
              >
                {" "}
                <FaGithub />
              </a>

              <a
                className="hover:text-purple-500  "
                href="https://www.linkedin.com/in/al-mahmud-rakib-655494335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                {" "}
                <FaLinkedin />
              </a>

              <a
                className="hover:text-purple-500  "
                href="https://www.facebook.com/profile.php?id=100007789877647"
                target="_blank"
              >
                {" "}
                <FaFacebook />
              </a>
            </div>

            <button className="text-sm mt-5 hover:text-purple-500  font-bold  py-2 px-3   gap-1 text-white rounded-md bg-purple-950">
              {" "}
              <a
                className="flex items-center gap-2"
                href="/resume of Rakib molla.pdf"
                download="Resume_of_Rakib_Molla.pdf"
              >
                Download Resume
                <FaDownload />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
