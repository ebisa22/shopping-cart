import { Link, useOutletContext } from "react-router";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartList, setCartList } = useOutletContext();

  const totalPrice = cartList.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const calculatePrice = (product) => {
    return product.price * product.quantity;
  };

  const handleIncreaseQuantity = (productId) => {
    setCartList(
      cartList.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      }),
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCartList(
      cartList
        .map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        })
        .filter((product) => product.quantity > 0),
    );
  };

  const handleDeleteItem = (productId) => {
    setCartList(cartList.filter((product) => product.id !== productId));
  };

  if (cartList.length === 0) {
    return (
      <section className={styles.emptyCart}>
        <h1>Your Cart Is Empty</h1>

        <p>Looks like you haven't added any products yet.</p>

        <Link to="/shop" className={styles.shopButton}>
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.cartPageContainer}>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>

      <section className={styles.cartContainer}>
        {cartList.map((product) => (
          <div className={styles.cartItem} key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />

            <div className={styles.productInfo}>
              <h3>{product.title}</h3>

              <p className={styles.price}>${product.price.toFixed(2)}</p>
            </div>

            <div className={styles.quantityControls}>
              <button onClick={() => handleDecreaseQuantity(product.id)}>
                −
              </button>

              <span>{product.quantity}</span>

              <button onClick={() => handleIncreaseQuantity(product.id)}>
                +
              </button>
            </div>

            <div className={styles.subtotal}>
              ${calculatePrice(product).toFixed(2)}
            </div>

            <button
              className={styles.removeButton}
              onClick={() => handleDeleteItem(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      <section className={styles.cartSummary}>
        <div className={styles.totalRow}>
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button className={styles.checkoutButton}>Checkout</button>
      </section>
    </section>
  );
};

export default Cart;
