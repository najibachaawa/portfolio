import React, { useState } from "react";
import classes from "./css/services.module.scss";
import ServiceCard from "../component/ui/ServiceCard";

const services = [
  { title: "Web development", description: "Fast and secure web applications" }
];

const Services = () => {
  const serviceGroup = services.map((el, n) => {
    let animation = "fade-left";
    let classname = classes.card
    if (n % 2 === 0) {
      animation = "fade-right";
      classname= classes.cardLeft
    }
    return (
      <div data-aos={animation} className={classname} >
        <ServiceCard title={el.title} description={el.description} />
      </div>
    );
  });
  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>Services</span>
      <div className={classes.group}>{serviceGroup}</div>
    </div>
  );
};
export default Services;
