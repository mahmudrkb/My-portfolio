import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ project }) => {
  const {
    id,
    image,
    projectName,
    date,
    liveLink,
    description,
    features,
    journey,
    lacking,
    category,
    nextPlan,
  } = project;

  AOS.init();


  return (
    <div 
     data-aos="fade-up"
    data-aos-duration="1500" className=" m-5 hover:shadow-2xl">
      <div className="card bg-base-300  bg-cover bg-center  shadow-xl">
        <figure>
          <img src={image} className="h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{projectName}</h2>
          <h4><span className="font-bold">Date :</span> {date}</h4>
          <h4><span className="font-bold" >Category :</span> {category}</h4>
          <p className="">{description.substring(0, 100)}...</p>

          <div className="card-actions justify-between">
          <a href={liveLink} target="_blank" className="text-sm mt-5 hover:text-purple-500  font-bold  py-2 px-3   gap-1 text-white rounded-md bg-purple-950">
              Live Link
            </a>
            <Link to={`/details/${id}`}   className="text-sm mt-5 hover:text-purple-500  font-bold  py-2 px-3   gap-1 text-white rounded-md bg-purple-950">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
