import React from 'react';
// import s from './ContactList.module.css';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}{' '}
          {
            <button type="button" onClick={() => onDeleteContact(id)}>
              Удалить
            </button>
          }
        </p>
      </li>
    ))}
  </ul>
);

export default Contacts;
