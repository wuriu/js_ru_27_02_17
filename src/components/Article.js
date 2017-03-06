import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired
    }

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        const body = isOpen
            ? <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
            : null
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article