import React from 'react';
// import s from './ContactList.module.css';

const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        {/* <p>{ number}</p> */}
        {/* <p className={ s.name}>{phone}</p>
        <button className={ s.button} type="button" onClick={() => onDeleteContact(id)}>Удалить</button> */}
      </li>
    ))}
  </ul>
);

export default Contacts;
