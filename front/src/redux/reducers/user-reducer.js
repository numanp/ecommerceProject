// import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, ADD_PLAYLIST, ADD_SONG_TO_PLAYLIST } from '../constants';

const initialState = {
    reviews: []
//   list: [],
//   selected: {},
};

// Add_Review
// Fetch_Orders_User
// Login  
// Logout
// Sign_Up

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return {
        ...state,
        reviews: action.playlists,
      };
    default:
      return state;
  }
};