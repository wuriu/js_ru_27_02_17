import {combineReducers} from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import articlesSelectReducer from './articlesSelect'
import dateRangeReducer from './dateRange'


export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    selectedArticles: articlesSelectReducer,
    dateRange: dateRangeReducer
})