// modules/Entry.js

import React, {Component} from 'react';


class Comment extends Component{
  render() {
    return (
      <div className="item-comment" id="{this.props.key}"> 
        <div className="comment-detail">
          <p className="comment-meta"><span className="comment-date">{Date(this.props.comment.date)}</span><span className="comment-username"> by <a href="#">{this.props.comment.username}</a></span></p>
          <p className="comment-text">{this.props.comment.content}</p>
        </div>
      </div>
    );
  }
}

export default Comment;
