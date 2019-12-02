<template>
  <div>
    <button class="btn cancel" @click="cancel">Cancel</button>
    <button class="btn done" @click="add">Done</button>
    <div id="create-item" class="create-item">
      <!-- <img class="create-checkbox" src="../assets/checkbox.svg" />-->
      <label>
        <input type="checkbox" name="checkbox" id="checkbox" v-model="model.IsCompleted" />
        <span></span>
      </label>
      <textarea class="create-text" v-model="model.Name" placeholder="What do you want to do?"></textarea>
    </div>
    <TypesComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TypesComponent from "./TypesList.vue";
import router from "../router";
import store from "../store";
import ToDoModel from "../models/ToDoModel";

@Component({
  components: { TypesComponent }
})
export default class CreateTodo extends Vue {
  private todos: Array<ToDoModel>;
  private model: ToDoModel;

  constructor() {
    super();
    this.todos = [];
    this.model = new ToDoModel();
  }

  get ToDos(): ToDoModel[] {
    let todos = this.$store.state.todos; //this.todos
    return todos;
  }

  cancel() {
    router.go(-1);
  }

  add() {
    //console.log('tapan:',this.model.Name)
    if (this.ToDos.some(x => x.Name == this.model.Name)) {
      //this.message = `ToDo item ${this.model.Name} already exists in your list`;
      return;
    }

    console.log("tapan:isCompleted", this.model.IsCompleted);
    this.$store
      .dispatch("addToDo", this.model)
      .then(() => {
        setTimeout(() => {
          console.log("tapan:", this.$store.state.todos.length);
        }, 1500);
      })
      .catch(error => {
        console.error(error);
      });

    //this.todos.push(this.model);
    this.model = new ToDoModel();
  }
}
</script>

<style scoped lang="scss">
.btn {
  background-color: Transparent;
  background-repeat: no-repeat;
  color: blue;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  margin-top: 10px;
}
.cancel {
  float: left;
  text-align: left;
}
.create-item {
  width: 100%;
  padding-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
}
.done {
  float: right;
  font-weight: bold;
}
/* .create-checkbox {
  width: 20px;
  height: 20px;
  vertical-align: top;
  float: left;
} */
span {
  width: 20px;
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
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  vertical-align: middle;
  background-image: url("../assets/checkbox.svg");
}
input[type="checkbox"]:checked ~ span {
  background-image: url("../assets/checkbox-checked.svg");
}
.create-text {
  width: 85%;
  float: left;
  height: 150px;
  outline-width: 0;
  border: none;
  border-color: transparent;
  font-size: 16px;
  margin-left: 5px;
}
</style>