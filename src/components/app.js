import React from 'react';
// import { todosReducer } from '../reducers/todos_reducer';
// import { createStore } from '../store'


class App extends React.Component {
  constructor(props){
    super(props)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler(event){
    event.preventDefault()
      let action = {type: 'ADD_TODO', payload: this.refs.ourMessage.value};
      this.props.store.dispatch(action);
      this.refs.ourMessage.value = ""
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input ref='ourMessage'/>
            <button> Add To List </button>
            <ul>
              {this.props.store.getState().map(todo => {return <li>{todo}</li>})}
            </ul>
            </form>
      </div>
    )
  }
  }

export default App;
