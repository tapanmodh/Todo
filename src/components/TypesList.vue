<template>
  <div style="margin-left: 10px;margin-right: 10px;" id="type-list">
    <h3>{{ title }}</h3>
    <ul>
      <li
        class="type"
        v-for="type in typeList"
        :style="{ backgroundColor: type.bgColor }"
        v-bind:key="type.id"
      >
        <div v-bind:style="{ 'color': type.titleColor }">{{ type.text }}</div>
        <div
          class="type-task"
          v-if="type.task>1"
          :style="{ color: type.taskColor }"
        >{{ type.task}} tasks</div>
        <div class="type-task" v-else v:style="{ color: type.taskColor }">{{ type.task}} task</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TypesList extends Vue {
  title = "Lists";
  typeList = [
    {
      id: 1,
      text: "Inbox",
      task: 1,
      bgColor: "#ebeff5",
      titleColor: "#252A31",
      taskColor: "#a9a9a9"
    },
    {
      id: 2,
      text: "Work",
      task: 2,
      bgColor: "#66dda5",
      titleColor: "#ffffff",
      taskColor: "#ffffff"
    },
    {
      id: 3,
      text: "Shopping",
      task: 3,
      bgColor: "#f2606f",
      titleColor: "#ffffff",
      taskColor: "#d3d3d3"
    },
    {
      id: 4,
      text: "Family",
      task: 1,
      bgColor: "#fee66b",
      titleColor: "#252A31",
      taskColor: "#a9a9a9"
    },
    {
      id: 5,
      text: "Personal",
      task: 4,
      bgColor: "#b57cfc",
      titleColor: "#ffffff",
      taskColor: "#ffffff"
    }
  ];
}
</script>

<style scoped lang="scss">
h3 {
  text-align: left;
  color: #a9a9a9;
}
ul {
  list-style-type: none;
  padding: 0;
}
.type {
  text-align: left;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
}
.type-title {
  font-size: 13px;
  padding-top: 5px;
}
.type-task {
  font-size: 13px;
  padding-top: 5px;
}
</style>