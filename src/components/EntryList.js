import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
//import {Route, Router, Link } from 'react-router'

import Entry from './Entry'
import SiteAxios from './SiteAxios'


class EntryList extends Component {

  constructor(props) {
    super(props);
    this.state = { entries : [] };


    /*var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://rem-rest-api.herokuapp.com/api/entry", true);
    xhr.withCredentials = true;
    xhr.onload = function (this) {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
      this.setState({ entries: data.data });
    }
    xhr.send();*/

  }

  componentDidMount(){
     SiteAxios
      .get('entry', {withCredentials: true})
      .then(response => {
        console.log(response.data.data);
        this.setState({ entries: response.data.data });
      });
  }


  buildEntry(){
    return this.state.entries.map((e,i) => <Entry entry={e} key={i}  showContent={false} /> )
  }


  render() { 

    return (
      <div>
          {this.buildEntry() }
      </div>
    );
  }

}

export default EntryList;
