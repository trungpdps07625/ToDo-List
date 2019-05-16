import React, {Component} from 'react';
import {TodoInput} from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id:uuid(),
    item: '',
  }

  handleChange = e => {
    this.setState({
      item: e.target.value  
    })
  }
  
  handleSubmit = e =>{
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updateItems = [...this.state.items,newItem]
    
    this.setState({
      items:updateItems,
      item:'',
      id: uuid(), 
    })

    
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} />
            <TodoList items={this.state.items}/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
