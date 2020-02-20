import React from "react";
import {connect} from 'react-redux';

const CatsList = props => {
    console.log('Cats list', props)
    return <>
    {props.cats.map(cat => (<div>{cat}</div>
    ))}
    </>
}

const mapStateToProps = state => {
    return {
        cats: state.cats
    };
};

export default connect(mapStateToProps, {})(CatsList);