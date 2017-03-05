import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {

    state = {
        isOpen: false
    }

    constructor() {
        super()
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        const body = isOpen
            ? <p className="article__text">{article.text}</p>
            : null
        const comments = this
            .props
            .comments
            .filter(comment => article.comments.indexOf(comment.id) != -1)
        const commentsList = isOpen
            ? <CommentList comments={comments}/>
            : null

        return (
            <section className="article">
                <h3 className="article__title" onClick={this.handleClick}>{article.title}</h3>
                {body}
                {commentsList}
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default Article