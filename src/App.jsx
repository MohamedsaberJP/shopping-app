import "./App.css";
import Home from "./pages/home";
import { ContextProvider } from "./context/contextproducts";
import Productbasket from "./pages/Productbasket";
import Categories from "./pages/categoriesPage";
import { Routes,Route,Link } from "react-router-dom";



function App() {
  
  return (<>
  
    <ContextProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/Productbasket" element={<Productbasket />} />
    </Routes>

  </ContextProvider>
    </>);
}

export default App;
