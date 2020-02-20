import {FETCH_DATA, UPDATE_CATS, SET_ERROR} from '../actions';

const initialState = {
    cats: [],
    isFetchingData: false,
    error: ''
};


export const catsReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetchingData: true,
                cats: []
            };
            case UPDATE_CATS:
                return {
                    ...state,
                    cats: action.payload,
                    isFetchingData: false
                };
                case SET_ERROR:
                    return{
                        ...state,
                        isFetchingData: false,
                        error: action.payload
                    };
            default: 
                return state;
    }
};