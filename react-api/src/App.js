import React from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {catsReducer as reducer} from './reducer/catsReducer';

import CatsList from './components/CatsList';
import CatForm from './components/CatForm';
import {Provider} from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
          <h1>Meow!</h1>
        <CatForm />
        <br/>
        <CatsList />
      </div>
    </Provider>
  );
}

export default App;
