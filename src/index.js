import "./index.css"
import ReactDOM from 'react-dom/client';
import { Car, Aler , Allstatus } from './test';
import { List , MyCars } from './list';
import Pagecontent from'./dostyles';
import { Empolyes , Button1 } from './challenge1';
import { Contact } from "./btn2";
import { Subscribe } from "./btn1";

import { Resturant } from "./menu";
import { State1 } from "./usestate1";


ReactDOM.createRoot(document.getElementById('root'))
.render(
  <>
  <State1 />

  <Resturant />

  <Subscribe text="subscribe" />
  <Contact text="contact" />

  <Button1 />


  <Empolyes />

  <Pagecontent />

  <List />
  <MyCars />

  <Car brand="Ford" model="Mustang" color="red" year={1969} >
    <p><del>on thing is here</del></p>
  </Car>
  <Aler />

  <Allstatus name="ahmed" isonline = {true} role = "admin" avilbility = {true} type="male" />
  <Allstatus name="ali" isonline = {false} role = "user" avilbility = {false} type="female" />
  </>
);