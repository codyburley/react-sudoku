import './Game.scss';
import { CONSTANT } from '../../constant';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GameClock from '../GameClock/GameClock';

const Game = ({ playerName, activeScreen, pause, setPause, setActiveScreen }) => {

  const renderCells = () => {
    let cells = [];
    for (let i = 0; i < 81; i++) {
      let row = Math.floor(i / CONSTANT.GRID_SIZE);
      let col = i % CONSTANT.GRID_SIZE;
      if (row === 2 || row === 5) cells.push(<div className='game__cell game__cell--bottom' key={i}></div>);
      else if (col === 2 || col === 5) cells.push(<div className='game__cell game__cell--right' key={i}></div>);
      else cells.push(<div className='game__cell' key={i}></div>)
    }
    return cells;
  };

  return (
    <div className={`game ${activeScreen === 'game' ? ' current' : ''}`}>
      <div className="game__grid">
        {renderCells()}
      </div>
      <div className="game__info">
        <div className="game__info-container game__info-container--name">
          <span className='game__player-name'>{playerName}</span>
        </div>
        <div className="game__info-container game__info-container--level">
          <span className='game__level'>Inhuman</span>
        </div>
      </div>
      <div className="game__info-container game__info-container--time">
        <GameClock
          pause={pause}
        />
        <button className="game__pause" onClick={() => { setPause(false); setActiveScreen('pause') }}>
          <FontAwesomeIcon icon={faPause} />
        </button>
      </div>
      <div className="game__number-container">
        <div className="game__number">1</div>
        <div className="game__number">2</div>
        <div className="game__number">3</div>
        <div className="game__number">4</div>
        <div className="game__number">5</div>
        <div className="game__number">6</div>
        <div className="game__number">7</div>
        <div className="game__number">8</div>
        <div className="game__number">9</div>
        <button className="game__number game__number--delete">X</button>
      </div>
    </div>
  )
}

export default Game