import React, { useState } from 'react';
import './Start.scss';
import { CONSTANT } from '../../constant';

const Start = ({ game, setPlayerName, playerName, activeScreen, setActiveScreen, setPause }) => {

  const [error, setError] = useState(false);

  let level_index = 0;
  let level = CONSTANT.LEVEL[level_index]

  const handleClick = () => {
    if (playerName.trim().length > 0) {
      setError(false);
      setActiveScreen(true);
      setPause(true);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 500)
    }
  }

  const handleLevelClick = (e) => {
    level_index = level_index + 1 > CONSTANT.LEVEL.length - 1 ? 0 : level_index + 1;
    level = CONSTANT.LEVEL[level_index];
    e.target.innerHTML = CONSTANT.LEVEL_NAME[level_index];
  }

  return (
    <div className={`start ${activeScreen ? '' : ' current'}`}>
      <input type="text" className={`start__name ${!error ? '' : ' start__name-error'}`} placeholder='Your Name' maxLength='11' onChange={e => setPlayerName(e.target.value)} />
      <button className="start__button" onClick={handleLevelClick}>Easy</button>
      {!game ? '' : <button className="start__button">Continue</button>}
      <button className="start__button start__button--blue" onClick={handleClick}>New Game</button>
    </div>
  )
}

export default Start