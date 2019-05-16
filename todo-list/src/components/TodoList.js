import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
  render() {
    const { items , handleDelete} = this.props;
    return (
      <div> 
        <ul className='list-group my-5'>
          <h3 className='text-capitalize text-center'>todo list</h3>
          {
            items.map(item => {
              return (<TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                />
            )})
            }
        </ul>
      </div>
    )
  }
}
