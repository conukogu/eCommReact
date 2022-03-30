
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

var x=""

useEffect(() => {
  Axios.get('http://localhost:3001/api/get').then((response) => {
    // console.log(response.data[response.data.length-2]);
    setFormList(response.data)
  })
}, [formList])


const submitFullForm = (e) => {
  e.preventDefault()
  Axios.post("http://localhost:3001/api/insert", {FirstName: firstName, 
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
        {confirmation===false ? (<form className="contactForm">
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
            onChange={(e) => setLastName(e.target.value)}
          ></input>

          <label>Email:</label>
          <input
            name="emailAdd"
            type="email"
            onChange={(e) => setEmailAdd(e.target.value)}
          ></input>

          <label>Phone Number:</label>
          <input
            name="telNum"
            type="tel"
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
        ) :

        ( 
          
          <div>     
        {formList[formList.length-1].Email}
       
                   
          
          <button type="submit" onClick={FormOk}>
            OK
          </button>
          </div>
         
        )
}
 </>
    )}

export default Form