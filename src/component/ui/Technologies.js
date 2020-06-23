import React, { useState } from "react";
import classes from "./css/technologies.module.scss";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import reacticon from "../../img/reactIcon.png";
import firebaseicon from "../../img/firebaseicon.png";
import rn from "../../img/rn.png";
import redux from "../../img/redux.png";
import js from "../../img/jsicon.jpg";
import mongodb from "../../img/mongodb.png";
const imgs = [reacticon, firebaseicon, rn, redux, js, mongodb];

const Technologies = () => {
  return (
    <div className={classes.row}>
      <p>
        Specialized in JavaScript with over a year of experience in building the
        web and working with technologies like
        <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
          <div style={{ display: "flex" }}>
            {" "}
            <img src={imgs[0]} alt="pic" className={classes.img} />
            <span className={classes.title}>ReactJS</span>
          </div>
          <div style={{ display: "flex" }}>
            <img src={imgs[1]} alt="pic" className={classes.img} />
            <span className={classes.title}>Firebase</span>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <img src={imgs[2]} alt="pic" className={classes.img} />
            <span className={classes.title}>React Native</span>
          </div>
          <div style={{ display: "flex" }}>
            <img
              src={imgs[3]}
              alt="pic"
              style={{ width: "70px" }}
              className={classes.img}
            />
            <span className={classes.title}>Redux</span>
          </div>
          <div style={{ display: "flex" }}>
            <img src={imgs[4]} alt="pic" className={classes.img} />
            <span className={classes.title}>Nodejs</span>
          </div>
        </TextLoop>
      </p>
    </div>
  );
};

export default Technologies;
