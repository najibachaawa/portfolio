import React from "react";
import classes from "./css/portfolio.module.scss";
import CardPic from "./CardPic";
import Button from "./Button";


const Portfolio = ({ color, title, details, description, src }) => {
  return (
    <div style={{ backgroundColor: color }} className={classes.wrapper}>
      <div className={classes.card}>
        <CardPic
          img="https://bahachammakhi.me/static/media/weather.a7973bb5.PNG"
          width="800px"
          reswidth="300px"
        />
      </div>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <h3 className={classes.details}>{details}</h3>

      <div className={classes.button}>
        <Button path={""} content="Preview" width="150px" height="50px" executed={false} />
      </div>
    </div>
  );
};
export default Portfolio;
