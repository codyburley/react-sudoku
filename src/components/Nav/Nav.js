import { useState } from 'react';
import './Nav.scss';
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ switchTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <nav className='nav'>
      <div className="nav__container">
        <a href='#' className='nav__logo'>Sudoku</a>
        <div className='nav__toggle'>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => { setIsDarkMode(!isDarkMode); switchTheme() }}
          />
          <label htmlFor="checkbox" className="label">
            <FontAwesomeIcon icon={faSun} className='nav__icon nav__icon--sun' />
            <FontAwesomeIcon icon={faMoon} className='nav__icon nav__icon--moon' />
            <div className='ball'></div>
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Nav