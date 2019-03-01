import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import { Consumer } from '../context';

class Contact extends Component {

  constructor() {
    
    super();
    this.state = {
      showContactInfo: false
    };
    //this.expandOnClick = this.expandOnClick.bind(this);
  }  
  
  expandOnClick = (e) => {
    console.log(this.state, e.target.nextSibling);
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  deleteOnClick = (id, dispatch) => {
    console.log("deleteOnClick(): ", id, dispatch);
    dispatch({ type: 'DELETE_CONTACT', payload: id});
   
  }

  editOnClick = (e) => {
    console.log("Hello from Pen");
    
  }

  render() {
    // console.log("Contact.js render();");
    
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return(
      <Consumer>
        {value => {

          const { dispatch } = value;
          // console.log(value);
          
          return (
            <div className="card card-body mb-3">
              <h4> {contact.fullName()} 
                <i onClick={this.expandOnClick}  style={styles.cursor} className="ml-3 fas fa-sort-down"></i>   
                <i onClick={this.deleteOnClick.bind(this, contact.id, dispatch)} className="fas fa-times" style={{cursor: 'pointer', float: 'right'}}></i>
                <i onClick={this.editOnClick} className="fas fa-pen" style={{cursor: 'pointer', float: 'right', marginRight: '20px'}}></i>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item"> Email: {contact.email} </li>
                  <li className="list-group-item"> Phone: {contact.phone} </li>
                </ul>
              ) : null}            
            </div>
          );
        }}
      </Consumer>
    );   
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired, 
}

export default Contact;


const styles = {

  cursor: {
    cursor: 'pointer'
  }

}