import styles from './Products.module.css';
import { Link,useOutlet,useOutletContext } from 'react-router';


const structureProducts = (
  products,
  category,
  sortMethod,
  searchInput
) => {
 if (!products || !Array.isArray(products)) {
    return []; 
  }
  let structuredProducts = [...products];

  // category filter
  if (category !== "all") {
    structuredProducts = structuredProducts.filter(product => {
      if (category === "men")
        return product.category === "men's clothing";

      if (category === "women")
        return product.category === "women's clothing";

      if (category === "electronics")
        return product.category === "electronics";

      if (category === "jewelery")
        return product.category === "jewelery";

      return true;
    });
  }

  // search filter
  if (searchInput) {
    structuredProducts = structuredProducts.filter(product =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  // sort filter
  if (sortMethod === "low-high") {
    structuredProducts.sort((a, b) => a.price - b.price);
  } else if (sortMethod === "high-low") {
    structuredProducts.sort((a, b) => b.price - a.price);
  } else if (sortMethod === "rating") {
    structuredProducts.sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
  }

  return structuredProducts;
};

const Products = ({
  products,
  category,
  sortMethod,
  searchInput,
}) => {
  const {cartList,setCartList}=useOutletContext();
  const structuredProducts = structureProducts(
    products,
    category,
    sortMethod,
    searchInput
  );
 const handleBuy=(product)=>{
     setCartList(prevCartList=>setCartList([...prevCartList,product]))
 }
  return (
    <section className={styles.productGrid}>
      {structuredProducts.map(product => (
        <div className={styles.productCard} key={product.id}>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>

          <div className={styles.productInfo}>
            <Link
              to={`/product/${product.id}`}
              className={styles.productName}
            >
              {product.title}
            </Link>

            <div className={styles.rating}>
              <span className={styles.stars}>
                {"★".repeat(Math.round(product.rating.rate))}
              </span>

              <span className={styles.ratingValue}>
                {product.rating.rate}
              </span>
            </div>

            <div className={styles.bottomSection}>
              <span className={styles.price}>
                ${product.price}
              </span>

              <button className={styles.buyButton} onClick={()=>{
               handleBuy(product)
              }}>
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;