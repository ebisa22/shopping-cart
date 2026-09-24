import styles from "./Navbar.module.css";
import menuIcon from "../../assets/icons/menuIcon.svg";
import { NavLink } from "react-router";
import { useState } from "react";

const Navbar = ({ totalItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          QuickShop
        </NavLink>

        <nav className={styles.desktopNav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Cart
            {totalItems > 0 && (
              <span className={styles.totalCart}>{totalItems}</span>
            )}
          </NavLink>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={menuIcon} alt="menu" />
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileLink}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileLink}
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileLink}
          >
            Cart
            {totalItems > 0 && (
              <span className={styles.totalCart}>{totalItems}</span>
            )}
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
