import { useState, useEffect } from "react";
import Game from "../Game/Game";
import Pause from "../Pause/Pause";
import Start from "../Start/Start";
import "./Screen.scss";
import { sudokuGen } from "../../sudoku";
import { CONSTANT } from "../../constant";
// import { v4 as uuidv4 } from "uuid";

const Screen = () => {
  const [game, setGame] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [activeScreen, setActiveScreen] = useState("start");
  const [pause, setPause] = useState(false);
  const [cells, setCells] = useState([]);
  const [levelIndex, setLevelIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [level, setLevel] = useState(CONSTANT.LEVEL[levelIndex]);

  const getGameInfo = () => JSON.parse(localStorage.getItem("game"));

  // let levelIndex = 0;
  // let level = CONSTANT.LEVEL[levelIndex];

  let selectedCell = -1;

  let su = undefined;
  let suAnswer = undefined;

  // const renderCells = () => {
  //   const cellsArr = []
  //   su = sudokuGen(level);
  //   for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
  //     let row = Math.floor(i / CONSTANT.GRID_SIZE);
  //     let col = i % CONSTANT.GRID_SIZE;
  //     if (row === 2 || row === 5) cellsArr.push(<div className={`game__cell game__cell--bottom ${su.question[row][col] !== 0 ? ` game__cell--filled` : ''}`} key={uuidv4()} data-value={su.question[row][col]}>{su.question[row][col] !== 0 ? `${su.question[row][col]}` : ''}</div>);
  //     else if (col === 2 || col === 5) cellsArr.push(<div className={`game__cell game__cell--right ${su.question[row][col] !== 0 ? ` game__cell--filled` : ''}`} key={uuidv4()} data-value={su.question[row][col]}>{su.question[row][col] !== 0 ? `${su.question[row][col]}` : ''}</div>);
  //     else cellsArr.push(<div className={`game__cell ${su.question[row][col] !== 0 ? ` game__cell--filled` : ''}`} key={uuidv4()} data-value={su.question[row][col]}>{su.question[row][col] !== 0 ? `${su.question[row][col]}` : ''}</div>)
  //   }
  //   setCells(cellsArr)
  // };

  const initGameGrid = () => {
    for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
      let row = Math.floor(i / CONSTANT.GRID_SIZE);
      let col = i % CONSTANT.GRID_SIZE;
      if (row === 2 || row === 5) cells[i].style.marginBottom = "10px";
      if (col === 2 || col === 5) cells[i].style.marginRight = "10px";
    }
  };

  useEffect(() => {
    const el = document.querySelectorAll(".game__cell");
    setCells(el);
  }, []);

  const clearSudoku = () => {
    for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
      cells[i].innerHTML = "";
      cells[i].classList.remove("game__cell--filled");
      cells[i].classList.remove("game__cell--selected");
    }
  };

  const initSudoku = () => {
    // clear old sudoku
    clearSudoku();
    resetBg();
    // generate sudoku puzzle here
    su = sudokuGen(level);
    suAnswer = [...su.question];

    // saveGameInfo();

    // show sudoku to div
    for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
      let row = Math.floor(i / CONSTANT.GRID_SIZE);
      let col = i % CONSTANT.GRID_SIZE;

      cells[i].setAttribute("data-value", su.question[row][col]);

      if (su.question[row][col] !== 0) {
        cells[i].classList.add("game__cell--filled");
        cells[i].innerHTML = su.question[row][col];
      }
    }
    initCellsEvent();
  };

  const hoverBg = (index) => {
    let row = Math.floor(index / CONSTANT.GRID_SIZE);
    let col = index % CONSTANT.GRID_SIZE;

    let box_start_row = row - (row % 3);
    let box_start_col = col - (col % 3);

    for (let i = 0; i < CONSTANT.BOX_SIZE; i++) {
      for (let j = 0; j < CONSTANT.BOX_SIZE; j++) {
        let cell = cells[9 * (box_start_row + i) + (box_start_col + j)];
        //console.log(cell);
        cell.classList.add("game__cell--hover");
      }
    }

    let step = 9;
    while (index - step >= 0) {
      cells[index - step].classList.add("game__cell--hover");
      step += 9;
    }

    step = 9;
    while (index + step < 81) {
      cells[index + step].classList.add("game__cell--hover");
      step += 9;
    }

    step = 1;
    while (index - step >= 9 * row) {
      cells[index - step].classList.add("game__cell--hover");
      step += 1;
    }

    step = 1;
    while (index + step < 9 * row + 9) {
      cells[index + step].classList.add("game__cell--hover");
      step += 1;
    }
  };

  const resetBg = () => {
    cells.forEach((e) => e.classList.remove("game__cell--hover"));
  };

  const initCellsEvent = () => {
    cells.forEach((e, index) => {
      e.addEventListener("click", () => {
        if (!e.classList.contains("game__cell--filled")) {
          cells.forEach((e) => e.classList.remove("game__cell--selected"));

          selectedCell = index;
          e.classList.remove("game__cell--err");
          e.classList.add("game__cell--selected");
          resetBg();
          hoverBg(index);
        }
      });
    });
  };

  useEffect(() => {
    setGame(getGameInfo());
  }, []);

  return (
    <div className="screen">
      <Start
        game={game}
        setPlayerName={setPlayerName}
        playerName={playerName}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        setPause={setPause}
        initSudoku={initSudoku}
        levelIndex={levelIndex}
        setLevelIndex={setLevelIndex}
        level={level}
        setLevel={setLevel}
        initGameGrid={initGameGrid}
        setTime={setTime}
      />
      <Game
        playerName={playerName}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        pause={pause}
        setPause={setPause}
        su={su}
        levelIndex={levelIndex}
        level={level}
        cells={cells}
        initGameGrid={initGameGrid}
        time={time}
        setTime={setTime}
      />
      <Pause
        activeScreen={activeScreen}
        setPause={setPause}
        setActiveScreen={setActiveScreen}
      />
    </div>
  );
};

export default Screen;
