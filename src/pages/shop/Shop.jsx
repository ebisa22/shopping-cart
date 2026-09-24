import styles from './Shop.module.css'
import { useState } from 'react';
import { useFetchProducts } from '../../scripts/getProducts';
import { useOutletContext } from 'react-router';
import Error from '../../components/error/Error';
import Loading from '../../components/loading/Loading';
import Products from '../../components/products/Products';
import CartBar   from '../../components/cartbar/CartBar'
import menuIcon from '../../assets/icons/menuIcon.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'
import sortIcon from '../../assets/icons/sortIcon.svg'
import categoryIcon from '../../assets/icons/categoryIcon.svg'

const Shop = () => {
  const [category,setCategory]=useState("all");
  const [sortMethod,setSortMethod]=useState("featured");
  const [searchInput,setSearchInput]=useState("");
  const {products,loading,error}=useFetchProducts();
  const {cartList,setCartList}=useOutletContext();
  
  if(loading)
  {
    return <Loading/>
  }else if(error){
    return <Error/>
  }else{
    return (
    <main className={styles.mainShopContainer}>
       <section className={styles.shopContentLayout}>
        <aside className={styles.filterSidebar}>
          <div className={styles.filterHeader}>
            <h3>Filters</h3>
            <button 
              className={styles.clearBtn} 
              onClick={() => { setCategory("all"); setSortMethod("featured"); }}
            >
              Reset All
            </button>
          </div>
          <div className={styles.filterGroup}>
            <div className={styles.categoryContainer}>
             <img src={categoryIcon} alt="Categories" />
             <h4>Categories</h4>
            </div>
            <ul className={styles.filterList}>
              <li>
                <button 
                  className={`${styles.filterOption} ${category === "all" ? styles.active : ""}`}
                  onClick={() => setCategory("all")}
                >
                  All Categories
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${category === "men" ? styles.active : ""}`}
                  onClick={() => setCategory("men")}
                >
                  Men's Clothing
                </button>
              </li>
              <li>
                <button 
                  className={`${styles.filterOption} ${category === "women" ? styles.active : ""}`}
                  onClick={() => setCategory("women")}
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
            <div className={styles.categoryContainer}>
             <img src={sortIcon} alt="Sort by" />
             <h4>Sort by</h4>
            </div>
            <ul className={styles.filterList}>
              <li>
                <button 
                  className={`${styles.filterOption} ${sortMethod === "featured" ? styles.active : ""}`}
                  onClick={() => setSortMethod("featured")}
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
        <aside className={styles.mainSidebar}>
           <section className={styles.searchBar}>
                <div className={styles.searchContainer}>                        
               <input type="text" className={styles.searchInput} placeholder='Search Products' onChange={(e)=>{
                  setSearchInput(e.target.value.trim())
               }}/>
                <img src={searchIcon} alt="A search Icon" className={styles.searchIcon}/>
                </div>
           </section>
  
             <Products products={products} category={category} sortMethod={sortMethod} searchInput={searchInput}/>
       
        </aside>
        </section>
        {
          (cartList.length>0)? <CartBar cartList={cartList} setCartList={setCartList}/>:null
        }
    </main>
  );
}
};

export default Shop;
