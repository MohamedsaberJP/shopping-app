import { createContext, useContext, useState } from "react";


let Usercontext = createContext();

export let ProductContext = ()=>useContext(Usercontext);


export let ContextProvider = ({children})=>{
    let [chosen,setchosen] = useState([]);

    function add_product(item){
        setchosen(prev=>{
            let isexist = prev.find(e=> e.id == item.id);

            if(isexist){ return prev.map(e=>{
                return e.id == item.id ? {...e  , amount : e.amount + 1 } : e  ;
                })}
            else{
                return [...prev , { ...item , amount : 1}]
            }
        })
    }

    function delete_product(item){
        setchosen(prev=>{
            let isexist = prev.find(e=> e.id == item.id);

            if(isexist && isexist.amount > 1){ return prev.map(e=>
                e.id === item.id ? {...e  , amount : e.amount - 1 } : e
                )}
            else{
                let new_items = chosen.filter((e)=>e.id !== item.id)
                return new_items;
            }
        })
    }

    const value={
        chosen,
        add_product,
        delete_product
    }

    return(
        <Usercontext.Provider value={value}>
            {children}
        </Usercontext.Provider>
    )

}