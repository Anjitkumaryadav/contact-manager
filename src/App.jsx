import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import './index.css'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
function App() {
  const localStorageKey = "contact"
  const [contact, setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))

  ||[]})
  

  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  },[contact])

  const addContact =(data)=>{
    setContact([...contact,data])
  }
  return (
    <div className='px-3'>
      <Header/>
      <AddContact  addContact={addContact}/>
      <ContactList contact={contact}/>
    
    </div>
  )
}

export default App