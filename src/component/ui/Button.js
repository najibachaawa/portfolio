import React, { useState } from "react";
import classes from "./css/button.module.scss";
import { Link } from "react-router-dom";


const Button = ({ path, content, width, height }) => {
 
    return (
      <Link to={path} style={{ textDecoration: "none", marginLeft: "30px" }}>
        <div
          className={classes.button}
          style={{ width: width, height: height }}
        >
          <h3 className={classes.content}>{content}</h3>
        </div>
      </Link>
    );
  
};

export default Button;
