import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import App from './components/App'
import EntryDetails from './components/EntryDetails'
import NewEntry from './components/NewEntry'
//import Entry from './components/Entry'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/entry/:id" component={EntryDetails}/>
      <Route path="/new-entry" component={NewEntry}/>
      <Route exact path="/" component={App}/>

    </Switch>
  </HashRouter>,
  document.getElementById('root')
);