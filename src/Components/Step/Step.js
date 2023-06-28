import { React } from "react";
import "./Step.css";


const Step = ({ ...step }) => {
  return (
    <>
      <div className="step">
        <div
          className={`status ${
            step.complete === null ? "" : step.complete ? "complete" : "active"
          }`}
        >
          {step.complete ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <h4>{step.id}</h4>
          )}
        </div>

        <h5 className={`title ${step.complete !== null && "title-complete"} `}>
          {step.title}
        </h5>
        <span
          className={`subtitle ${
            step.complete === null
              ? ""
              : step.complete
              ? "subtitle-complete"
              : "subtitle-mid"
          }`}
        >
          {step.subtitle}
        </span>
      </div>
      {step.id !== 4 && (
        <div
          className={` ${
            step.complete === null
              ? "separator"
              : step.complete
              ? "separator-complete"
              : "separator-mid"
          }`}
        ></div>
      )}
    </>
  );
};

export default Step;
