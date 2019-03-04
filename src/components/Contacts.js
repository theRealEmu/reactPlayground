import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";
import AddContact from "./AddContact";

class Contacts extends Component {
  render() {
    // console.log("Contacts.js render();");

    return (
      <React.Fragment>
        <Consumer>
          {value => {
            return (
              <div>
                {value.data.map(contact => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </div>
            );
          }}
        </Consumer>
      </React.Fragment>
    );
  }
}

export default Contacts;
