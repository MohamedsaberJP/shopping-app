import styles from './challenge1.module.css'

let all = [
    {
        name :"ali",
        available:"yes",
        skills:["html" , "css"]
    },
    {
        name :"sayed",
        available:"no",
        skills:["html" , "css" , "js"]
    },
    {
        name :"mohamed",
        available:"yes",
        skills:["html" , "css" , "js" , "react"]
    },
];

export let Empolyes = () => {
    return(<ul >
        {all.filter((empolye => empolye.available === "yes")).map((empolye,index) =>(
            <li key={index} className={styles.card} >
                <p>{empolye.name}</p>
                <p className={empolye.available  === "yes" ? styles.available : styles.noavailable }>{empolye.available}</p>
                skills : <ul> {empolye.skills.map((skill , ind) =>(<li key={ind}>{skill}</li>))}</ul>
            </li>)
        )}
    </ul>)
}

export const Button1 =()=>{
    return(<button className={styles.btn}>subscribe</button>)
}

export let Btn = ({asd , text})=>{
    return(<button  className={styles.btn} onClick={asd}>{text}</button>)
}

export let Bttn = ({order , name , cost})=>{
    return(<button  className={styles.btn} onClick={()=>order(name,cost)}>order is :{name} price is :{cost}</button>)
}

