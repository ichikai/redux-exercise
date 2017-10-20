import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ui>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        // Todo なんだっけ
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ui>
);

TodoList.propTypes = {
  // Todo ??
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;