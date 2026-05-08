import { ProductContext } from "../context/contextproducts";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/header";

function Productbasket() {
    let{ chosen } = ProductContext();

  return (<>
  <Header />
    <div className="flex flex-wrap justify-center gap-6 m-5">
    {chosen.length > 0
      ? chosen.map(product =>{
      if(product.amount !== 0){  return <ProductCard el={product} key={product.id} state={true}/>  } 
      else{  return "";  }})
      : <h1 className="text-2xl italic capitalize">this product is not available right now</h1>}
    </div>
</>)
}

export default Productbasket
