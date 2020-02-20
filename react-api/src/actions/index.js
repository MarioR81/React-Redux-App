import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const UPDATE_CATS = 'UPDATE_CATS';

export const getData = () => dispatch => {
    dispatch({type: GET_DATA});

    axios
    .get('https://cors-anywhere.herokuapp.com/https://httpcatsapi.herokuapp.com/api/httpcats/')
    .then(res => {
        console.log('axios', res);
        dispatch({type: UPDATE_CATS, payload: res.data})
    })
    .catch(err => console.error('error from API', err));

};