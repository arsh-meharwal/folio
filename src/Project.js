import React, { useState } from "react";

function Project() {
  const projectData = [
    {
      id: 1,
      imageUrl: "/BugT.png",
      title: "Bug Tracker",
      subtitle:
        "A Streamlined Ticket Management Tool: Empowering Collaboration Across Different User Roles and Projects",
      text1:
        "- Uses React.js library with Redux for efficient state management.",
      text2: "- Utilizes Redux middleware for handling asynchronous actions.",
      text3:
        "- Styling through CSS and its frameworks in the likes of Tailwind to enhance UX across devices.",
      text4:
        "- Implements authentication and authorization mechanisms using JSON Web Tokens (JWT) for access control.",
      buttonLink:
        "https://bug-tracker-orange.vercel.app",
      github: "https://github.com/arsh-meharwal/bug-tracker-app-backend"
    },
    {
      id: 2,
      imageUrl: "React2.png",
      title: "JacketMan's",
      subtitle:
        "JacketMan: An Online E-commerece Store and Ultimate Destination for Stylish Jackets and Outerwear",
      text1:
        "- Uses React.js library with Redux for efficient state management.",
      text2:
        "- Employs CSS frameworks Tailwind and Material-UI for responsive design and enhanced UX across devices.",
      text3:
        "- Uses Node.js on the backend and stores data using MongoDB server",
      text4:
        "- Authorization mechanism using JSON Web Tokens (JWT) for user authentication and access control.",
      description: "Description 1",
      buttonLink: "https://example.com",
      github: "https://github.com/arsh-meharwal/MERN-ecommerce-Backend"
    },
    {
      id: 3,
      imageUrl: "CockT.png",
      title: "Cocktail Finder",
      subtitle:
        "Never look clueless in a posh bar, search and order some of the famous drinks all around the world with preparation methods ",
      text1:
        "- Uses React.js library with Context API for efficient state management.",
      text2:
        "- Employs CSS for self designed styles for enhanced UX across devices.",
      text3:
        "- Uses open API called Cocktail DB for fetching cocktail information.",
      text4:
        "- Search bar and detail page functionality implemented using React Router.",
      description: "Description 1",
      buttonLink: "https://famous-cascaron-b93f29.netlify.app",
      github: "https://github.com/arsh-meharwal/Cocktail-Finder-App"
    },
    {
      id: 4,
      imageUrl: "ImgF.png",
      title: "Image Search",
      subtitle:
        "Discover the World through Images: Explore, Discover, and Share Visual Inspiration from unlimited HD Images",
      text1: "- Uses React.js library.",
      text2:
        "- Employs CSS for self designed styles for enhanced UX across devices.",
      text3: "- Uses open API called Unsplash Images for fetching information.",
      text4: "- Search bar implemented using React Router.",
      description: "Description 1",
      buttonLink: "https://spectacular-halva-eed520.netlify.app",
      github: "https://github.com/arsh-meharwal/Unsplash"
    },
  ];
  const [hoveredItemId, setHoveredItemId] = useState(null);

  return (
    <div className="lg:py-20 py-4 flex flex-col">
      <div className="flex flex-col pb-8">
        <div className="text-2  text-5xl  " style={{ color: "orange" }}>
          My Projects
        </div>
        <div className="text-2 text-xl text-white pt-4">
          ( Tap/Hover to view details )
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-24 lg:gap-8 py-12 px-8">
        {projectData.map((item, index) => (
          <div className="relative cursor-pointer flex flex-col justify-center items-center">
            <div
              className=""
              key={index}
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-64 w-64 rounded-2xl overflow-hidden"
              />
              {hoveredItemId === item.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-85 text-white h-96 w-auto pb-4 transition-shadow">
                  <div className="px-2 max-w-md">
                    <p className="mt-4 text-sm">{item.text1}</p>
                    <p className="mt-4 text-sm">{item.text2}</p>
                    <p className="mt-4 text-sm">{item.text3}</p>
                    <p className="mt-4 text-sm">{item.text4}</p>
                  <div className ="flex flex-row justify-center items-center gap-4">
                    <a
                      href={item.buttonLink}
                      className="mt-11 inline-block px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 flex flex-row"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-tower"><path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/></svg>
                    </a>
                    <a
                      href={item.github}
                      className="mt-11 inline-block px-6 py-3 bg-white text-black rounded-xl hover:bg-black hover:text-white flex flex-row"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  </div>
                  </div>
                </div>
              )}
              <div>
                <h3 className="mt-6 text text-white text-3xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
            <div>
              <h3 className="mt-12 font-mono text-white text-lg">
                {item.subtitle}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
