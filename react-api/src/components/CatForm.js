import React from 'react';
import {connect} from 'react-redux';

import {getData} from '../actions';

const CatForm  = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
    <>{props.isFetchingData ? (
    <div className='catButton'>We are fetching Data</div>
     ) : (
    <button onClick={handleGetData} className='catForm'>Bring out the Cats!</button>
     )}
    </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};


export default connect(mapStateToProps, {getData})(CatForm);