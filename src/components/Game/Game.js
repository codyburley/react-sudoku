import React from 'react';
import './Game.scss';
import { CONSTANT } from '../../constant';

const Game = () => {
  const renderCells = () => {
    let index = 0;
    let cells = [];
    for (let i = 0; i < 81; i++) {
      let row = Math.floor(i / CONSTANT.GRID_SIZE);
      let col = i % CONSTANT.GRID_SIZE;
      if (row === 2 || row === 5) cells.push(<div className='game__cell game__cell--bottom' key={i}></div>);
      else if (col === 2 || col === 5) cells.push(<div className='game__cell game__cell--right' key={i}></div>);
      else cells.push(<div className='game__cell' key={i}></div>)
      index++;
    }
    return cells;
  }

  return (
    <div className='game current'>
      <div className="game__grid">
        {renderCells()}
      </div>
    </div>
  )
}

export default Game