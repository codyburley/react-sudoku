import React from 'react';
import './Game.scss';

const Game = () => {
  const renderCells = () => {
    let cells = [];
    for (let i = 0; i <= 81; i++) {
      cells.push(<div className='game__cell' key={i}></div>)
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