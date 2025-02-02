import React, { useEffect, useState } from "react";
import Card from "./Card";

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // const {
  //   id,
  //   image,
  //   projectName,
  //   date,
  //   liveLink,
  //   description,
  //   features,
  //   journey,
  //   lacking,
  //   nextPlan,
  // console.log(data)

  return (
   <div  className="bg-[url('https://i.ibb.co.com/0pYFC6ky/sep09.jpg')]  bg-cover bg-center">
     <div className= "  container mx-auto   pt-10 " id="projects">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-10  text-center text-white ">
          MY <span className="text-purple-700">PROJECTS</span>{" "}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {data && data.map((project) => (
          <Card key={project.id} project={project}></Card>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Projects;
