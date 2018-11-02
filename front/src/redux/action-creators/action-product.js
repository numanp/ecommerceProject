import axios from 'axios'
import CREATE_PRODUCT from '../constants'

const createProduct = product => ({
    type: CREATE_PRODUCT,
    product,
  });

export const addProduct = (producto)=> (dispatch)=>{
    console.log('producto',producto)
    
    axios.post('/api/productos',producto)
    .then(res=>res.data)
    .then(data=>dispatch(createProduct(data)))
}