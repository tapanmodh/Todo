<template>
  <div style="margin-left: 10px;" id="todo-list">
    <h1>{{ header }}</h1>
    <ul>
      <li v-for="todo of ToDos" v-bind:key="todo.id">
        <div>
          <label>
            <input
              type="checkbox"
              name="checkbox"
              id="todo.Name"
              :checked="todo.IsCompleted"
              @click="completedToggle(todo)"
            />
            <span></span>
          </label>
          <div class="data-container">
            <img style="float:right;" @click="deleteItem(todo)" src="../assets/trash.svg" />
            <h4>{{ todo.Name }}</h4>
          </div>
        </div>
      </li>
    </ul>
    <TypesComponent v-bind:isRadio="false"/>
    <router-link to="/create" class="float">
      <i class="float-image">
        <img src="../assets/plus.svg" />
      </i>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TypesComponent from "./TypesList.vue";
import store from "../store";
import ToDoModel from "../models/ToDoModel";

@Component({
  components: { TypesComponent }
})
export default class TodoList extends Vue {
  private todos: Array<ToDoModel>;
  
  constructor() {
    super();
    this.todos = [];
  }

  header = "Today";
  todoList = [
    { id: 1, text: "Start making a Presentation" },
    { id: 2, text: "Pay for rent" },
    { id: 3, text: "Buy a milk" },
    { id: 4, text: "Don't forget to pick up michel from school" },
    { id: 5, text: "Buy a chocolate for Charlotte" }
  ];

  get ToDos(): ToDoModel[] {
    let todos = this.$store.state.todos; //this.todos
    return todos;
  }

  deleteItem(todoModel: ToDoModel) {
    console.log("tapan, delete:", todoModel.Name);
    this.$store.dispatch("deleteToDo", todoModel);
  }

  completedToggle(todoModel: ToDoModel) {
    console.log("tapan, toggle:", todoModel.Name + ":" + todoModel.IsCompleted);
    this.$store.dispatch("completedToggle", todoModel);
  }
}
</script>

<style scoped>
h1 {
  text-align: start;
  margin-left: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.float {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 6px 10px 0 #666;
  transition: all 0.1s ease-in-out;
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.float-image {
  top: 55%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
span {
  width: 31px;
  display: block;
  position: relative;
  cursor: pointer;
  float: left;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
input[type="checkbox"] {
  visibility: hidden;
  position: absolute;
}
input[type="checkbox"] ~ span {
  cursor: pointer;
  width: 31px;
  height: 31px;
  display: inline-block;
  background-size: 31px 31px;
  background-repeat: no-repeat;
  vertical-align: middle;
  background-image: url("../assets/checkbox.svg");
}
input[type="checkbox"]:checked ~ span {
  background-image: url("../assets/checkbox-checked.svg");
}
.data-container {
  border-bottom: 1px solid #d3d3d3;
  margin-left: 45px;
  text-align: start;
}
</style>