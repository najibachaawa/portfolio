import React, { useState } from "react";
import classes from "./css/devprocess.module.scss";
import ServiceCard from "../component/ui/ServiceCard";
import StepsCircle from "../component/ui/StepsCircle";
import Button from "../component/ui/Button";
import contentLoading from "../hoc/contentLoading";

const data = [
  { content: "We will plan together and design a prototype with great user experience and user interface using AdobeXD, Figma, ...", title: "Design" },
  { content: "I will develop your website, mobile app with the Hottest technologies  to make your next app Fast, scalable, secure ", title: "Development" },
  { content: "Testing your app  and fixing bugs is an important phase", title: "Testing" }
];

const DevProccess = () => {
  let step1 = true;
  let step2 = false;
  let step3 = false;
  let done1 = false;
  let done2 = false;
  let done3 = false;
  let buttontext = "Next";
  let display = "none";
  let display2 = "";
  const [current, changeCurrent] = useState(0);
  function nextStep() {
    if (current < 2) {
      changeCurrent(current + 1);
    }
  }
  function previousStep() {
    if (current > 0) {
      changeCurrent(current - 1);
    }
  }
  if (current === 0) {
    step1 = true;
    step2 = false;
    step3 = false;
    display = "none";
    display2 = "";
  } else if (current === 1) {
    step1 = false;
    step2 = true;
    step3 = false;
    done1 = true;
    display = "";
    display2 = "";
  } else if (current === 2) {
    step1 = false;
    step2 = false;
    step3 = true;
    done1 = true;
    done2 = true;
    buttontext = "Done";
    display = "";
    display2 = "none";
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.steps}>
        <StepsCircle
          activated={step1}
          done={done1}
          number="1"
          step={data[0].title}
        />
        <div
          className={classes.hr}
          style={{
            backgroundColor: current === 1 || current === 2 ? "#2A878F" : "gray"
          }}
        />
        <StepsCircle
          activated={step2}
          done={done2}
          number="2"
          step={data[1].title}
        />
        <div
          className={classes.hr}
          style={{ backgroundColor: current === 2 ? "#2A878F" : "gray" }}
        />
        <StepsCircle
          activated={step3}
          done={done3}
          number="3"
          step={data[2].title}
        />
      </div>
      <div className={classes.content}>
        {data.slice(current, current + 1).map(el => {
          return <p className={classes.contexttext}>{el.content}</p>;
        })}
        <div
          className={classes.button}
          style={{ display: display2 }}
          onClick={() => nextStep()}
        >
          {buttontext}
        </div>
        <div
          className={classes.button1}
          style={{ display: display }}
          onClick={() => previousStep()}
        >
          Previous
        </div>
      </div>
    </div>
  );
};

export default DevProccess;
