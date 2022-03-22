import { styles } from "dom7";
import React, {useState} from "react";
import './styles.css'
import img from './Images/h1.png'




function Navbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav>
        <div id="menuToggle">
          <input type="checkbox"></input>

          <p class="close">
            <i class="fa fa-bars fa-3x hamburger"></i>
            <img className="logo" src={img}></img>
            <i class="fa fa-shopping-cart fa-3x shop"></i>
          </p>

          <div class="nav-links">
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