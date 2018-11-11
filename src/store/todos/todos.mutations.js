export default {
  addTodo(state, payload) {
    state.todos = [ ...state.todos, payload ];
  },
  toggleTodo(state, payload) {
    state.todos[payload].done = !state.todos[payload].done
  },
  deleteTodo(state, payload) {
    state.todos.splice(payload, 1);
  }
}