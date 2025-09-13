const works = [
  {
    imgSrc: "/images/stay.png",
    title: "Full stack AirBnb (Staya)",
    tags: ["API", "Expressjs"],
    projectLink: "https://airbnb-full-stack-project-pqw1.onrender.com/listings",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Retro Style Spotify",
    tags: ["Beginner Friendly"],
    projectLink: "https://retro-spotify.netlify.app/index2",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Coming Soon...",
    tags: ["Tailwind", "API"],
    projectLink: "/",
  },
];

const Project = () => {
  return (
    <section id="project">
      <div className="container ">
        <h1 className="headline-2">My Portfolio Highlights</h1>

        <div className="">
          <div className="grid  sm:grid-cols-3  gap-3 py-5 ">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => {
              return (
                <div className="project  py-4 px-5 rounded-lg" key={key}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={imgSrc}
                      alt={title}
                      className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <div className="flex justify-between items-center  ">
                    <div className="flex flex-wrap mt-3  ">
                      {tags.map((tag) => {
                        return <p className="tag">{tag}</p>;
                      })}
                    </div>
                    <a
                      href={projectLink}
                      target="_blank"
                      className="material-symbols-rounded   rounded-sm  "
                    >
                      open_in_new
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
