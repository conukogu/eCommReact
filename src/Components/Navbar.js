import { styles } from "dom7";
import React, {useState} from "react";
import './styles.css'
import img from './Images/h1.png'




function Navbar({menuOpen, setMenuOpen}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav>
        <div id="menuToggle">
          <input 
          type="checkbox"
          value={menuOpen}
          onChange={()=>setMenuOpen(!menuOpen)}
          ></input>
       

        <p className="close">
          <i className="fa fa-bars fa-3x hamburger"></i>

          <a href="indexA.html">
            <img className="logo" src={img}></img>
          </a>

          <a href="product.html">
            <i className="fa fa-shopping-cart fa-3x shop"></i>
          </a>
        </p>

        <div className="nav-links">
          <a href="indexA.html">HOME</a>
          <a href="product.html">PRODUCTS</a>
          <a href="cart.html">CART</a>
          <a href="contact.html">CONTACT</a>
        </div>
         </div>
      </nav>
    </>
  );
}

export default Navbar;