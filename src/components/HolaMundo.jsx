import React from "react";
import "../assets/styles/Main.scss";
import reactImg from "../assets/static/react.png";

export default function HolaMundo() {
  return (
    <div className="container">
       <img src={reactImg} alt="imagen de react" />
      <h1>Hola mundo</h1>     
    </div>
  );
};
