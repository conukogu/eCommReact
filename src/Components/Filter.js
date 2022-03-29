import React, {useState } from "react";
import PicSearch from "./PicSearch";
import "./styles.css";
import data from "./testy.json";
import img1 from './Images/n1.jpeg';
import img2 from "./Images/n2.jpg";
import img3 from "./Images/n3.jpeg";
import img4 from "./Images/n4.jpeg";
import img5 from "./Images/n5.jpeg";
import img6 from "./Images/n6.jpg";






function Filter({menuOpen}) {
  const [search, setSearch] = useState("Hello");

  const [picID, setPicID] = useState(null);

  const [clearInput, setClearInput] = useState("");

  // var collect = 1;

  const arr1 = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) );

    

  var arr2=[];

  function Help1()
  {
    console.log(`This is the picID: ${picID}`)
  }

 
const handleSubmit = (e) => {

  e.preventDefault();
  console.log(`Submit: ${search}`)

  arr2 = data.filter((item) =>
    item.name === search)

  arr2.map((item) => 
          (setPicID(item.id),
           console.log(item.id) ))

   console.log(`This is the picID: ${picID}`); 
   
   setClearInput("")
  };

  const handleChange=(e) =>{
    setSearch(e.target.value)

    setClearInput(e.target.value);
  }
  

  return (
    <>
      {/* {search} */}

      <form className="homeSearch" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          list="data"
          className="homeInput"
          value={clearInput}
          placeholder="Search for Styles"
          onChange={(e) => handleChange(e)}
        />

        <datalist id="data">
          {arr1.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </datalist>
        <input className="homeSubmit" type="submit" value="Submit"></input>
      </form>

      {picID === null ? (
        <p className="siteName">Aada Braids: African Hair Brading</p>
      ) : (
        <img
          className="resultPic"
          src={
            picID === 1
              ? img1
              : picID === 2
              ? img2
              : picID === 3
              ? img3
              : picID === 4
              ? img4
              : picID === 5
              ? img5
              : picID === 6
              ? img6
              : null
          }
        ></img>
      )}

      {picID === null ? (
        <div className="linkAndOr">
          <button className="galleryLink">
            {" "}
            <p>Browse our Selection!</p>
            <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/conukogu/eComm/sec/product.html"></a>
          </button>
          <p className="OR">OR</p>
        </div>
      ) : null}

      {picID &&  (
        <>
          <div className="homeCart">
            <button className="homeCartbutton">
              <p>Add to Cart</p>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </button>
          </div>
          {!menuOpen && <div className="galleryInvite">
            <p>Like what you see?</p>
            <button>Browse our full selection!</button>
          </div>}
        </>
      )}
    </>
  );
}

export default Filter;
