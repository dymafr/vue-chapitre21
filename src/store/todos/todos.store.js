import mutations from './todos.mutations';
import actions from './todos.actions';
import getters from './todos.getters';

export default {
  namespaced: true,
  state: {
    todos: [{
      name: 'eat a pizza',
      done: false
    }, {
      name: 'work',
      done: false
    }]
  },
  getters,
  mutations,
  actions
}