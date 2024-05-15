import React, { useRef } from "react";
import CvPage from "./cvPage";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./contactForm";

function Welcome() {
  const cvSectionRef = useRef(null);
  const handleScrollToCV = () => {
    // Scroll to the CV section with smooth behavior
    cvSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-col  justify-center items-center">
        <div className=" lg:h-full lg:py-8 w-full flex justify-center items-center">
          <div className="text text-cyan-50 lg:pr-32">
            <p className="lg:text-2xl lg:text-left ">Hello World!!.. I am</p>
            <div className="mr-80">
              <p className="lg:text-9xl lg:text-left typewriter2">arsh</p>
            </div>
            <p className="lg:text-9xl lg:text-left  typewriter">meharwal.</p>
            <p className="lg:text-3xl lg:pt-8 lg:text-left">
              I am a Web developer and movie enthusdsdsdiast.
            </p>
          </div>
          <div className="text-white">Github</div>
          <div className="flex flex-col lg:pt-12">
            <div className="lg:h-64 lg:w-64 rounded-full overflow-hidden lg:mb-12  bg-gray-200 border-solid border-4 border-orange-400">
              <img
                src="/output.png"
                alt="Profile Image"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <button className="button-51" onClick={handleScrollToCV}>
                View CV
              </button>
            </div>
          </div>
        </div>

        <Project />
        <div ref={cvSectionRef} className="cv-section justify-center">
          <CvPage />
        </div>
        <Skills />
        <div className="w-full lg:px-64 px-20">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Welcome;
