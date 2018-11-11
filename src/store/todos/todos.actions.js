export default {
  asyncAddTodo(context, payload) {
    setTimeout( () => {
      context.commit('addTodo', payload)
    }, 3000);
  }
}