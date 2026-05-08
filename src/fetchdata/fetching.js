import { useState,useEffect } from "react"

export default function useFetching(url){
    let [products,setproducts] = useState(null);

    useEffect(()=>{
        
        let getdata = async ()=>{
            try{
                let response = await fetch(`https://dummyjson.com/products/${url}`)
                let data = await response.json();
                setproducts(data);

            }   catch(err){
                console.log("error in loading data",err)
            }
        }
        getdata();
    },[url])

    return products;
}