import React, { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";
// import uuid from "react-uuid";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import AddCustomer from "./pages/AddCustomer";
import HomePage from "./pages/HomePage";
import ContactDetail from "./components/ContactDetail";
import ContactDelete from "./components/ContactDelete";
import api from "./api/contactsapi";
import ContactEdit from "./components/ContactEdit";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (data) setContacts(data);
    const getAllContacts = async () => {
      const data = await fetchContacts();
      if (data) setContacts(data);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitFormHandler = async (contact) => {
    const request = { id: uuid_v4(), ...contact };
    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
  };
  const updateFormHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);

    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const searchHandler = (term) => {
    setSearchTerm(term);
    if (term !== "") {
      const filteredList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      });
      setSearchResults(filteredList);
    } else {
      setSearchResults(contacts);
    }
  };
  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ContactList
              {...props}
              contacts={searchTerm.length < 1 ? contacts : searchResults}
              deleteContact={deleteContact}
              searchTerm={searchTerm}
              searchHandler={searchHandler}
            />
          )}
        />
        {/* <ContactList contacts={contacts} deleteContact={deleteContact} /> */}

        <Route
          path="/add"
          render={(props) => (
            <AddContact {...props} onSubmitFormHandler={onSubmitFormHandler} />
          )}
        />
        <Route path="/contact">
          <ContactDetail contacts={contacts} />
        </Route>

        <Route path="/delete">
          <ContactDelete deleteContact={deleteContact} />
        </Route>
        <Route
          path="/edit"
          render={(props) => (
            <ContactEdit {...props} updateFormHandler={updateFormHandler} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
