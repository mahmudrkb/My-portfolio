import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const DetailsCard = () => {
  const { id } = useParams();

  const [card, setCard] = useState(null);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        const idCard = data.find((item) => item.id == id);
        setCard(idCard);
      });
  }, [id]);

  const {
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
    gitLink
  } = card || {};

  return (
    <div>
      {" "}
      <section>
        <Navbar></Navbar>
      </section>
      <main className=" bg-black ">
        <div>
          <div className="card  bg-white bg-opacity-90 bg-cover bg-center bg-[url('https://i.ibb.co.com/Fk23FHL2/footer-bg-1-1.png')]  container mx-auto p-3 py-10  shadow-xl">
            <figure>
              <img src={image} alt="" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-3xl">{projectName}</h2>

              <h4>
                <span className="font-bold">Date :</span> {date}
              </h4>
              <h4>
                <span className="font-bold">Category :</span> {category}
              </h4>
              <ul><span className="font-bold">Features : </span>{
              features&& features.map((item, index )=>(
                <li key={index}> {item}</li>
              ))
              }</ul>
              <p>
                {" "}
                <span className="font-bold">Description : </span>
                {description}
              </p>
              <p>
                {" "}
                <span className="font-bold">Next Plan : </span>
                {nextPlan}
              </p>
              

              <div className="card-actions justify-between">
              <a
                  href={gitLink}
                  target="_blank"
                  className="text-sm mt-5 hover:text-purple-500  font-bold  py-3 px-5   gap-1 text-white rounded-md bg-purple-950"
                >
                  GitHub  Link
                </a>
                <a
                  href={liveLink}
                  target="_blank"
                  className="text-sm mt-5 hover:text-purple-500  font-bold  py-3 px-5  gap-1 text-white rounded-md bg-purple-950"
                >
                  Live Link
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </main>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default DetailsCard;
