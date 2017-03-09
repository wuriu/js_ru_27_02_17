import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from './CommentList'

class Article extends Component {
    render() {
        const {article, isOpen, toggleOpen} = this.props
        const body = isOpen
            ? <section>
                {article.text}
                <CommentList comments={article.comments} ref={this.getCommentList}/>
            </section>
            : null
        return (
            <div>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    getCommentList = ref => {
        this.commentList = ref
    }

    componentDidUpdate() {
        console.log('---', findDOMNode(this.commentList))
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default Article