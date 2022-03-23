import React, {useState} from "react";
import "./styles.css";
import data from "./testy.json";
import Filter from "./Filter";

import pic1 from "./Images/n1.jpeg"

function PicSearch (props) {

const [picID, setPicID] = useState(null);


const IDnum =()=> { setPicID(props.searchID)}
    
    return(
        <>
        <img src={`pic${picID}`}></img>
        {picID}
        </>
    )
}

export default PicSearch