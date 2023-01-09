import React from "react";
import "./Results.scss";

const Results = ({ time, activeScreen, setActiveScreen }) => {
  return (
    <section
      className={`results ${activeScreen === "results" ? " current" : ""}`}
    >
      <div className="results__title">Completed!</div>
      <div className="results__info">Time</div>
      <div className="results__time">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <button
        className="results__button"
        onClick={() => setActiveScreen("start")}
      >
        New Game
      </button>
    </section>
  );
};

export default Results;
