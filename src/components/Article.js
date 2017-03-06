import React, {Component, PropTypes} from 'react'
import CommentList from './CommentListOld'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired
    }

    constructor(props) {
        super()
        this.state = {
            isOpen: false //props.defaultOpen
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