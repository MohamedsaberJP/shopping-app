import React, { useState } from "react";
import logo from "../assets/logo-removebg-preview.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../context/contextproducts";
import { Link } from "react-router-dom";

function Header({ setsearch }) {
  let [inputval, setinputval] = useState("");
  let { chosen } = ProductContext();

  let handelsearch = () => {
    setsearch(inputval);
    setinputval("");
  };
  return (
    <div className="header">
      <div className="logo-image">
        <Link to="/">
          <img src={logo} alt="sohapping web" className="logo" />
        </Link>
      </div>
      <div className="nav">
        <div className="search">
          <input
            type="text"
            name="search-product"
            placeholder="enter product ..."
            value={inputval}
            onChange={(e) => setinputval(e.target.value)}
          />
          <button onClick={handelsearch}>search</button>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/Productbasket">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{chosen.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
