import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__row">
        <NavLink to="/" className="navbar__mark" onClick={() => setOpen(false)}>
          DD Films <span>& Media</span>
        </NavLink>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="button button--outline navbar__cta" onClick={() => setOpen(false)}>
            Start a project
          </NavLink>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}