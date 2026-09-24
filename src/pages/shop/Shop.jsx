import styles from './Shop.module.css'
import { useState } from 'react';
import { useFetchProducts } from '../../scripts/getProducts';
import Error from '../../components/error/Error';
import Loading from '../../components/loading/Loading';
import menuIcon from '../../assets/icons/menuIcon.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'
import sortIcon from '../../assets/icons/sortIcon.svg'

const Shop = () => {
  const [category,setCategory]=useState("all");
  const [sortMethod,setSortMethod]=useState("featured");
  const [searchInput,setSearchInput]=useState(null);
  const {products,loading,error}=useFetchProducts();
  
  if(loading)
  {
    return <Loading/>
  }else if(error){
    return <Error/>
  }
  
  return (
    <main main={styles.mainShopContainer}>
       <div className={styles.shopContentLayout}>
        <aside className={styles.filterSidebar}>
          <div className={styles.filterHeader}>
            <h3>Filters</h3>
            <button 
              className={styles.clearBtn} 
              onClick={() => { setCategory("default"); setSortMethod("default"); setSearchQuery(""); }}
            >
              Reset All
            </button>
          </div>
          <div className={styles.filterGroup}>
            <h4>Categories</h4>
            <ul className={styles.filterList}>
              <li>
                <button 
                  className={`${styles.filterOption} ${category === "default" ? styles.active : ""}`}
                  onClick={() => setCategory("default")}
                >
                  All Categories
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${category === "men's clothing" ? styles.active : ""}`}
                  onClick={() => setCategory("men's clothing")}
                >
                  Men's Clothing
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${category === "women's clothing" ? styles.active : ""}`}
                  onClick={() => setCategory("women's clothing")}
                >
                  Women's Clothing
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${category === "jewelery" ? styles.active : ""}`}
                  onClick={() => setCategory("jewelery")}
                >
                  Jewelery
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${category === "electronics" ? styles.active : ""}`}
                  onClick={() => setCategory("electronics")}
                >
                  Electronics
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.filterGroup}>
            <h4>Sort By</h4>
            <ul className={styles.filterList}>
              <li>
                <button 
                  className={`${styles.filterOption} ${sortMethod === "default" ? styles.active : ""}`}
                  onClick={() => setSortMethod("default")}
                >
                  Featured
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${sortMethod === "low-high" ? styles.active : ""}`}
                  onClick={() => setSortMethod("low-high")}
                >
                  Price: Low to High
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${sortMethod === "high-low" ? styles.active : ""}`}
                  onClick={() => setSortMethod("high-low")}
                >
                  Price: High to Low
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${sortMethod === "rating" ? styles.active : ""}`}
                  onClick={() => setSortMethod("rating")}
                >
                  Highest Rated
                </button>
              </li>
            </ul>
          </div>
        </aside>
        </div>
      <section></section>
    </main>
  );
};

export default Shop;
