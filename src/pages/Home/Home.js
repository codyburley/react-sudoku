import React from 'react'
import Game from '../../components/Game/Game'
import Screen from '../../components/Screen/Screen'
import './Home.scss'

const Home = ({ game }) => {
  return (
    <div className='home'>
      <Screen game={game} />
      <Game />
    </div>
  )
}

export default Home