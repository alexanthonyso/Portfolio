import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/components/typing.css";

const TypingAnimation = () => {
  
  const text = "HI, MY NAME IS ALEXIS SOUFFLET FRONT-END DEVELOPER";
  const controls = useAnimation();
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Contrôle de la fréquence de clignotement du curseur

    controls.start("visible");

    return () => clearInterval(cursorInterval);
  }, [controls]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const cursorVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      className="typing-text"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
      <motion.span
        variants={cursorVariants}
        style={{ visibility: cursorVisible ? "visible" : "hidden" }}
      >
        &nbsp;|
      </motion.span>
    </motion.div>
  );
};

export default TypingAnimation;
