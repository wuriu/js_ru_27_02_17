import {CHANGE_DATE_RANGE} from '../constants'

export default (dateRange = {from: null, to: null}, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_DATE_RANGE:
            return payload.dateRange
    }

    return dateRange
}