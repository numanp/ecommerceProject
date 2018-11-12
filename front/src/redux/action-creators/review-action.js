import axios from 'axios'

import { ADD_REVIEW, FETCH_REVIEWS } from '../constants'


const saveReview = (review) => ({
    type: ADD_REVIEW,
    review
})

// const getReview = (review) => ({
//     type: FETCH_REVIEW,
//     review
// })

export const addReview = (value, user, product, estrellas) => (dispatch) => {
    // console.log("ACTION-VALUE", value, "ACTION-USER", user, "ACTION-PRODUCT", product)
    const reviewUser = {
        comentario: value,
        user: user,
        product: product,
        estrellas: estrellas
    }
    axios.post(`/api/reviews/${product.id}`, reviewUser)
        .then(res => {
            dispatch(saveReview(value, user, product, estrellas))
        })

}

export const getReviews = (reviews) => ({
    type: FETCH_REVIEWS,
    reviews
})

/* export const fetchReviews = (idProduct) => (dispatch) => {

    axios.get(`/api/reviews/${idProduct}`)
        .then(res => {
            console.log(res.data)
            dispatch(getReviews(res.data))
        })
} */

export function fetchReviews(idProduct) {
    return function (dispatch) {
        return axios.get(`/api/reviews/${idProduct}`)
            .then(res => {
                dispatch(getReviews(res.data))
            })
    };
}


