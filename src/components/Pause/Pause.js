import React from 'react';
import './Pause.scss';

const Pause = ({ activeScreen, setPause, setActiveScreen }) => {
  console.log(activeScreen)

  return (
    <div className={`pause ${activeScreen === 'pause' ? ' current' : ''}`}>
      <button className="pause__button pause__button--blue" onClick={() => { setActiveScreen('game'); setPause(true) }}>Resume</button>
      <button className="pause__button" onClick={() => setActiveScreen('start')}>New Game</button>
    </div>
  )
}

export default Pause