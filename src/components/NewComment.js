import React, {Component} from 'react';

import Comment from './Comment'
import SiteAxios from './SiteAxios'

class NewComment extends Component {
  state = {
    comment:{
      username: "",
      email: "",
      content: "",
      reply: "",
      date: "<date>"
    }
  }


  render() { 
    return (

      <div className="add-comment">
        <form method="post" action="comment" onSubmit={this.onSubmit.bind(this)}>
          <input type="hidden" name="entry-id" value="" />
          <input type="hidden" name="comment-id" value="" />
          <div>
            <label htmlFor="comment-textarea">add your comment</label>
            <textarea id="comment-textarea" name="text" rows="2" cols="60" value={this.state.comment.content} onChange={this.onChangeComment} requiered="true" ></textarea>
          </div>
          <div>
            <label htmlFor="comment-username">username</label>
            <input id="comment-username" type="text" name="username" value={this.state.comment.username} onChange={this.onChangeUsername} requiered="true" />
          </div>
          <div>
            <label htmlFor="comment-email">email</label>
            <input type="email" name="email" value={this.state.comment.email} onChange={this.onChangeEmail} />
          </div>
          <input type="submit" value="submit comment" />
        </form>
      </div>
    );
  }

  onChangeUsername = (event) => {
    let comment = Object.assign({}, this.state.comment);
    comment.username = event.target.value;
    this.setState({comment});
  }

  onChangeEmail = (event) => {
    let comment = Object.assign({}, this.state.comment);
    comment.email = event.target.value;
    this.setState({comment});
  }

  onChangeComment = (event) => {
    let comment = Object.assign({}, this.state.comment);
    comment.content = event.target.value;
    this.setState({comment});
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.state.comment.username !== "" && this.state.comment.content !== "" ){      
      this.setState({ date: new Date().toUTCString() });
      var url = 'comments_' + this.props.entry;
      SiteAxios
      .post(url, this.state.comment, {withCredentials: true})
      .then(response => {
        console.log(response);
        this.props.addComment(response.data);
        alert("Comment added!");
      });
      
    }
  }

}

export default NewComment;
