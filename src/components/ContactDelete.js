import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const ContactDelete = ({ deleteContact }) => {
  const location = useLocation();
  const { id } = location.state;
  const history = useHistory();

  const deleteCurrent = () => {
    deleteContact(id);
    history.push("/");
  };
  return (
    <>
      <div className="main contact__delete">
        <h1 className=" mt-3 text-center">Contact Details</h1>
        <div className="ui card centered">
          <div className="content">
            <div className="header text-center">Do u want to delete</div>
            <div className="btn-container d-flex justify-content-center align-items-center">
              <Link to="/">
                <button
                  className="btn btn-danger btn-block mx-2"
                  onClick={deleteCurrent}
                >
                  Yes
                </button>
              </Link>
              <Link to="/">
                <button className="btn btn-primary btn-block">No</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDelete;
