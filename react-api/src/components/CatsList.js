import React from "react";
import {connect} from 'react-redux';

const CatsList = props => {
    // console.log('Cats list', props)
    return <>
    {props.error ? <div className='error'>{props.error}</div> : props.cats.map(cat => (<img className='catCard' src={cat.imageurl}/>
    ))}
    </>
}

const mapStateToProps = state => {
    // console.log('cats list', state);
    return {
        cats: state.cats,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(CatsList);