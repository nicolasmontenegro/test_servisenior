import React, {Component} from 'react';
import { Link } from 'react-router-dom'
//import ReactDOM from 'react-dom';
//import {Route, Router, Link } from 'react-router'


import './app.css';


import EntryList from './EntryList'

function EntryHead(props) {
  
}




class App extends Component {
  
  render() { 

    return (
      <div>
        <p className="new-entry">
          <Link to="/new-entry"> 
            <img className="svg-icon" src="./img/si-glyph-document-edit.svg" alt=""/>
            New Entry
          </Link>          
        </p>
        <EntryList /> 
      </div>
    );
  }
}

export default App;