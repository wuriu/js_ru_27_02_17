import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        const body = isOpen
            ? <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
            : null
        return (
            <div>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }
}

export default toggleOpen(Article)