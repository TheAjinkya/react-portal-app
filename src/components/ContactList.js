import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {

    // const [contacts] = props

    const deleteContactHandler = (id)=>{
        console.log("deleteContactHandler",id)
        props.getContactId(id)
    }

    const renderedContactList = props.contacts.map((contact) => {
        return (
            <div>
                <ContactCard contact={contact} Key={contact.id} clickHandler={deleteContactHandler}/>
            </div>
        )
    })

    return (<div className='ui celled list'>
        {renderedContactList}
    </div>)
}

export default ContactList