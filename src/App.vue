<template>
  <div id="app" class="container p-5">
    <h4>Ajouter une todo</h4>
    <hr class="my-4" />
    <div class="d-flex mb-4">
      <input v-model="todo" type="text" class="form-control mr-5" />
      <button class="btn btn-primary" @click="addTodo({ name: todo, done: false })">Ajouter</button>
      <button class="btn btn-danger" @click="asyncAddTodo({ name: todo, done: false })">Ajouter</button>
    </div>
    <div class="card">
      <div class="card-header d-flex flex-row justify-content-between">
        <span>Todo list</span>
        <span>{{ todosLength }}</span>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li
            @click="toggleTodo(index)"
            v-for="(todo, index) in todos"
            :key="todo.name"
            class="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action"
          >
            <span>{{ todo.name }}</span>
            <span>
              <input class="mx-3" :checked="todo.done" type="checkbox" />
              <button class="btn btn-sm btn-danger" @click="deleteTodo(index)">delete</button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {
      todo: ""
    };
  },
  computed: {
    ...mapState("todos", ["todos"]),
    todosLength() {
      return this.$store.getters["todos/todosLength"];
    }
  },
  methods: {
    ...mapMutations("todos", ["addTodo", "toggleTodo", "deleteTodo"]),
    asyncAddTodo(payload) {
      this.$store.dispatch("todos/asyncAddTodo", payload);
    }
  }
};
</script>

<style>
</style>
