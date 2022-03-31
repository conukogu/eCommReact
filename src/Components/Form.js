
import React, { useState, useEffect } from "react"
import Axios from "axios"


function Form (){
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')

const [emailAdd, setEmailAdd] = useState('');
const [phoneNum, setPhoneNum] = useState('');

const [message, setMessage] = useState('');


const [formList, setFormList] = useState([]);

const [confirmation, setConfirmation] = useState(false)


useEffect(() => {
  Axios.get('http://localhost:3001/form/get').then((response) => {
    // console.log(response.data[response.data.length-2]);
    setFormList(response.data)
  })
}, [formList])


const submitFullForm = (e) => {
  e.preventDefault()
  Axios.post("http://localhost:3001/form/insert", {FirstName: firstName, 
  LastName: lastName,
  Email:emailAdd,
  PhoneNumber:phoneNum,
  Message: message}).then(()=> {
    alert("Sucsessful Insert!")
  });
  setConfirmation(true)
}

const FormOk = (e) =>{
  e.preventDefault()
  setConfirmation(false)
}

    return (
      <>
        {confirmation === false ? (
          <form className="contactForm">
            <label>First Name:</label>
            <input
              name="fName"
              type="text"
              required
              onChange={(e) => setFirstName(e.target.value)}
            ></input>

            <label>Last Name:</label>
            <input
              name="lName"
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
            ></input>

            <label>Email:</label>
            <input
              name="emailAdd"
              type="email"
              required
              onChange={(e) => setEmailAdd(e.target.value)}
            ></input>

            <label>Phone Number:</label>
            <input
              name="telNum"
              type="tel"
              required
              onChange={(e) => setPhoneNum(e.target.value)}
            ></input>

            <label className="areaLabel">
              Anything else you would like us to know?
            </label>
            <textarea
              name="message"
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" onClick={submitFullForm}>
              Submit
            </button>
          </form>
        ) : (
          <div className="check">
            <h1>Here is you sent info!</h1>
            <div>{formList[formList.length - 1].FirstName}</div>
            <div>{formList[formList.length - 1].LastName}</div>
            <div>{formList[formList.length - 1].Email}</div>
            <div>{formList[formList.length - 1].PhoneNumber}</div>
            <div>{formList[formList.length - 1].Message}</div>

            <button type="submit" onClick={FormOk}>
              OK
            </button>
          </div>
        )}
      </>
    );}

export default Form