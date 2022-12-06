import React from 'react'
import Screen from '../../components/Screen/Screen'
import './Home.scss'

const Home = ({ game }) => {
  return (
    <div className='home'>
      <Screen game={game} />
    </div>
  )
}

export default Home