
let products = [
    {
        id:1,
        name:"ahmed",
        salary:300
    },
    {
        id:2,
        name:"sayed",
        salary:400
    },
    {
        id:3,
        name:"ali",
        salary:300
    },
    {
        id:4,
        name:"mohamed",
        salary:400
    }
];


export let List = ()=>{
return(<>
    <ul>
        {products.map((item) => <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.salary}</p>
        </li>)}
    </ul>

</>)
}

export function MyCars() {
const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
];

return(<>
    {cars.map((car)=>
        <h1 key={car.id}>{car.brand}</h1>
    )}
</>)

}