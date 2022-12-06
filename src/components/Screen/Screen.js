import React from 'react';
import Game from '../Game/Game';
import Start from '../Start/Start';
import './Screen.scss';

const Screen = ({ game }) => {
  return (
    <div className='screen'>
      <Start game={game} />
      <Game />
    </div>
  )
}

export default Screen