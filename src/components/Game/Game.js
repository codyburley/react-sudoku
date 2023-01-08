import "./Game.scss";
import { CONSTANT } from "../../constant";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameClock from "../GameClock/GameClock";
import { sudokuGen } from "../../sudoku";
// import { useEffect } from "react";

const Game = ({
  playerName,
  activeScreen,
  pause,
  setPause,
  setActiveScreen,
  su,
  level,
  levelIndex,
  cells,
  time,
  setTime,
}) => {
  return (
    <div className={`game ${activeScreen === "game" ? " current" : ""}`}>
      <div className="game__grid">
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
        <div className="game__cell"></div>
      </div>
      <div className="game__info">
        <div className="game__info-container game__info-container--name">
          <span className="game__player-name">{playerName}</span>
        </div>
        <div className="game__info-container game__info-container--level">
          <span className="game__level">{CONSTANT.LEVEL_NAME[levelIndex]}</span>
        </div>
      </div>
      <div className="game__info-container game__info-container--time">
        <GameClock pause={pause} time={time} setTime={setTime} />
        <button
          className="game__pause"
          onClick={() => {
            setPause(false);
            setActiveScreen("pause");
          }}
        >
          <FontAwesomeIcon icon={faPause} />
        </button>
      </div>
      <div className="game__number-container">
        <div className="game__number">1</div>
        <div className="game__number">2</div>
        <div className="game__number">3</div>
        <div className="game__number">4</div>
        <div className="game__number">5</div>
        <div className="game__number">6</div>
        <div className="game__number">7</div>
        <div className="game__number">8</div>
        <div className="game__number">9</div>
        <button className="game__number game__number--delete">X</button>
      </div>
    </div>
  );
};

export default Game;
