import './App.scss';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import useLocalStorage from 'use-local-storage';
import { useEffect, useState } from 'react';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [game, setGame] = useState('')

  const getGameInfo = () => JSON.parse(localStorage.getItem('game'));

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    setGame(getGameInfo());
  }, [])

  return (
    <div className="App" data-theme={theme}>
      <Nav switchTheme={switchTheme} />
      <Home game={game} />
    </div>
  );
}

export default App;
