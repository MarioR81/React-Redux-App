import {GET_DATA, UPDATE_CATS} from '../actions';

const initialState = {
    cats: [],
    isFetchingData: false
};


export const catsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                isFetchingData: true
            };
            case UPDATE_CATS:
                return {
                    ...state,
                    cats: action.payload
                };
            default: 
                return state;
    }
};