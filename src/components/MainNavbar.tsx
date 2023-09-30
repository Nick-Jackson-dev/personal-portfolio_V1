import { NavLink } from "react-router-dom"

import styles from "./MainNavbar.module.css"

export default function MainNavbar() {
  return (
    <nav className={styles["main-nav"]}>
      <div className={styles["link-container"]}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles["main-link"]}`
              : styles["main-link"]
          }
        >
          Home
        </NavLink>
      </div>
      <div className={styles["link-container"]}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles["main-link"]}`
              : styles["main-link"]
          }
        >
          About
        </NavLink>
      </div>
      <div className={styles["link-container"]}>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles["main-link"]}`
              : styles["main-link"]
          }
        >
          Projects
        </NavLink>
      </div>
      <div className={styles["link-container"]}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles["main-link"]}`
              : styles["main-link"]
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}
