import React, { useRef, useState } from "react";
import "./styles.css";
import data from "./testy.json";
import {Swiper, SwiperSlide} from "swiper/react";
import { submit } from "dom7";

function Filter() {
  const [search, setSearch] = useState("Hello");

  var collect = null;

  const arr3 = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) );

    

  // const arr5 = arr3.map((item) => item.name);

  var arr6=[];

 
const handleChange = (e) => {

  e.preventDefault();
  console.log(`Submit: ${search}`)

  arr6 = data.filter((item) =>
    item.name === search)

  arr6.map((item) => (
           console.log(item.id) ))

};
  

  return (
    <>
      {search}

      <form onSubmit={(e) => handleChange(e)}>
        <input
          type="text"
          list="data"
          onChange={(e) => setSearch(e.target.value)}
        />

        <datalist id="data">
          {arr3.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </datalist>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default Filter;
