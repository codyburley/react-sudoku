import React, { useState } from 'react';
import './Start.scss';
import { CONSTANT } from '../../constant';

const Start = ({ game }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  let level_index = 0;
  let level = CONSTANT.LEVEL[level_index]

  const handleClick = () => {
    if (name.trim().length > 0) {
      setError(false);
      alert(`level => ${level}`)
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
    <div className='start '>
      <input type="text" className={`start__name ${!error ? '' : ' start__name-error'}`} placeholder='Your Name' maxLength='11' onChange={e => setName(e.target.value)} />
      <div className="start__button" onClick={handleLevelClick}>Easy</div>
      {!game ? '' : <div className="start__button">Continue</div>}
      <div className="start__button start__button--blue" onClick={e => handleClick(e)}>New Game</div>
    </div>
  )
}

export default Start