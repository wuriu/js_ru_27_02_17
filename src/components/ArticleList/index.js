import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import './style.css'

class ArticleList extends Component {
    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <CSSTransition component="ul"
                           transitionName="article-list"
                           transitionAppear={true}
                           transitionAppearTimeout={100}
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
            >
                {articleComponents}
            </CSSTransition>
        )
    }
}

const mapStateToProps = state => {
    const {articles, selectedArticles, dateRange} = state;
    let filteredArticles = articles;
    if (selectedArticles && selectedArticles.length) {
        filteredArticles = articles.filter(article => selectedArticles.includes(article.id))
    }
    if (dateRange.from && dateRange.to) {
        const fromDate = Date.parse(dateRange.from);
        const toDate = Date.parse(dateRange.to);
        filteredArticles = filteredArticles.filter(article => {
            const articleDate = Date.parse(article.date);

            return articleDate >= fromDate && articleDate <= toDate
        })
    }

    return {
        articles: filteredArticles
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}