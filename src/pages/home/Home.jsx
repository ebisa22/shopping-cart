import { Link } from "react-router";
import styles from "./Home.module.css";
import heroImage from "../../assets/home-page-large.jpg"
import electronicsImage from "../../assets/electronics.jpg";
import jewelry from "../../assets/jewelry.jpg";
import menCloth from "../../assets/men-cloth.jpg";
import womenCloth from "../../assets/women-cloth.jpg";

const categories = [
  {
    name: "Men's Clothing",
    image: menCloth,
  },
  {
    name: "Women's Clothing",
    image: womenCloth,
  },
  {
    name: "Jewelry",
    image: jewelry,
  },
  {
    name: "Electronics",
    image: electronicsImage,
  },
];

const Home = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>WELCOME TO QUICKSHOP</p>

            <h1>Everything you need, all in one place.</h1>

            <p className={styles.heroText}>
              Discover clothing, jewelry, electronics, and more. Find something
              you love and make it yours.
            </p>

            <Link to="/shop" className={styles.shopButton}>
              Shop Now
            </Link>
          </div>

          <div className={styles.heroImageWrapper}>
            <img
              src={heroImage}
              alt="Shopping"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Shop by category</h2>
            <p>
              Find exactly what you're looking for from our selection of
              products.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <Link
                to="/shop"
                className={styles.categoryCard}
                key={category.name}
              >
                <img src={category.image} alt={category.name} />
                <div className={styles.categoryOverlay}>
                  <h3>{category.name}</h3>
                  <span>Shop now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whyUs}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>WHY QUICKSHOP</p>
            <h2>Shopping made simple</h2>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
               
              <h3>Quality Products</h3>
              <p>
                Browse a wide range of products selected for your everyday
                needs.
              </p>
            </div>

            <div className={styles.feature}>
               
              <h3>Simple Shopping</h3>
              <p>
                Find what you want, choose your quantity, and add it to your
                cart.
              </p>
            </div>

            <div className={styles.feature}>
    
              <h3>Easy to Explore</h3>
              <p>
                Browse different categories and discover something new with
                ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div>
              <h2>QuickShop</h2>
              <p>Simple shopping. Everything you need.</p>
            </div>

            <div className={styles.footerLinks}>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/cart">Cart</Link>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p> <span className={styles.copyrightSymbol}>&copy;</span>2026 QuickShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
