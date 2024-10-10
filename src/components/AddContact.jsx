import React, { useState } from "react";

function AddContact({addContact}) {

const[contactData, setContactData] = useState({name:"", email:""})

const handleChange = (e)=>{
  if(e.target.name === 'name'){
    setContactData({...contactData,name:e.target.value})

  }
  else{
    setContactData({...contactData,email:e.target.value})
  }
}

const handleAdd =()=>{
  if(contactData.name === "" || contactData.email === ""){
    alert("please fill all details")
    return
  }
  addContact(contactData)
  setContactData({name:"",email:""})
}
  return (
    <div>
      <div className="text-start text-2xl font-semibold">Add Contact</div>
      <form action="">
        <label htmlFor="">Name:</label>
        <input className="border-2 p-2 border-gray-800 rounded-md ml-2" type="text" placeholder="Enter name.." name="name"  value={contactData.name} onChange={handleChange}/>
        <br />
        <label htmlFor="">Email:</label>
        <input className="border-2 p-2 border-gray-800 rounded-md ml-2 mt-2" type="email" placeholder="Enter email.." name="email" value={contactData.email} onChange={handleChange}/>
        <br />
      </form>
      <button onClick={handleAdd} className="border-gray-900 mt-2 bg-gray-200 text-red-700 px-2 py-1 rounded-md">Add Contact</button>
    </div>
  );
}

export default AddContact;
