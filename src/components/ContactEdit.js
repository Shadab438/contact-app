import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state;
    this.state = { id: id, name: name, email: email };
  }

  updateHandler = (e) => {
    e.preventDefault();
    // const history = useHistory();
    if (this.state.name === "" || this.state.email === "") {
      return alert("Please fill all details");
    }
    this.props.updateFormHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div className="ui main add_contact">
          <h2 className="text-center py-3 text-primary">Edit Contact</h2>

          <form className="ui form" onSubmit={this.updateHandler}>
            <div className="field ">
              <label>First Name</label>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            {/* <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabindex="0" className="hidden" />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div> */}

            <button className="ui  btn btn-primary btn-lg" type="submit">
              Update Contact
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactEdit;
