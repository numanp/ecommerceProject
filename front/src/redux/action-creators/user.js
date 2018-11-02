
import axios from 'axios';

import { ADD_CATEGORY, CREATE_CATEGORY, CREATE_PRODUCT,DELETE_USER,EDIT_CATEGORY,} from '../constants';

const addCategory = category => ({
  type: ADD_CATEGORY,
  category,
});

const createCategory = category => ({
  type: CREATE_CATEGORY,
  category,
});



const deleteUser = user => ({
  type: DELETE_USER,
  user,
});

const editCategory = category => ({
  type: EDIT_CATEGORY,
  category,
});

