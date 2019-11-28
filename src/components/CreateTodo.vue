<template>
  <div>
    <button class="btn cancel" @click="cancel">Cancel</button>
    <button class="btn done" @click="done">Done</button>
    <div id="create-item" class="create-item">
      <img class="create-radio" src="../assets/checkbox.svg" />
      <textarea class="create-text" placeholder="What do you want to do?"></textarea>
    </div>
    <TypesComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TypesComponent from "./TypesList.vue";
import router from "../router";

@Component({
  components: { TypesComponent }
})
export default class CreateTodo extends Vue {
  cancel() {
    router.go(-1);
  }

  done() {
    router.go(-1);
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
.create-radio {
  width: 20px;
  height: 20px;
  vertical-align: top;
  float: left;
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