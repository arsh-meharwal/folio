import React, { useState } from "react";
import "./App.css"; // Import your CSS file for styling

function CvPage() {
  const [isHovered, setIsHovered] = useState(false);
  const handleViewFullScreen = () => {
    window.open("/Resume.png", "_blank");
  };
  const handleDownload = () => {
    window.open("/Arsh-Resume.docx", "_blank");
    const pdfUrl = "/Arsh-Resume.docx";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/Arsh-Resume.docx"; // Set the filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div
        className="text-2  text-5xl pb-8 mt-0 lg:pt-0 pt-12"
        style={{ color: "orange" }}
      >
        My Resume
      </div>
      <div className="pt-4 lg:px-4 px-12">
        <div className={`container border-solid border-8 border-orange-400`}>
          <div
            className={`image-section `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src="/Resume.png" alt="Clickable Image" className="image" />

            {isHovered && (
              <div>
                <button
                  className="hover-button button-51 "
                  onClick={handleDownload}
                >
                  Download{" "}
                </button>
                <button
                  className="hover-button-2 button-51 "
                  onClick={handleViewFullScreen}
                >
                  View Full Screen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CvPage;
