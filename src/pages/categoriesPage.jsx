import Fetching from "../fetchdata/fetching";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/ProductCard";
import { useState } from "react";
import Header from "../Components/header";

function Categories() { 

  let [category_name , setcategory_name] = useState("beauty"); 
  let categories = Fetching("categories") || [];  
  let urlname = category_name.split(" ").join("-"); 
  let category_products = Fetching(`category/${urlname}`) || {};

return ( <>
  <Header />

  <div className="flex">
      <div className="min-h-100 text-[20px] min-w-[230px] p-[5px] shadow-[5px_0_10px_0_rgba(0,0,0,0.4)]">
        <CategoryCard items={categories} setcategory={setcategory_name}/>
      </div>

      <div className="flex flex-wrap justify-center gap-6 m-[20px]">
        { category_products.products?.map((prod,i)=>{ 
          return <ProductCard el={prod} key={i}/> }) }
      </div>
  </div> 
  </>)}

 export default Categories

