import React from "react";
import "../styles/pages/home.css";
import "../styles/components/modal.css";
import image1 from "../assets/gallery/img1.jpg";
import image2 from "../assets/gallery/img2.jpg";
import image3 from "../assets/gallery/img3.jpg";
import image4 from "../assets/gallery/img4.jpg";

const Gallery = () => {
  const imageUrls = [image1, image2, image3, image4];
  const imageTitles = [
    "Project // _Booki.html",
    "Project // _Booki.react.js",
    "Project // _Nina Carducci.optimization",
    "Comming Soon",
  ];
  const externalLinks = [
    "https://alexanthonyso.github.io/Booki/",
    "https://kasa-seven-tawny.vercel.app/",
    "https://master-taupe.vercel.app/",
    "https://example.com/4",
  ];

  const imageSize = {
    width: "397px",
    height: "229px",
  };

  return (
    <div className="gallery-container">
      {imageUrls.map((url, index) => (
        <div key={index} className="image-container">
          <a href={externalLinks[index]} target="_blank">
            <img src={url} alt={`Image ${index + 1}`} style={imageSize} />
            <p className="image-title">{imageTitles[index]}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
