import React, { Component } from 'react';
import { Consumer } from '../context';
import uuid from 'uuid';
import UserDataModel from './UserDataModel';


class AddContact extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  } 

  //Update state when the Form changes
  formChange = (e) => {    
    this.setState({[e.target.name] : e.target.value});
    // console.log(`formChange(): fired, state: ${this.state}, target.name: ${e.target.name}, target.value: ${e.target.value}`);
  }

  //On submit, build a new Object and send it with dipatch
  formSubmit = (dispatch, e) => {
    e.preventDefault();
    
    const { firstName, lastName, email, phone } = this.state;

    const newContact = new UserDataModel (
      uuid(),
      firstName,
      lastName,
      email,
      phone      
    );

    dispatch({type: "ADD_CONTACT", payload: newContact});

    //Clear Form Fields
    Array.from(e.target.getElementsByTagName("input")).forEach( input => {     
      input.value = ""; 
    }); 


    
    console.log("setState(): Form submitted, but not, hehehe. State:", this.state, e.target);    
  }

  render() {

    const { firstName, lastName, email, phone } = this.state;

    return (
      <Consumer>
        { value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add new Contact</div>
              <div className="card-body">
                <form id="emuForm" onSubmit= {this.formSubmit.bind(this, dispatch)}> 
                  <div className="form-group">
                    <label htmlFor="firstName">Vorname:</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      className="form-control form-control-lg" 
                      placeholder="Dein Vorname.."
                      value={firstName}
                      onChange={this.formChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Nachname:</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      className="form-control form-control-lg" 
                      placeholder="Dein Nachname.."
                      value={lastName}
                      onChange={this.formChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                      type="text" 
                      name="email" 
                      className="form-control form-control-lg" 
                      placeholder="DeinEmailName@beispieldomain.de"
                      value={email}
                      onChange={this.formChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input 
                      type="text" 
                      name="phone" 
                      className="form-control form-control-lg" 
                      placeholder="+49 170 9592370"
                      value={phone}
                      onChange={this.formChange}
                    />
                  </div>
                  <input type="submit" className="btn btn-secondary btn-block" value="Send" />
                </form>
              </div>        
            </div>
          )
        }}
      </Consumer>
    ) //End return()
  } //End render()
}

export default AddContact;