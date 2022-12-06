import './App.scss';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import useLocalStorage from 'use-local-storage';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Nav switchTheme={switchTheme} />
      <Home />
    </div>
  );
}

export default App;
