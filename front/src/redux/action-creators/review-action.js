import axios from 'axios'

import { ADD_REVIEW } from '../constants'


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
    .then(res => {dispatch (saveReview(value, user, product, estrellas))
    })

}

// export const fetchReview = () => (dispatch) => {
//     axios.get(`/api/reviews/${this.props.producto.id}`)
//     .then(res => dispatch(getReview(res.data)))
//     // falta hacer el reducer!!!!!!!!!
// }
