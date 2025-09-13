import React from "react";
const skillItem = [
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
    hoverColor: "hover:border-blue-500",
  },
  {
    imgSrc: "/images/HTML.svg",
    label: "HTML",
    desc: "User Interface",
    hoverColor: "hover:border-orange-500",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
    hoverColor: "hover:border-yellow-400",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
    hoverColor: "hover:border-green-500",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
    hoverColor: "hover:border-zinc-300",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
    hoverColor: "hover:border-green-600",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
    hoverColor: "hover:border-cyan-500",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
    hoverColor: "hover:border-teal-400",
  },
  {
    imgSrc: "/images/c++.svg",
    label: "C++",
    desc: "User Interface",
    hoverColor: "hover:border-blue-700",
  },
];

const Skills = () => {
  return (
    <section className=" mt-12 md:mt-15 " id="skills">
      <div className="container">
        <h2 className="headline-2 max-w-[15ch] sm:max-w-[20ch] mt-5  lg:mb-10">
          Essentails Tools I Use
        </h2>

        <p className="text-zinc-400 mt-3  mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3  gap-4 skill-card ">
          {skillItem.map(({ imgSrc, label, desc, hoverColor }, key) => {
            return (
              <div
                className={`bg-black flex flex-wrap justify-center items-center px-5 py-9  border border-gray-700 rounded-lg hover:border-blue-500 transition-colors duration-300 ${hoverColor}`}
                key={key}
              >
                <img src={imgSrc} alt="" />
                <p>{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
