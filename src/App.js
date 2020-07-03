import React from 'react';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './components/reducer/rootReducer'
import Category from './components/Category';




function App() {
  const store=createStore(rootReducer)
  return (
    <div >
       <Provider store={store} >
      <Category/>
     </Provider>
    
    </div>
  );
}

export default App;
