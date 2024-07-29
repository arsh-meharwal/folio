import React, { useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CvPage from "./cvPage";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./contactForm";

const navigation = [
  { name: "Projects", current: true, click: "handleScrollToProject" },
  { name: "CV", current: false, click: "handleScrollToCV" },
  { name: "Skills", current: false, click: "handleScrollToSkill" },
  { name: "Contact Me", current: false, click: "handleScrollToContact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainPage() {
  const cvSectionRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const handleScrollToCV = () => {
    cvSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToSkill = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function openLinkedInApp(e) {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobile) {
      e.preventDefault(); // Prevent default behavior of opening in a new window
      if (/Android/i.test(navigator.userAgent)) {
        window.location.href =
          "linkedin://profile/arsh-meharwal-9657591a7/#Intent;package=com.linkedin.android;scheme=https;end";
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = "linkedin://profile/arsh-meharwal-9657591a7";
      } else {
        window.location.href =
          "https://www.linkedin.com/in/arsh-meharwal-9657591a7/";
      }
    }
  }
  return (
    <>
      <Disclosure as="nav" className="bg-transparent">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-8">
                      <a
                        onClick={handleScrollToProject}
                        className="cursor-pointer text-white text text-lg"
                      >
                        Projects
                      </a>
                      <a
                        onClick={handleScrollToCV}
                        className="cursor-pointer text-white text text-lg"
                      >
                        Resume
                      </a>
                      <a
                        onClick={handleScrollToSkill}
                        className="cursor-pointer text-white text text-lg"
                      >
                        Skills
                      </a>
                      <a
                        onClick={handleScrollToContact}
                        className="cursor-pointer text-white text text-lg"
                      >
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* small screens  dropdown panel*/}
            <Disclosure.Panel className="sm:hidden ">
              <div className="space-y-1 px-2 pb-12 pt-2 flex flex-col">
                <div>
                  <Disclosure.Button
                    onClick={handleScrollToProject}
                    className="cursor-pointer text-white text text-lg"
                  >
                    Projects
                  </Disclosure.Button>
                </div>

                <div>
                  <Disclosure.Button
                    onClick={handleScrollToSkill}
                    className="cursor-pointer text-white text text-lg"
                  >
                    Skills
                  </Disclosure.Button>
                </div>
                <div>
                  <Disclosure.Button
                    onClick={handleScrollToCV}
                    className="cursor-pointer text-white text text-lg"
                  >
                    Resume
                  </Disclosure.Button>
                </div>
                <div>
                  <Disclosure.Button
                    onClick={() => handleScrollToContact()}
                    className="cursor-pointer text-white text text-lg"
                  >
                    Contact Me
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="flex flex-col  justify-center items-center">
        <div className=" h-full pt-8 w-full flex justify-center items-center">
          <div className="text text-cyan-50 lg:pr-24 lg:pb-0 mb-20 lg:pl-8">
            <p className="lg:text-2xl text-left lg:pl-0 pl-6 text-lg ">
              Hello World!!.. I am
            </p>
            <div className="lg:mr-80 mr-40">
              <p className="lg:text-9xl text-left typewriter2 text-5xl lg:pl-0 pl-6 lg:pt-0 pt-2">
                arsh
              </p>
            </div>
            <div className="lg:mr-0 mr-10">
              <p className="lg:text-9xl text-left typewriter text-5xl  lg:pl-0 pl-6">
                meharwal.
              </p>
            </div>

            <p className="lg:text-3xl text-lg lg:pt-8 pt-4 text-left lg:pl-0 pl-6">
              I am a Software developer and Movie enthusiast.
            </p>
            <div className="flex flex-row gap-8 justify-center items-center lg:mt-8 mt-4">
              <a
                className="lg:text-3xl text-lg  py-2 px-2 text-left bg-black rounded-3xl cursor-pointer"
                href="https://github.com/arsh-meharwal"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffff"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                className="lg:text-3xl text-lg 8 py-2 px-2 text-left  bg-blue-600 rounded-sm cursor-pointer"
                href="https://www.linkedin.com/in/arsh-meharwal-9657591a7/"
                onClick={(e) => openLinkedInApp(e)}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:pt-12 lg:pr-0 mr-4 lg:py-0 mb-12">
            <div className="lg:h-64 lg:w-64 rounded-full overflow-hidden lg:mb-12  bg-gray-200 border-solid border-4 border-orange-400">
              <img
                src="/output.png"
                alt="Profile Image"
                className="lg:h-full lg:w-full md:h-full md:w-56  w-44 object-cover"
              />
            </div>

            <div className="lg:py-0 my-4">
              <button className="button-51" onClick={handleScrollToCV}>
                View CV
              </button>
            </div>
          </div>
        </div>
        <div ref={projectRef}>
          <Project />
        </div>

        <div ref={cvSectionRef} className="cv-section justify-center">
          <CvPage />
        </div>
        <div ref={skillRef}>
          <Skills />
        </div>
        <div ref={contactRef} className="w-full h-full lg:px-64 px-20">
          <Contact />
        </div>
      </div>
    </>
  );
}
