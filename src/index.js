import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createStore } from './store'

const store = createStore(todosReducer);

export function todosReducer(state=[], action){
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
}

function render(){
  ReactDOM.render(<App store={store}/>, document.getElementById('container'));
}

render();

store.subscribe(render);
