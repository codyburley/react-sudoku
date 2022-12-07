import { useState, useEffect } from 'react';
import Game from '../Game/Game';
import Start from '../Start/Start';
import './Screen.scss';

const Screen = () => {
  const [game, setGame] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [activeScreen, setActiveScreen] = useState(false);
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
        pause={pause}
        setPause={setPause}
      />
    </div>
  )
}

export default Screen