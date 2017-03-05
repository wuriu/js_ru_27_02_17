import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {

    state = {
        isOpen: false
    }

    constructor() {
        super()
    }

    render() {
        const {comments} = this.props
        const {isOpen} = this.state
        const btnText = isOpen
            ? "Скрыть комментарии"
            : "Показать комментарии"
        const commentComponents = comments.map(comment => <Comment comment={comment}/>)
        const commentList = isOpen
            ? <ul className="comment-list__comments">{commentComponents}</ul>
            : null
        return (
            <div className="comment-list">
                <a className="comment-list__btn" href="#" onClick={this.handleClick}>{btnText}</a>
                {commentList}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default CommentList