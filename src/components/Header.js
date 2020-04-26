import React from 'react'
import {Logo, IconSearch} from './Icon'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <nav className="header-nav">
        <NavLink
          activeClassName="header-nav_link--active"
          className="header-nav_link"
          aria-label="Go to search"
          exact="true"
          to="/"
        >
          <IconSearch className="header-nav_link-svg" />
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
