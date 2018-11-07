import axios from 'axios'

import { ADD_REVIEW } from '../constants'


const saveReview = (review) => ({
    type: ADD_REVIEW,
    review
})

export const addReview = (value, user) => (dispatch) => {
    const reviewUser = {
        value: value,
        user: user
    }

    
    axios.post('/api/reviews', reviewUser)
    .then(res => console.log('REVIEEEEEEEEEWWWWWWWWWWWWWW' ,res.data))
    // dispatch (saveReview(value))

}