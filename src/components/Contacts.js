import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, 
          firstName: "Marlene", 
          lastName: "Johnson", 
          email:"majo@gmail.com", 
          phone:"+478 598 652", 
          fullName() {return `${this.firstName} ${this.lastName}`}
        },
        { id: 2, 
          firstName: "Mo", 
          lastName: "Linus", 
          email:"gmail@gmail.com", 
          phone:"+48 222 555 47",
          fullName() {return `${this.firstName} ${this.lastName}`}
        },
        { id: 3, 
          firstName: "Ramon", 
          lastName: "Seguro", 
          email:"raseg@gmail.com", 
          phone:"+11 222 333 44",
          fullName() {return `${this.firstName} ${this.lastName}`}
        }
      ]
    }
  }

  //FUNCTIONS
  deleteContact = (id) => {
    console.log("deleteContact() in Contacts: run", id); 
    const { data } = this.state;
    const newContacts = data.filter(contact => contact.id !== id);
    this.setState({
      data: newContacts
    })
  }

  render() {   
    const { data } = this.state;
        
    return (
      <div>        
        { data.map( (contact) => <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact} /> ) }
        {/* {this.deleteContact.bind(this, contact.id)} */}
      </div>
    );
  }
}


export default Contacts;