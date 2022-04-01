import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }

  submitHandler = (e) => {
    e.preventDefault();
    // const history = useHistory();
    if (this.state.name === "" || this.state.email === "") {
      return alert("Please fill all details");
    }
    this.props.onSubmitFormHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div className="ui main add_contact">
          <h2 className="text-center py-3 text-primary">Add a Contact here</h2>

          <form className="ui form" onSubmit={this.submitHandler}>
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
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddContact;
