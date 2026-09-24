import { useState,useEffect } from "react";

export const useFetchProducts= ()=>{
      const [products,setProducts]=useState(null);
      const [error,setError]=useState(false);
      const [loading,setLoading]=useState(true);
      useEffect(()=>{
      const controller = new AbortController();
       const loadProducts=async ()=>{
             try{
              const url = "https://fakestoreapi.com/products";
              const response = await fetch(url, { signal: controller.signal });
              if(!response.ok)
                  throw new Error(response.status)
              const products=await response.json();
              setProducts(products);
              setError(false);
             }catch(error){
                  if(error.name !== "AbortError")
                        setError(true);
             }finally{
                   setLoading(false);
             }
       }
       loadProducts();

       return ()=>controller.abort();
      },[])
  return {products,loading,error};
}
