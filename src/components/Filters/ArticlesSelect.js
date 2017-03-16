import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeArticlesSelect} from '../../AC'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array,
        changeArticlesSelect: PropTypes.func.isRequired
    }

    handleChange = selected => {
        const { changeArticlesSelect } = this.props;
        changeArticlesSelect(selected.map(article => (article.value)));
    }


    render() {
        const { articles, selected } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    selected: state.selectedArticles,
    articles: state.articles
}), {
    changeArticlesSelect
})(SelectFilter)