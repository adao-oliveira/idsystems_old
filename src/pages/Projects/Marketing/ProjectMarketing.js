import React from "react";
import "../Projects.css";

export default function ProjectMarketing(props) {
  return (
    <div className="proj-imgbx">
      <img src={props.url} alt="product image" />
      <div className="proj-txtx">
        <h2>{props.name}</h2>
        <p>
          <button>Visitar</button>
        </p>
      </div>
    </div>
  );
}