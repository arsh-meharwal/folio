import React from "react";

function Skills() {
  const gridData = [
    { imageUrl: "/JS.png", title: "Title 3" },
    { imageUrl: "React2.png", title: "Title 4" },
    { imageUrl: "Node.png", title: "Title 5" },
    { imageUrl: "DSA.jpg", title: "Title 7" },
    { imageUrl: "/HTML.jpg", title: "Title 2" },
    { imageUrl: "/CSS2.jpg", title: "Title 1" },
    { imageUrl: "Git.png", title: "Title 6" },

    // Add more data objects as needed
  ];
  return (
    <div className="py-12 flex flex-col">
      <div className="text-2  text-5xl py-8 mt-0" style={{ color: "orange" }}>
        My Skills
      </div>
      <div className="grid lg:grid-cols-7 grid-cols-3 lg:gap-8 gap-4 py-12 lg:px-0 px-4">
        {gridData.map((item, index) => (
          <div
            className="text-center flex justify-center items-center"
            key={index}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className=" h-32 w-32 rounded-2xl"
            />
            {/* <h3 className="mt-2 text-white">{item.title}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
