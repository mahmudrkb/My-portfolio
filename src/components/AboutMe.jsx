import AOS from "aos";
import "aos/dist/aos.css"; 

const AboutMe = () => {
    AOS.init();
   
  return (
    <div id="about" className="bg-[url('https://i.ibb.co.com/6RpB73QN/54094.jpg')]  text-white bg-cover bg-center pt-20  pb-10">
      <h1 className="text-4xl font-bold   text-center ">
        ABOUT <span className="text-purple-700">ME</span>{" "}
      </h1>
      <div>
        <div className="hero  md:w-4/6 mx-auto ">
          <div className="hero-content mt-10 flex-col lg:flex-row">
            <img   data-aos="flip-left"
          data-aos-duration="1000"

              src="https://i.ibb.co.com/7ndJ0bB/Rakib-PP-size.jpg"
              className="md:max-w-sm rounded-lg shadow-2xl"
            />
            <div className="ml-5">
              <h1 className="text-5xl font-bold">My Name Is Rakib</h1>
              <address>Dhaka, Bangladesh</address>
              <p className="py-6">
                I'm from Dhaka, Bangladesh—a city known for its vibrant culture
                and rich history. I'm passionate about coding, and I enjoy exploring new ideas
                and learning every day. When I'm not busy with work or studies,
                I enjoy exploring new places and capturing memories through photography, also exploring new technologies. 
               
              </p>
              <p> Life, for me, is an adventure, and I'm always excited to see where the next journey takes me! I'm always open to meeting new people and sharing experiences,
              so feel free to connect!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
