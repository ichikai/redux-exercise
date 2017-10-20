import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      {/* Todo ?? */}
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        {/* Todo ?? */}
        <input ref={node => {
          input = node;
        }} />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
};
{/* Todo ?? */}
AddTodo = connect()(AddTodo);

export default AddTodo;
