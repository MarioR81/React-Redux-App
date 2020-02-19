import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {catsReducer as reducer} from './reducer/catsReducer';

import CatForm from './components/CatForm';
import {Provider} from 'react-redux';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>
          <h2>App</h2>
          <h2>Meow!</h2>
        <CatForm />
      </div>
    </Provider>
  );
}

export default App;
