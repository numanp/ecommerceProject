import { ADD_REVIEW } from '../constants'

const saveReview = (review) => ({
    type: ADD_REVIEW,
    review
})


export const addReview = (value) => (dispatch) => {
    dispatch (saveReview(value))
}
