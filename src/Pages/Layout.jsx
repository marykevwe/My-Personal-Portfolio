import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Toggle from './Toggle';

const Layout = ({ children, theme, toggleTheme }) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav>
        <div className="logo">Marian Aphaire</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
      <div className="content">{children}</div>
      <Outlet />
    </>
  );
};

export default Layout;
