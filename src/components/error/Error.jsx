import { Link } from "react-router";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>!</div>

      <h2>Something went wrong</h2>

      <p>We couldn't load the products right now. Please try again later.</p>

      <Link to="/" className={styles.homeButton}>
        Go Home
      </Link>
    </div>
  );
};

export default Error;
