import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.css"; // Assurez-vous que le chemin vers votre CSS est correct
import Logo from "../assets/logo/Logo.svg";
import About from "../assets/logo/About.svg";
import Project from "../assets/logo/Project.svg"; // Icône pour le nouveau bouton

import Clock from "./Clock";

const Header = ({ onOpenModal, onOpenProjectModal,  }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
      </div>

      <button className="button-bar" onClick={onOpenModal}>
        <img className="icon" src={About} alt="about" />
        <span>About me</span>
      </button>

      {/* Nouveau bouton pour ouvrir une autre modale */}
      <button className="button-bar" onClick={onOpenProjectModal}>
        <img className="icon" src={Project} alt="Other" />
        <span>Projects</span>
      </button>

      {/* Nouveau bouton pour ouvrir une autre modale */}

  

      <div className="clock-container">
        <img src="" alt="" />
        <Clock className="clock" />
      </div>
    </header>
  );
};

export default Header;
