import { Bttn } from "./challenge1";

export let Resturant =() => {
    let showorder = (item1 , item2) => {
        alert(`you orderd ${item1} & ${item2}`);
    }

    return(<>
        <Bttn name="pizza" cost="12" order={showorder}/>
        <Bttn name="burger" cost="6" order={showorder}/>
        <Bttn name="salut" cost="18" order={showorder}/>
    </>)
}