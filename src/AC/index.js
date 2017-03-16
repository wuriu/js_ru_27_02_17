import {CHANGE_ARTICLES_SELECT, CHANGE_DATE_RANGE, DELETE_ARTICLE, INCREMENT} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeArticlesSelect (selectedArticles) {
    return {
        type: CHANGE_ARTICLES_SELECT,
        payload: { selectedArticles }
    }
}

export function changeDateRange (dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}