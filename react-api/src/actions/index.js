import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_CATS = 'UPDATE_CATS';
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});

    axios
    .get('https://cors-anywhere.herokuapp.com/https://httpcatsapi.herokuapp.com/api/httpcats/')
    .then(res => {
        console.log('axios', res);
        dispatch({type: UPDATE_CATS, payload: res.data})
    })
    .catch(err => {
        console.error('error from API', err)
        dispatch({type: SET_ERROR, payload: 'Error Fetching DATA from API'})
    });

};