import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch( action.type ) {
    case "DELETE_CONTACT":
      return {
        ...state, 
        data: state.data.filter( contact => contact.id !== action.payload )
      };
    case "ADD_CONTACT":
      return {
        ...state, 
        data: [action.payload, ...state.data]
      };
    default:
    return state;
  }
}

export class Provider extends Component {
  state = {
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
    ],

    dispatch: action => {
      this.setState(state => reducer(state, action))
    }

  };
  
  render() {
    return(
      <Context.Provider value={this.state}> 
        {this.props.children} 
      </Context.Provider>
    )
  }

}


export const Consumer = Context.Consumer;