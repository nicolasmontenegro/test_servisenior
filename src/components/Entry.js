// modules/Entry.js

import React, {Component} from 'react';

import { Link } from 'react-router-dom'


class Entry extends Component{

	getContent() {
		if (this.props.showContent)
			return (
				<div className="content">
					<p>{ this.props.entry.content }</p>
				</div>
			)
	}

  render() {
    return (
      <div className="entry">
        <div className="data">
        	
        		<h3 className="entry-title">
        			<Link to={ {pathname: "/entry/"+this.props.entry.id  } }> 
        				{this.props.entry.title}
        			</Link>
        			<span className="entry-source">
        				<a href={this.props.entry.url} >{this.props.entry.url}</a>
        			</span>
        		</h3>
          
          <p className="entry-detail"><span className="entry-date">{Date(this.props.entry.date)}</span><span className="entry-user"> by {this.props.entry.username}</span></p>

        	{ this.getContent() }   
        </div>
        <div className="meta">
          <p>
        		<Link to={ {pathname: "/entry/"+this.props.entry.id+"#comments" } }> 
            	<span title="Comments" className="entry-meta-link"><img className="svg-icon" src="./img/si-glyph-bubble-message-text.svg" alt=""/>{this.props.entry.comments}</span>
            </Link>
          </p>
        </div>     
      </div>
    );
  }
}

export default Entry;

/*
<span title="Votes up" className="entry-meta-link"><img className="svg-icon" src="./img/si-glyph-like.svg" alt=""/>{this.props.entry.votes.up}</span>
<span title="Votes down" className="entry-meta-link"><img className="svg-icon" src="./img/si-glyph-like-unlike.svg" alt=""/>{this.props.entry.votes.down}</span>
*/