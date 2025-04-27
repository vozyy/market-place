// src/components/Navigation.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Navigation.scss';

function Navigation({ variant = 'default'}) {
  
  const links = [
    { to: '/productlist', label: 'Home' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' }
  ]

  return (
    <nav
      className={classNames(
        'navigation',
        `navigation--${variant}`,
      )}
      aria-label="Main navigation"
    >
      <ul className="navigation__list">
        {links.map(({ to, label }) => (
          <li key={to} className="navigation__item">
            <NavLink
              to={to}
              className={({ isActive }) =>
                classNames('navigation__link', {
                  'navigation__link--active': isActive,
                })
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
