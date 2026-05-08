import {useState} from "react";


// let all = [
//     {id:10,name:"ali",salary:500},
//     {id:10,name:"mohamed",salary:400},
//     {id:10,name:"sayed",salary:300}
// ];

let Inputvalue = ()=>{
    return (<>
        <input type="text" value = ""/>
    </>)
}

export let State1 = ()=>{
    let [name , setname] = useState(0);

    return (<>
    <p>{name}</p>
    <Inputvalue />
    <button onClick={() => setname(name + 1)}>reset</button>
    </>)
}