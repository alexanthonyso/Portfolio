import { motion } from 'framer-motion';
import React from 'react';
import '../styles/components/loading.css'; // Assurez-vous que ce fichier CSS existe et est bien configuré


// Composant pour les carrés de chargement
const LoadingSquares = () => {
  // Définissez la durée de l'animation pour chaque carré
  const duration = 0.5;
  // Définissez le délai entre le début de l'animation de chaque carré
  const delayBetweenSquares = 0.5;

  return (
    <div className="loading-container">
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          className="loading-square"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: index * delayBetweenSquares, // Chaque carré commence après un certain délai
            duration: duration,
            // Aucune répétition n'est définie, donc chaque carré reste rempli
          }}
        />
      ))}
    </div>
  );
};

export default LoadingSquares;
