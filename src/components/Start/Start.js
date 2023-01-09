import React, { useEffect, useState } from "react";
import "./Start.scss";
import { CONSTANT } from "../../constant";

const Start = ({
  setPlayerName,
  playerName,
  activeScreen,
  setActiveScreen,
  setPause,
  initSudoku,
  levelIndex,
  setLevelIndex,
  setLevel,
  initGameGrid,
  setTime,
  initNumberInputEvent,
}) => {
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (playerName.trim().length > 0) {
      setActiveScreen("game");
      initSudoku();
      initGameGrid();
      initNumberInputEvent();
      setPause(true);
      setTime(0);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 500);
    }
  };

  const handleLevelClick = () => {
    setLevelIndex(
      levelIndex + 1 > CONSTANT.LEVEL.length - 1 ? 0 : levelIndex + 1
    );
  };

  useEffect(() => {
    setLevel(CONSTANT.LEVEL[levelIndex]);
  }, [levelIndex, setLevel]);

  return (
    <div className={`start ${activeScreen === "start" ? " current" : ""}`}>
      <input
        type="text"
        className={`start__name ${!error ? "" : " start__name--error"}`}
        placeholder="Your Name"
        maxLength="11"
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button className="start__button" onClick={handleLevelClick}>
        {CONSTANT.LEVEL_NAME[levelIndex]}
      </button>
      <button
        className="start__button start__button--blue"
        onClick={handleClick}
      >
        New Game
      </button>
    </div>
  );
};

export default Start;
