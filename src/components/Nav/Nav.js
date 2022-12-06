import React from 'react';
import './Nav.scss';
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ switchTheme }) => {
  return (
    <nav className='nav'>
      <div className="nav__container">
        <a href='#' className='nav__logo'>Sudoku</a>
        <div className='nav__toggle'>
          <FontAwesomeIcon icon={faSun} className='nav__sun' />
          <FontAwesomeIcon icon={faMoon} className='nav__moon' />
        </div>
      </div>
    </nav>
  )
}

export default Nav