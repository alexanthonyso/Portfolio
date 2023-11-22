import React, { useState, useEffect } from "react";
import "../styles/main.css";
import "../styles/pages/home.css";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import Typing from "../components/Typing";
import { motion, AnimatePresence } from "framer-motion";
import Html from "../assets/logo/Html.svg";
import Folder from "../assets/logo/Folder.svg";
import Terminal from "../assets/logo/Terminal.svg";
import Gallery from "../components/Gallery";

// Composant de chargement
const LoadingScreen = ({ loadingPercentage }) => {
  return (
    <div className="loading-screen">
      <Loading />
      <div className="starting">
      <h1>System Starting</h1>
      <p className="percentage">{`${loadingPercentage}%`}</p>
    </div>
    </div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prevPercentage) =>
        prevPercentage < 100 ? prevPercentage + 1 : 100
      );
    }, 30); // Intervalles de 30 millisecondes pour l'exemple

    // Simuler une requête API ou un chargement de ressource
    const timer = setTimeout(() => {
      setIsLoading(false); // Arrêter l'affichage de la page de chargement après le chargement
    }, 3000); // 3 secondes pour l'exemple

    // Nettoyage du timer en cas de démontage du composant
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen loadingPercentage={loadingPercentage} />;
  }
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Se déplace vers le bas lors de la fermeture
      scale: 0.5, // Se réduit à une échelle plus petite lors de la fermeture
    },
    visible: {
      opacity: 1,
      y: 0, // Se déplace vers sa position normale lors de l'ouverture
      scale: 1, // S'agrandit à sa taille normale lors de l'ouverture
    },
  };

  // Fonction pour basculer la modale About
  const toggleAboutModal = () => {
    setIsAboutModalOpen(!isAboutModalOpen);
    // S'assurer que la modale Project est fermée
    setIsProjectModalOpen(false);
  };

  // Fonction pour basculer la modale Project
  const toggleProjectModal = () => {
    setIsProjectModalOpen(!isProjectModalOpen);
    // S'assurer que la modale About est fermée
    setIsAboutModalOpen(false);
  };

  return (
      <div className={`Home ${isAboutModalOpen || isProjectModalOpen ? 'modal-open' : ''}`}>
        <main>
          <Header
            onOpenModal={toggleAboutModal}
            onOpenProjectModal={toggleProjectModal}
          />

        {/* Modale pour "About" */}
        <AnimatePresence>
          {isAboutModalOpen && (
            <motion.div
              className="modal-container"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalVariants}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <Modal
                isOpen={isAboutModalOpen}
                onClose={toggleAboutModal}
                title={
                  <div className="title">
                    <img src={Folder} alt="Icône" />
                    <span className="arrow">&gt;</span>About me
                  </div>
                }
                content={
                  <div className="content-about">
                    <div className="aboutI">
                      <h1>About me</h1>
                      <p>
                        Récemment reconverti en tant que développeur web suite à
                        une formation spécialisée, je suis à la recherche
                        d'opportunités professionnelles pour mettre en pratique
                        mes compétences techniques acquises
                      </p>

                      <h1>Diplômes et Formations</h1>
                      <p>
                        Développeur Web De décembre 2022 à août 2023
                        Openclassrooms Paris Diplome de niveau 5 (bac +2)
                      </p>
                      <p>
                        -Transformez une maquette en site web avec HTML & CSS
                      </p>
                      <p>-Débuggez et optimisez un site de photographe</p>
                      <p>-Créez une page web dynamique avec JavaScript</p>
                      <p>
                        -Créez une application web de location immobilière avec
                        React
                      </p>
                    </div>
                    <div className="aboutII">
                      <h1>Compétences</h1>
                      <p>
                        Html / css / javascript / react.js / nodejs / github /
                        schema.org / ligthouse / wave
                      </p>

                      <h1>Logiciels</h1>
                      <p>
                        figma / notion / clip studio paint / adobe photoshop
                      </p>
                    </div>
                  </div>
                }
              />
            </motion.div>
          )}
          {/* Modale pour "Project" */}
          {isProjectModalOpen && (
            <motion.div
              className="modal-container"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalVariants}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <Modal
                isOpen={isProjectModalOpen}
                onClose={toggleProjectModal}
                title={
                  <div className="title">
                    <img src={Folder} alt="Icône" />
                    <span className="arrow">&gt;</span>Projects
                  </div>
                }
                content={<Gallery />}
              />
            </motion.div>
          )}

          <div className="html-container">
            <div className="static-window">
              <div className="title-static">
                <img src={Terminal} alt="Icône" />
                <span className="arrow">&gt;</span>Terminal
              </div>
              <div className="typing">
               <Typing />
              </div>
              
              
            </div>
            <div className="container-logo">
              <a
                href="https://www.linkedin.com/in/alexis-soufflet-177453272/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo-html" src={Html} alt="Logo LinkedIn" />
              </a>
              <p>LINKEDIN.HTML</p>

              <a
                href="https://github.com/alexanthonyso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo-html" src={Html} alt="Logo GitHub" />
              </a>
              <p>GITHUB.HTML</p>
            </div>
          </div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Home;
