import { useParams,useOutletContext } from "react-router";
import { useState,useEffect } from "react";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import styles from "./ExpandedProduct.module.css";
const ExpandedProduct=()=>{
    const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const {productId}=useParams();
const { cartList, setCartList } = useOutletContext();
useEffect(() => {
   const controller = new AbortController();

   const loadProduct = async () => {
      try {
         const response = await fetch(
            `https://fakestoreapi.com/products`,
            { signal: controller.signal }
         );

         if (!response.ok)
            throw new Error();

         const data = await response.json();
const targetData = data.find((product) => product.id == productId);

setProduct(targetData);
         setError(false)
      } catch (error) {
         if (error.name !== "AbortError")
            setError(true);
      } finally {
         setLoading(false);
      }
   };

   loadProduct();

   return () => controller.abort();
}, [productId]);
 const handleBuy = (product) => {
   const exists = cartList.some((cartItem) => cartItem.id === product.id);
   if (exists) {
     return;
   }
   const productToAdd = {
     ...product,
     quantity: 1,
   };

   setCartList((prevCartList) => [...prevCartList, productToAdd]);
 };
if (loading) return <Loading />;
if (error) return <Error />;
if (!product) return null;
    return (
      <main className={styles.productPage}>
        <div className={styles.productContainer}>
          <div className={styles.imageSection}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>

          <div className={styles.infoSection}>
            <span className={styles.category}>{product.category}</span>

            <h1 className={styles.title}>{product.title}</h1>

            <div className={styles.rating}>
              <span className={styles.stars}>
                {"★".repeat(Math.round(product.rating.rate))}
              </span>

              <span>{product.rating.rate}</span>

              <span className={styles.reviewCount}>
                ({product.rating.count} reviews)
              </span>
            </div>

            <h2 className={styles.price}>${product.price}</h2>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.buttonGroup}>
              <button className={styles.buyButton} onClick={()=>{
                handleBuy(product)
              }}>Add To Cart</button>
            </div>
          </div>
        </div>
      </main>
    );
}

export default ExpandedProduct;