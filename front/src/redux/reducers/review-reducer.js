import { ADD_REVIEW } from '../constants';

const reviewReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_REVIEW:
            return [...state, action.review]

        default: return state

    }
}

export default reviewReducer