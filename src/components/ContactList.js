import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({
  contacts = [],
  deleteContact,
  searchTerm,
  searchHandler,
}) => {
  const searchRef = useRef("");
  const getSearchTerm = () => {
    searchHandler(searchRef.current.value);
  };

  const list = contacts.map((contact) => {
    return (
      <ContactCard
        {...contact}
        key={contact.id}
        deleteContact={deleteContact}
      />
    );
  });

  return (
    <>
      <div className="ui celled list">
        <div className="home__page d-flex align-items-center justify-content-between">
          <h2>Customer List</h2>{" "}
          <Link to="/add" className="btn btn-primary btn-md ">
            Add Customer
          </Link>
          <div className="ui search">
            <div className="ui icon input">
              <input
                ref={searchRef}
                className="prompt"
                type="text"
                value={searchTerm}
                onChange={getSearchTerm}
                placeholder="Search Contacts..."
              />
              <i className="search icon"></i>
            </div>
            {/* <div class="results"></div> */}
          </div>
        </div>

        {list.length > 0 ? list : "No Contact to display"}
      </div>
    </>
  );
};

export default ContactList;
