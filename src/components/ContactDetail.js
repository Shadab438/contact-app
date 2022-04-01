import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state;

  console.log(name, email);

  return (
    <div className="main contact_details">
      <h1 className=" mt-3 text-center">Contact Details</h1>
      <div className="ui card centered">
        <div className="content">
          <article className="mt-5">
            <h1 className="header">{name}</h1>
            <h3 className="description">{email}</h3>
          </article>
        </div>
      </div>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export default ContactDetail;
