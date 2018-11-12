import { ADD_REVIEW, FETCH_REVIEWS } from '../constants';

const reviewReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_REVIEW:
            return [...state, action.review]
        case FETCH_REVIEWS:
            return [...state, action.reviews]

        default: return state

    }
}

export default reviewReducer