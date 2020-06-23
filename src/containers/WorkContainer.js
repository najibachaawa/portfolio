import React, { useState } from "react";
import classes from "./css/work.module.scss";
import Portfolio from "../component/ui/Portfolio";
import Button from "./../component/ui/Button";

const portofolios = [
  {
    color: "#fffbcc",
    title: "WeatherApp",
    details: "A weather app created with reactjs and openweatherapi ",
    description: "Reactjs OpenweatherAPI"
  },
  {
    color: "#fffbcc",
    title: "WeatherApp",
    details: "A weather app created with reactjs and openweatherapi ",
    description: "Reactjs OpenweatherAPI"
  },
  {
    color: "#fffbcc",
    title: "WeatherApp",
    details: "A weather app created with reactjs and openweatherapi ",
    description: "Reactjs OpenweatherAPI"
  }
];

const WorkContainer= ({ match }) => {
  // console.log(match);
  const PortofolioGroup = portofolios.map(el => {
    return (
      <div>
        <Portfolio
          color={el.color}
          title={el.title}
          details={el.details}
          description={el.description}
        />
      </div>
    );
  });
  return (
    <div className={classes.wrapper}>
      <div>
     {PortofolioGroup}
      </div>

      <div className={classes.contactsection}>
        <h1 className={classes.title}>I can help !</h1>
        <p className={classes.description}>Iam available for freelance work</p>
        <h3 className={classes.details}>
          If you have a project that you want to get started, think you need my
          help with something or just fancy saying hey, then get in touch.
        </h3>

        <div className={classes.button}>
          <Button
            path={"/work"}
            content="Message me"
            width="150px"
            height="50px"
            executed={false}
          />
        </div>
      </div>
    </div>
  );
};
export default WorkContainer;
