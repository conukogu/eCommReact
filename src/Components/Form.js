import { number } from "prop-types";
import React, { useState, useEffect } from "react"
import Axios from "axios"


function Form (){
const [firstName, setFirstName] = useState('')
const [formPassword,  setFormPassword] = useState('')
const [formList, setFormList] = useState([]);

useEffect(() => {
  Axios.get('http://localhost:3001/api/get').then((response) => {
    // console.log(response.data)
    setFormList(response.data)
  })
}, [])

const submitPassword = (e) => {
  e.preventDefault()
  Axios.post("http://localhost:3001/api/insert", {user_name: firstName, user_password: formPassword}).then(()=> {
    alert("Sucsessful Insert!")
  });
}

    return (
      <>
        <form className="contactForm">
          <label>First Name:</label>
          <input
            name="fName"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>

          <label>Last Name:</label>
          <input
            name="lName"
            type="text"
            onChange={(e) => setFormPassword(e.target.value)}
          ></input>

          <label>Email:</label>
          <input type="email"></input>

          <label>Phone Number:</label>
          <input type="tel"></input>

          <label className="areaLabel">
            Anything else you would like us to know?
          </label>
          <textarea></textarea>

          <button type="submit" onClick={submitPassword}>
            Submit
          </button>
        </form>

        {formList.map((item) => {
          return (
          <ul>
          <li>Username: {item.user_name}</li>

          <li>
            Password: {item.user_password}
          </li>

          <li>
            {"\n"}
          </li>
          </ul>
          )
        })}
      </>
    );
}

export default Form