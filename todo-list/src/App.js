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
    editItem: false,
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
      editItem: false,
    })

    
  }

  handleDelete = (id) => {
    const filterItem = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterItem
    })
  }
  
  handleEdit = id =>{
    const filterItem = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filterItem,
      item: selectedItem.title,
      editItem: true,
      id:id
    })
  }
  
  clearList = () =>{
    this.setState({
      items: []
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
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem} 
              />
            <TodoList items={this.state.items}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            clearList={this.clearList}/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
