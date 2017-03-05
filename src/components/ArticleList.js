import React, {Component} from 'react'
import Article from './Article'

class ArticleList extends Component {

    constructor() {
        super()
    }

    render() {
        const {articles} = this.props
        const {comments} = this.props
        const articleComponents = articles.map(article => <li key={article.id}><Article article={article} comments={comments}/></li>)
        return (
            <ul className="article-list">
                {articleComponents}
            </ul>
        )
    }

}

export default ArticleList