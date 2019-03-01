import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './components/AddContact';


class App extends Component {


  render() {   
    // console.log("App.js render();");

    return(    
      <Provider>
        <div className="App">
          <Header branding="Emu's Contacts"/>
          <div className="container">
            <AddContact></AddContact>
            <Contacts></Contacts>
          </div>       
        </div>
      </Provider>
     
    );    
  }
}


export default App;
