import { useState, useEffect, useRef } from "react";
import Game from "../Game/Game";
import Pause from "../Pause/Pause";
import Start from "../Start/Start";
import "./Screen.scss";
import { sudokuGen, sudokuCheck } from "../../sudoku";
import { CONSTANT } from "../../constant";
import Results from "../Results/Results";

const Screen = () => {
  const [game, setGame] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [activeScreen, setActiveScreen] = useState("start");
  const [pause, setPause] = useState(false);
  const [cells, setCells] = useState([]);
  const [numberInputs, setNumberInputs] = useState([]);
  const [levelIndex, setLevelIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [level, setLevel] = useState(CONSTANT.LEVEL[levelIndex]);

  let selectedCell = -1;
  let interval = useRef();

  let su = undefined;
  let suAnswer = undefined;

  const initGameGrid = () => {
    for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
      let row = Math.floor(i / CONSTANT.GRID_SIZE);
      let col = i % CONSTANT.GRID_SIZE;
      if (row === 2 || row === 5) cells[i].style.marginBottom = "10px";
      if (col === 2 || col === 5) cells[i].style.marginRight = "10px";
    }
  };

  useEffect(() => {
    const cell = document.querySelectorAll(".game__cell");
    setCells(cell);
    const numbers = document.querySelectorAll(".game__number");
    setNumberInputs(numbers);
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
    removeErr();
    // generate sudoku puzzle here
    su = sudokuGen(level);
    suAnswer = [...su.question];

    // populate sudoku grid divs
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

  const checkErr = (value) => {
    const addErr = (cell) => {
      if (parseInt(cell.getAttribute("data-value")) === value) {
        cell.classList.add("game__cell--error");
        cell.classList.add("game__cell-err");
        setTimeout(() => {
          cell.classList.remove("game__cell-err");
        }, 500);
      }
    };

    let index = selectedCell;

    let row = Math.floor(index / CONSTANT.GRID_SIZE);
    let col = index % CONSTANT.GRID_SIZE;

    let box_start_row = row - (row % 3);
    let box_start_col = col - (col % 3);

    for (let i = 0; i < CONSTANT.BOX_SIZE; i++) {
      for (let j = 0; j < CONSTANT.BOX_SIZE; j++) {
        let cell = cells[9 * (box_start_row + i) + (box_start_col + j)];
        if (!cell.classList.contains("game__cell--selected")) addErr(cell);
      }
    }

    let step = 9;
    while (index - step >= 0) {
      addErr(cells[index - step]);
      step += 9;
    }

    step = 9;
    while (index + step < 81) {
      addErr(cells[index + step]);
      step += 9;
    }

    step = 1;
    while (index - step >= 9 * row) {
      addErr(cells[index - step]);
      step += 1;
    }

    step = 1;
    while (index + step < 9 * row + 9) {
      addErr(cells[index + step]);
      step += 1;
    }
  };

  useEffect(() => {
    if (pause) {
      interval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!pause) {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [pause, setTime]);

  const removeErr = () =>
    cells.forEach((e) => e.classList.remove("game__cell--error"));

  const isGameWin = () => sudokuCheck(suAnswer);

  const showResult = () => {
    setPause(false);
    clearInterval(time);
    setActiveScreen("results");
  };

  const initNumberInputEvent = () => {
    numberInputs.forEach((e, index) => {
      e.addEventListener("click", () => {
        if (!cells[selectedCell].classList.contains("game__cell--filled")) {
          cells[selectedCell].innerHTML = index + 1;
          cells[selectedCell].setAttribute("data-value", index + 1);
          // Add to answer
          let row = Math.floor(selectedCell / CONSTANT.GRID_SIZE);
          let col = selectedCell % CONSTANT.GRID_SIZE;
          suAnswer[row][col] = index + 1;
          removeErr();
          checkErr(index + 1);
          cells[selectedCell].classList.add("game__cell-zoom-in");
          setTimeout(() => {
            cells[selectedCell].classList.remove("game__cell-zoom-in");
          }, 500);

          // Check Game win
          if (isGameWin()) {
            setGame("");
            showResult();
          }
        }
      });
    });
    document.querySelector(".game__delete").addEventListener("click", () => {
      cells[selectedCell].innerHTML = "";
      cells[selectedCell].setAttribute("data-value", 0);

      let row = Math.floor(selectedCell / CONSTANT.GRID_SIZE);
      let col = selectedCell % CONSTANT.GRID_SIZE;

      suAnswer[row][col] = 0;

      removeErr();
    });
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
        initNumberInputEvent={initNumberInputEvent}
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
      <Results
        time={time}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />
    </div>
  );
};

export default Screen;
