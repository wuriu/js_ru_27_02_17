import {CHANGE_ARTICLES_SELECT} from '../constants'

export default (selectedArticles = null, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_ARTICLES_SELECT:
            return payload.selectedArticles
    }

    return selectedArticles
}