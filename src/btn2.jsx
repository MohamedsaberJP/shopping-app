import { Btn } from "./challenge1";
export const Contact =({text})=>{
    let showalert = ()=>{
        return(alert("you are contact with us"));
    }

    return(<> 
        <h3>contact us : 
            <Btn text = "Contact us" asd={showalert}/>
        </h3>
    </>)
}
