import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './components/AddContact';


class App extends Component {


  render() {

    // const name = "Mary";
    // const showName = true;    

    return(
    
      // React.createElement('div', 
      //   { className: 'App'},
      //     React.createElement('h1', null, 'The App Component'),
      //     React.createElement('label', {htmlFor: 'hello-input'}, 'Name: '),
      //     React.createElement('input', {name: 'hello-input', type: 'text'})
      //   );
      <div className="App">
        <Header branding="Emu's Contacts"/>
        <div className="container">
          <AddContact></AddContact>
          <Contacts />
        </div>       
      </div>
     
    );    
  }
}


export default App;
