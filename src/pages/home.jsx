import Fetching from "../fetchdata/fetching";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/header.jsx";
import { useState } from "react";

function Home() { 
let [search , setsearch] = useState("");

let alldata = Fetching(`search?q=${search}`); 

return ( <>
    <Header setsearch={setsearch} />
    <div className="flex flex-wrap justify-center gap-6 m-5">
        {alldata?.products?.length > 0
        ?    alldata?.products?.map((e,i)=> <ProductCard el={e} key={i}/>)
        :   <h1 className="text-2xl italic capitalize">this product is not available right now</h1>}
    </div>
</> )}

export default Home;

