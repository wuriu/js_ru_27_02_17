import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component { 
     constructor() {
        super();
        this.state = {
            isOpened: false
        }
    }

    render() {
        const {comments} = this.props;
        const {isOpened} = this.state;
        const commentTemplates = comments ? comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>) : null;
        const commentContent = commentTemplates || (<div>No comments</div>)
        const commentSection = isOpened ? 
             (<div>
                  <h3>Comments</h3>
                  {commentContent}
              </div>) : null;

        return (
        	<div>
        	  <button onClick={this.toggleList}>{isOpened ? 'Hide comments' : 'Show comments'}</button>
              {commentSection}
            </div>
        )
    }

    toggleList = () => {
    	this.setState({
            isOpened: !this.state.isOpened
        })
    }
}

export default CommentList