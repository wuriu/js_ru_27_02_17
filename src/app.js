import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'
import {normalizedArticles} from './fixtures'
import {normalizedComments} from './fixtures'

render(<ArticleList articles={normalizedArticles} comments={normalizedComments}/>, document.getElementById('container'))