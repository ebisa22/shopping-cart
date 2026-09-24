import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
        <p>Loading products...</p>
    </div>
  );
};

export default Loading;
