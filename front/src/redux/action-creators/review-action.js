import axios from 'axios'

import { ADD_REVIEW } from '../constants'


const saveReview = (review) => ({
    type: ADD_REVIEW,
    review
})

export const addReview = (value, user, product) => (dispatch) => {
    console.log("ACTION-VALUE", value, "ACTION-USER", user, "ACTION-PRODUCT", product)
    const reviewUser = {
        comentario: value,
        user: user,
        product: product
    }

    
    axios.post(`/api/reviews/${product.id}`, reviewUser)
    .then(res => console.log('AXIOSSSS' ,res.data))
    .then(res => {dispatch (saveReview(res.data))
    })

}

// .then(res => {dispatch (saveReview(value, user, product))