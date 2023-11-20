import React from "react";
import "../styles/pages/error.css";
import Header from "../components/Header";

const Error = () => {
  return (
    <div>
      <main>
        <Header />
      </main>
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div />
    </div>
  );
};

export default Error;
