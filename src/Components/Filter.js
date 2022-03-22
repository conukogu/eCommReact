import React, { useState } from "react";
import "./styles.css";
import data from "./testy.json";

function Filter() {
  const [search, setSearch] = useState("Hello");

  const arr3 = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  ); //.map(item => item.name)

  console.log(arr3);

  // const arr4=JSON.stringify(arr3)

  return (
    <>
      {search}
      <ul>
        {arr3.map((item) => (
          <li key={item.id}>
            <div>
              <p>Name: {item.name}</p>
              <p>{item.id}</p>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <form id="search">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          {/* <button type="submit" onSubmit={() => toSubmit()}>Go to Google</button> */}
        </form>
      </div>
    </>
  );
}

export default Filter;
