import React from "react"
import { NavLink } from "react-router-dom"
import { GoogleBtn } from "../GoogleBtn/GoogleBtn"
import styles from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <nav className={`uk-navbar-container uk-navbar ${styles.navbar}`}>
      <div className="uk-navbar-left uk-margin-small-left">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/">News</NavLink>
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
