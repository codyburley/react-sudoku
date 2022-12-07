import { useState, useEffect } from 'react';
import Game from '../Game/Game';
import Pause from '../Pause/Pause';
import Start from '../Start/Start';
import './Screen.scss';

const Screen = () => {
  const [game, setGame] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [activeScreen, setActiveScreen] = useState('start');
  const [pause, setPause] = useState(false);

  const getGameInfo = () => JSON.parse(localStorage.getItem('game'));

  useEffect(() => {
    setGame(getGameInfo());
  }, [])

  return (
    <div className='screen'>
      <Start
        game={game}
        setPlayerName={setPlayerName}
        playerName={playerName}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        setPause={setPause}
      />
      <Game
        playerName={playerName}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        pause={pause}
        setPause={setPause}
      />
      <Pause
        activeScreen={activeScreen}
        setPause={setPause}
        setActiveScreen={setActiveScreen}
      />
    </div>
  )
}

export default Screen