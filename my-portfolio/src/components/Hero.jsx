import { ButtonPrimary, ButtonOutLine } from "./Buttons.jsx";
const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-13 ">
      <div className="container  lg:grid  lg:grid-cols-2 items-center  lg:gap-10 ">
        <div>
          <div className="flex items-center gap-3 ">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                height={40}
                width={40}
                alt="agni-mn"
                className="cover"
              />
            </figure>
            <div className="flex items-start gap-1.5 text-zinc-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10 ">
            Building Scalable Projects for Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="./Agni.pdf"
              label="Download CV"
              icon="download"
            />
            <ButtonOutLine
              href="#contact"
              label="Scroll Down ↓"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block ">
          <figure className="w-fullmax-w-[480px] flex items-center ml-auto bg-gradient-to-t from-zinc-400 via-25%   to-65% rounded-[60px] over-flow-hidden">
            <img src="/images/agniii..png" alt="" className="px-24 " />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
