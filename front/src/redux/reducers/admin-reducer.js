import { ADD_CATEGORY,CREATE_CATEGORY, EDIT_CATEGORY } from '../constants';

const initialState = {

};


///// ESTE ADMIN REDUCER TIENE LAS ACCIONES DE DIEGO

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                //PEGARLE A LA RUTA PARA AGREGAR CATEGORIA
            };
        
        case CREATE_CATEGORY:
            return {
                //PEGARLE A LA RUTA PARA CREAR CATEGORIA
            }
        
        case CREATE_PRODUCT:
        //TOMA action.product == PRODUCTO QUE VA A AGREGAR A LA DB
            return Object.assign({}, state, {
                product: action.product
            })
            
        case DELETE_USER:
            return{
                // PEGARLE A LA RUTA Y ELIMINAR USUARIO
            };
        case EDIT_CATEGORY:
            return{

            }   
        default:
            return state;
    }
};


