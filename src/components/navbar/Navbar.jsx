import styles from './Navbar.module.css'
import { NavLink } from 'react-router';

const Navbar=({goHome,goShop,goCart})=>{
  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <NavLink to="/" className={styles.mainTitle}>
          QuickShop
        </NavLink>
      </div>
      <nav className={styles.rightHeader}>
        <div className={styles.homeNav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.navBtn} ${styles.activeBtn}`
                : `${styles.navBtn} ${styles.activeBtn}`
            }
          >
            Home
          </NavLink>
        </div>
        <div className={styles.shopNav}>
          <NavLink
            to="shop"
            className={({ isActive }) =>
              isActive
                ? `${styles.navBtn} ${styles.activeBtn}`
                : `${styles.navBtn} ${styles.activeBtn}`
            }
          >
            Shop
          </NavLink>
        </div>
        <div className={styles.cartNav}>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive
                ? `${styles.navBtn} ${styles.activeBtn}`
                : `${styles.navBtn} ${styles.activeBtn}`
            }
          >
            Cart
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;