import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {
 
  render() {       

    return (
      <Consumer>
        { value => {
          return (
            <div>        
              { value.data.map( (contact) => <Contact key={contact.id} contact={contact} /> ) }
              
            </div>
          )
        }}
      </Consumer>
    );       
   
  }
}


export default Contacts;