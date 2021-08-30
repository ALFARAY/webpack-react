import React from "react";
import "../assets/styles/Main.scss";
import reactImg from "../assets/static/react.png";

const HolaMundo = () => {
  return (
    <div className="container">
       <img src={reactImg} alt="imagen de react" />
      <h1>Hola mundo</h1>
     
    </div>
  );
};

export default HolaMundo;
