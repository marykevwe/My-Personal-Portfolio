
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function Toggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="toggle-btn">
      {theme === 'light' ? <FaMoon color="#000" /> : <FaSun color="#fff" />}
    </button>
  );
}

export default Toggle;
