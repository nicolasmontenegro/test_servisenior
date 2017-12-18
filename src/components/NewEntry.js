import React, {Component} from 'react';

import Comment from './Comment'
import SiteAxios from './SiteAxios'

class NewEntry extends Component {
  state = {
    url: "",
    title: "",
    username: "",
    email: "",
    content: ""
  }


  render() { 

    return (

      <div className="new-entry">
        <form method="post" action="publish" onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label htmlFor="publish-title">title</label>
            <input id="publish-title" type="text" name="title" value={this.state.title} onChange={this.onChangeTitle} requiered="true" />
          </div>
          <div>
            <label htmlFor="publish-url">url</label>
            <input id="publish-url" type="text" name="url" value={this.state.url} onChange={this.onChangeUrl} />
          </div>
          <div>
            <label htmlFor="publish-textarea">details</label>
            <textarea id="publish-textarea" name="text" rows="2" cols="60" value={this.state.content} onChange={this.onChangeContent} ></textarea>
          </div>
          <div>
            <label htmlFor="publish-username">username</label>
            <input id="publish-username" type="text" name="username" value={this.state.username} onChange={this.onChangeUsername} requiered="true"/>
          </div>
          <div>
            <label htmlFor="publish-email">email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} requiered="true" />
          </div>
          <input type="submit" value="submit publish" />
        </form>
      </div>
    );
  }

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  onChangeUrl = (event) => {
    this.setState({ url: event.target.value });
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  onChangeContent = (event) => {
    this.setState({ content: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.username !== "" && this.state.email !== "" && this.state.url !== "" && this.state.title !== "" ){
      this.state.date = new Date().toUTCString() ;
      SiteAxios
        .post('entry', this.state , {withCredentials: true})
        .then(response => {
          alert("Entry added");
        });
    }

  }

}

export default NewEntry;
