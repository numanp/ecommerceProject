// import axios from 'axios';
import { ADD_TO_CART } from '../constants';
import store from '../store'

const addToCart = producto => ({
  type: ADD_TO_CART,
  payload: producto
})

// export const createPlaylist = name => dispatch =>
//   axios.post('/api/playlists', { name })
//     .then(res => res.data)
//     .then(playlist => {
//       dispatch(addPlaylist(playlist));
//       return playlist.id;
//     });


export const addToLocalStorage = producto => dispatch => {
  // var productos = JSON.parse(localStorage.getItem('carrito'))
  // console.log(localStorage.getItem('carrito'))
  // productos += producto  
  // localStorage.removeItem('carrito')
  localStorage.setItem('carrito', JSON.stringify(producto))
  dispatch(addToCart(producto))
}


// var list = JSON.parse(localStorage.getItem('list')
// list.push('<h2>David<h2>');
// localStorage.setItem('list', JSON.stringify(list));