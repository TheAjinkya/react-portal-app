import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {

    // const [contacts] = props

    const renderedContactList = props.contacts.map((contact) => {
        return (
            <div>
                <ContactCard contact={contact} deleteContactHandler={(id)=>props.getContactId(id)}/>
            </div>
        )
    })

    return (<div className='ui celled list'>
        {renderedContactList}
    </div>)
}

export default ContactList