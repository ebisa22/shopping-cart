import { Link } from "react-router";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <section className={styles.errorPage}>
      <div className={styles.errorCard}>
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <Link to="/" className={styles.homeButton}>
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;