import { useState, useEffect } from "react";
import Contacts from "./Contacts/Contacts";
import FormikForm from "./Form/Form";
import "./Contacts/contacts.css";

export default function List() {
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  const addContact = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  const formSubmit = (values) => {
    const newContact = {
      name: values.name,
      surname: values.surname,
      phone: values.phone,
    };
    setContacts((prevList) => [newContact, ...prevList]);
    // console.log(values)
    setShowForm(false);
  };

  return (
    <>
      <div className="wrapper">
        <Contacts
          addContact={addContact}
          contacts={contacts}
          setContacts={setContacts}
        />
      </div>
      {showForm && <FormikForm hideForm={hideForm} formSubmit={formSubmit} />}
    </>
  );
}
