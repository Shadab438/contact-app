import React from "react";
import { Link } from "react-router-dom";
import ContactDelete from "./ContactDelete";

const ContactCard = ({ name, email, id }) => {
  return (
    <>
      <div className="item my-3 border py-3 contact__card">
        <div className="content">
          <div className="header ">
            <Link
              className="info"
              to={{
                pathname: `/contact/${id}`,
                state: { name: name, email: email },
              }}
            >
              <h3>{name}</h3>
              <p>{email}</p>
            </Link>
            <div className="icon_handler">
              <Link
                to={{
                  pathname: `/edit`,
                  state: { name: name, email: email, id: id },
                }}
              >
                <i className="edit alternate outline icon text-primary" />
              </Link>

              <Link
                to={{
                  pathname: `/delete`,
                  state: { id: id },
                }}
              >
                <i className="trash alternate outline icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
