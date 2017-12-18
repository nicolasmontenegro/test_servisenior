import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
//import {Route, Router, Link } from 'react-router'

import Entry from './Entry'
import CommentList from './CommentList'
import SiteAxios from './SiteAxios'


class EntryDetails extends Component {
	/*state = {
    entry : 
    {
      id: 10,
      title: "entry1",
      url: "http://www.google.cl",
      date: "<date>",
      username: "user1",
      votes:{
        up: 10,
        down: 5
      },
      comments: 16
    }
  }*/

  state = { entry: {}, loaded: false };


  componentDidMount(){

    console.log(this);
    var url = 'entry/' + this.props.match.params.id;
    SiteAxios
      .get(url, {withCredentials: true})
      .then(response => {
        console.log(response.data);
        this.setState({ entry: response.data });
        this.setState({ loaded: true });
      });
  }


  render() { 
    if (this.state.loaded)
      return (
        <div>
          <Entry entry={this.state.entry} key={this.state.entry.id} showContent={true} />
          <CommentList entry={this.state.entry.id} key={this.state.entry.id + "_comments"} />
        </div>
      );
    else
      return(
        <div>
          <h1> Loading... </h1>
        </div>
      )
  }

}

export default EntryDetails;
