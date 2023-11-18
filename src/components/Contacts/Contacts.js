import React from "react";

import './contacts.css';

export default function Contacts({ addContact, contacts, setContacts }) {

  const deleteItem = (id) => {
    const updatedList = contacts.filter((item) => item.id !== id)
    setContacts(updatedList);
  };

  return (
    <>
      <table className="title">
      <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Phone</td>
                <td><button className="add" onClick={addContact}>Add Contact</button></td>
              </tr>
            </thead>
      </table>
      {contacts.map((item) => {
        const {id, name, phone} = item;
        return (
          <table key={Math.random()}>
            <tbody>
              <tr>
                <td>{name.split(' ', [1])}</td>
                <td>{item.surname || name.split(' ').slice(1).join(' ')}</td>
                <td>{phone.split(' ', [1])}</td>
                <td className="btn">
                  <button className="delete" onClick={() => deleteItem(id)}>Delete</button>
                </td>
              </tr>
            </tbody>
            </table>
        );
      })}
    </>
  );
}
