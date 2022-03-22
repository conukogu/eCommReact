import { styles } from "dom7";
import React, {useState} from "react";
import './styles.css'




function Footer() {
    
  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <footer>
        <p class="copyR">Copyright &copy; 2021, Cohort 9</p>
      <div className="socialGroup">
        <a
          class="social"
          href="www.twitter.com"
          target="_blank"
          aria-label="Twitter"
        >
          <span class="fa-stack fa-1x sizeup">
            <i class="fa fa-circle-thin fa-stack-2x"></i>
            <i class="fa fa-twitter fa-stack-1x"></i>
          </span>
        </a>

        <a
          class="social"
          href="www.facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <span class="fa-stack fa-1x sizeup">
            <i class="fa fa-circle-thin fa-stack-2x"></i>
            <i class="fa fa-facebook fa-stack-1x"></i>
          </span>
        </a>

        <a
          class="social"
          href="www.instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <span class="fa-stack fa-1x sizeup">
            <i class="fa fa-circle-thin fa-stack-2x"></i>
            <i class="fa fa-instagram fa-stack-1x"></i>
          </span>
        </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
