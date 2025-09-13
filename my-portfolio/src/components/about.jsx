const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];
const about = () => {
  return (
    <section id="about">
      <section className="">
        <div className="container mt-11 lg:mt-40j">
          <div className="about bg-zinc-800 rounded-2xl p-7 md:p-8 mt-7  md:mt-10 lg:mt-0">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              I'm Agni MN, a B.Tech student in Information Science & Engineering
              with practical experience in building responsive and performant
              web applications. I enjoy solving problems and creating scalable
              software solutions using modern web technologies.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default about;
