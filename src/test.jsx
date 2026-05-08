// exaple of prop & props.children
export function Car({color , brand , roof = "open" , ...res}) {
    return (<>
        <h2>My car brand is {brand}</h2>
        <h2>My car  color is {color}</h2>
        <h2>My car  year is {res.year} and model is {res.model} and the roof is {roof}</h2>
        <h2>{res.children}</h2>
        </>
    );
}


// exaples on events 
let show = () =>{
    window.alert("hello world");
}
let ssh = (a, b) => {
    alert(b.type);
}

export function Aler(){
    return(
        <>
        <button onClick={show}>click here</button>
        <button onClick={(event) => ssh("Goal!", event)}>click here</button>
        </>
    )
}

// examples on statment 
export let Allstatus= ({name , isonline , avilbility , type ,role}) =>{

    let Status1 = ()=>{
    if(isonline === true){
        return(<h1>online: 🟢</h1>);
    }
    return(<h1>online: 🔴</h1>);
    }

    let Status2 = ()=>{
        return (<h1>
            {avilbility ? "available for work" : "not available" }
        </h1>)
    }

    let Status3 = ()=>{
    return(
        <>
        {type === "male" && <h1>gender : 👨‍🦰</h1>}
        {type === "female" && <h1>gender : 👩‍🦰</h1>}
        </>
    )}

    let Status4 = ()=>{
    let x = null ;
    if(role === true){
        x = <h1>position : admin</h1>  }
    else {
        x = <h1>position : user</h1>  }

    return x;
    }
return (<>
    <h1>{name}</h1>
    < Status1 />
    < Status2 />
    < Status3 />
    < Status4 />
</>)
}