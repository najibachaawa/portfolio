import React, { useState } from "react";
import "./css/logo.scss";
import anime from 'animejs/lib/anime.es.js';

//Components

let loop=true
const Logo = () => {
    anime.timeline({loop})
    .add({
      targets: '.ml8 .circle-white',
      scale: [0, 3],
      opacity: [1, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 1100
    }).add({
      targets: '.ml8 .circle-container',
      scale: [0, 1],
      duration: 1100,
      easing: "easeInOutExpo",
      offset: '-=1000'
    }).add({
      targets: '.ml8 .circle-dark',
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
      offset: '-=600'
    }).add({
      targets: '.ml8 .letters-left',
      scale: [0, 1],
      duration: 1200,
      offset: '-=550'
    }).add({
      targets: '.ml8 .bang',
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1200,
      offset: '-=1000'
    }).add({
      targets: '.ml8',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1400
    });
  
  anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
  });
  return (
    <div className="wrap">
        <h1 className="ml8">
  <span className="letters-container">
    <span className="letters letters-left">B</span>
    <span className="letters bang">!</span>
  </span>
  <span className="circle circle-white"></span>
  <span className="circle circle-dark"></span>
  <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
</h1>
    </div>
  );
};
export default Logo;
