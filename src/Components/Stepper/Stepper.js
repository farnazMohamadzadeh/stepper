import React, { useContext, useEffect, useState } from "react";
import "./Stepper.css";
import Step from "../Step/Step";
import LoginForm from "../Forms/LoginForm/LoginForm";
import AuthContext from "../../Context/AuthContext";
import Products from "../Products/Products";

const Stepper = () => {
  const authContext = useContext(AuthContext);
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "مرحله اول",
      subtitle: "وضعیت اول",
      complete: false,
    },
    {
      id: 2,
      title: "مرحله دوم",
      subtitle: "وضعیت دوم",
      complete: null,
    },
    {
      id: 3,
      title: "مرحله سوم",
      subtitle: "وضعیت سوم",
      complete: null,
    },
    {
      id: 4,
      title: "مرحله چهارم",
      subtitle: "وضعیت چهارم",
      complete: null,
    },
  ]);
  // back button event
  const handleBackStep = () => {
    const copySteps = [...steps];
    const index = steps.findIndex((step) => step.complete === false);
    if (index > 0) {
      copySteps[index].complete = null;
      copySteps[index - 1].complete = false;
    }
    setSteps(copySteps);
  };

  //next button event
  const handleNextStep = () => {
    const result = steps.map((step) => {
      if (step.complete === false && step.id <= 3) {
        step.complete = true;
      }
      return step;
    });
    const index = result.findLastIndex((step) => step.complete);
    result[index + 1].complete = false;
    setSteps(result);
  };
  // useEffect(() => {
  //   if (authContext.isLogin) {
  //     const copySteps = [...steps];
  //     copySteps[0].complete = true;
  //     copySteps[1].complete = false;
  //     setSteps(copySteps);
  //   } else {
  //     const copySteps = [...steps];
  //     copySteps[0].complete = false;
  //     for (let i = 1; i < 4; i++) {
  //       copySteps[i].complete = null;
  //     }
  //     setSteps(copySteps);
  //   }
  // }, [authContext.isLogin]);

  return (
    <>
      <div className="stepper-container">
        {steps.map((step) => (
          <Step key={step.id} {...step} />
        ))}
      </div>
      {!steps[0].complete && <LoginForm />}
      {!steps[1].complete && steps[0].complete && <Products />}

      <div className="container">
        <button className="btn btn-secondary" onClick={handleBackStep}>
          قبلی
        </button>
        <button
          // disabled={!authContext.isLogin}
          className={` btn  ${
            authContext.isLogin ? "btn-primary" : "btn-disable"
          } `}
          onClick={handleNextStep}
        >
          بعدی
        </button>
      </div>
    </>
  );
};

export default Stepper;
