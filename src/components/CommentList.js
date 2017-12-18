import React, {Component} from 'react';

import Comment from './Comment'
import NewComment from './NewComment'
import SiteAxios from './SiteAxios'

class CommentList extends Component {

  constructor(props) {
    super(props);
    /*this.state = {
      comments: [
        {
          username: "user3",
          date: "<date>",
          id: 10,
          reply: "",
          content: "hola mundo 1"
        },
        {
          username: "user4",
          date: "<date>",
          id: 10,
          reply: "",
          content: "hola mundo 3"
        },

      ]
    }*/

    this.state = { comments: [], loaded: false };

    this.addNewComment = this.addNewComment.bind(this);
  }





  componentDidMount(){

    console.log(this);
    var url = 'comments_' + this.props.entry;
    SiteAxios
      .get(url, {withCredentials: true})
      .then(response => {
        console.log(response.data);
        this.setState({ comments: response.data.data });
        this.setState({ loaded: true });
      });
  }
	

  buildComments(){
    if (this.state.comments.length)
      return this.state.comments.map((c,i) => <Comment comment={c} key={i} /> );
  }

  addNewComment(commentObject){
    console.log(this.state);
    var commentList = this.state.comments.slice();
    commentList.push(commentObject);
    this.setState({ comments: commentList });
  }


  render() { 

    return (
      <div>
        <NewComment key={"new-comment"} addComment={this.addNewComment} entry={this.props.entry}/>
        <div className="comments" id="comments">
          <h3 className="comments-title">Comments</h3>

          {this.buildComments() }
        </div>
      </div>
    );
  }

}

export default CommentList;
