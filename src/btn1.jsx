import { Btn } from "./challenge1";
export const Subscribe =({text})=>{
    let showalert = ()=>{
        return(alert("your are subscribed"));
    }

    return(<> 
        <h3>subscribe : 
            < Btn text = "Subscribe" asd={showalert}/>
        </h3>
    </>)
}
