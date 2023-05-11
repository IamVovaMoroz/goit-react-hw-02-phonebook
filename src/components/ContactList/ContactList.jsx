import React from 'react'
import Button from '@mui/material/Button';
// import cssModlue from './ContactList.module.css'

export default function ContactList({ contacts, deleteContacts }) {
    const defaultText = 'Not have a contacts';
  
    // Если contacts существует, отображаем список контактов, нет => отображаем текст по умолчанию
    return contacts ? (
      <ul className="contact-list">
        {contacts.map((contact) => {
          return (
            <li className="contact-item" key={contact.id}>
              <p className="contact-name">{contact.name}</p>
              <p className="contact-number">{contact.number}</p>
              <Button onClick={() => deleteContacts(contact.id)} variant="contained">
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    ) : (
      defaultText
    );
  }