import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Toggle from './Toggle';

const Layout = ({ children, theme, toggleTheme }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleToggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <nav className='flex'>
        <div className="logo">Marian Aphaire</div>
        <ul className="ul-desktop">
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
        <div className="mobile-nav-icon" onClick={handleToggleMobileNav}>
          ☰
        </div>
        {showMobileNav && (
          <ul className="mobile-nav">
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
        )}
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
      <div className="content">{children}</div>
      <Outlet />
    </>
  );
};

export default Layout;
