import React from "react"
import { NavLink } from "react-router-dom"
import { GoogleBtn } from "../GoogleBtn/GoogleBtn"

export const NavBar = () => {
  return (
    <nav className="uk-navbar-container uk-navbar" style={{ height: 80 }}>
      <div className="uk-navbar-left uk-margin-small-left">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/create-news">Создать новость</NavLink>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-right uk-margin-small-right">
        <ul className="uk-navbar-nav">
          <li>
            <GoogleBtn />
          </li>
        </ul>
      </div>
    </nav>
  )
}
