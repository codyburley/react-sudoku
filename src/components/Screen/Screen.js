import React from 'react';
import Start from '../Start/Start';
import './Screen.scss';

const Screen = ({ game }) => {
  return (
    <div className='screen'>
      <Start game={game} />
    </div>
  )
}

export default Screen