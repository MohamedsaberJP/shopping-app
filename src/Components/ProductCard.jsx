import { ProductContext } from "../context/contextproducts";
import "./ProductCard.css"

function ProductCard({el,state}) {

  let {add_product , delete_product}=ProductContext();

  function handeladding(product){
    add_product(product)
  }

  function handeldeleting(product){
    delete_product(product)
  }

  return (<>
    <div className="card">
      <div className="image">
        <img src={el.images[0]} alt="" />
      </div>
      <div className="info">
        <h3>{"=> " + el.title}</h3>
        <h3>{"price : "+el.price +" $"}</h3>
        <p>{"category : "+el.category}</p>
        {state ? <h4>{"amount : "+el.amount}</h4> : ""}
      </div>
      
        {state 
        ?<div  style={{display:"flex"}}>
          <button onClick={()=>handeladding(el)} style={{backgroundColor:"blue",padding:"5px"}}>+</button>
          <h4>{el.amount}</h4>
          <button onClick={()=>handeldeleting(el)} style={{backgroundColor:"blue",padding:"5px"}}>-</button>
        </div>
        : <button onClick={()=>handeladding(el)} className="btn">add to cart</button> }

      
    </div>
  </>)
}

export default ProductCard

