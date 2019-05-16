import React, { Component } from 'react'

export  class TodoInput extends Component {
// xem kĩ nha
  render() {

    const { item, handleChange , handleSubmit } = this.props; 
    return (
      <div className='card card-body my-3'>
        <form>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <i className="fa fa-book"></i>
              </div>
            </div>
            <input 
            type='text'
            className='form-control text-capitalize'
            placeholder='Add item'
            value={item}
            onChange={handleChange}></input>
          </div>
          <button onClick={handleSubmit} className='btn btn-block btn-primary mt-3'> add item </button>
        </form>
      </div>
    )
  }
}
