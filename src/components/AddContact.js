import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";
import UserDataModel from "./UserDataModel";
import TextInputGroup from "./TextInputGroup";

class AddContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    errors: {}
  };

  //Update state when the Form changes
  formChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //On submit, build a new Object and send it with dipatch
  formSubmit = (dispatch, e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone } = this.state;

    // Check for Errors
    if (firstName === "") {
      this.setState({
        errors: { firstName: "Please fill in your first Name" }
      });
      return;
    }
    if (lastName === "") {
      this.setState({ errors: { lastName: "Please fill in your last Name" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Please fill a valid email address" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Honey, we need to call you!" } });
      return;
    }

    //Build new Contact Object to send to context.js
    const newContact = new UserDataModel(
      uuid(),
      firstName,
      lastName,
      email,
      phone
    );

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    //Clear Form Fields (setting this.state {} to empty values)
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      errors: {}
    });

    //Redirect to Home (Contacts.js)
    this.props.history.push("/");

    console.log(
      "formSubmit(): this.State(): ",
      this.state,
      "e.target: ",
      e.target
    );
  };

  render() {
    const { firstName, lastName, email, phone, errors } = this.state;
    // console.log("AddContact.js render(), this.state;", this.state);

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add new Contact</div>
              <div className="card-body">
                <form
                  id="emuForm"
                  onSubmit={this.formSubmit.bind(this, dispatch)}
                >
                  <TextInputGroup
                    label="Vorname"
                    type="text"
                    name="firstName"
                    placeholder="Dein Vorname.."
                    value={firstName}
                    onChange={this.formChange}
                    error={errors.firstName}
                  />
                  <TextInputGroup
                    label="Nachname"
                    type="text"
                    name="lastName"
                    placeholder="Dein Nachname.."
                    value={lastName}
                    onChange={this.formChange}
                    error={errors.lastName}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="du@deinedomain.de"
                    value={email}
                    onChange={this.formChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    type="text"
                    name="phone"
                    placeholder="+49 171 95 92 370.."
                    value={phone}
                    onChange={this.formChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    className="btn btn-secondary btn-block"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    ); //End return()
  } //End render()
}

export default AddContact;
