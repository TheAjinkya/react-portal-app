import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import {uuid} from 'uuidv4'
import ToDoComp from './ToDoComp';
import LocalStorageComp from './LocalStorageComp';
import FacebookLoginComponent from './facebook.login.component';
import AddUser from '../users/Users/AddUser';
import UserReducers from '../reducers/UserReducers';
import GetUserData from '../DataComponent/GetUserData'


function App() {

  // const contacts = [
  //   {id:"1", name:"Ajinkya", email: "abc@xyz.com"},
  //   {id:"2", name:"Jon Snow", email: "jon@xyz.com"},
  //   {id:"3", name:"aaraya Stark", email: "aarya@xyz.com"},
  //   {id:"4", name:"Sarah Stark", email: "sara@xyz.com"},
  //   {id:"5", name:"Jamie Lannister", email: "jamie@xyz.com"}
  // ]

  const [contact, setContact] = useState([])
  const LOCAL_STORAGE_KEY = "contacts"

  const addContactHandler = (param)=>{
    setContact([...contact, {id:uuid(), ...param} ])
    console.log("contact", contact)
  }

  const removeContactHandler = (id)=>{
    console.log("Conatct id", id)
    const newContactList = contact.filter(iterator => iterator.id !== id );
    console.log(newContactList)
    if(newContactList.length === 0){
      newContactList = []
    }
    setContact(newContactList)
  }

  useEffect(()=>{
    if(contact.length>0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact))
    console.log("localStorage", localStorage)
  }
  }, [contact])

  useEffect(()=>{
    const retrievedContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrievedContact && retrievedContact.length>0) {
      console.log("retrievedContact", retrievedContact)
      setContact(retrievedContact)}
  }, [])

  return (
    <div className='ui container'>
      {/* <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      {contact.length >0 ? 
      <ContactList contacts={contact} getContactId={removeContactHandler}/> : null
      }
      <hr/> */}
      <FacebookLoginComponent />
      <hr/>
      <AddUser/>
      <hr/>
      <UserReducers/>
      <hr/>
      <GetUserData/>
     
    </div>
  );
}

export default App;
