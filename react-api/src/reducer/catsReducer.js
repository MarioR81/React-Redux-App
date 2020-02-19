import {GET_DATA} from '../actions';

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
            default: 
                return state;
    }
};