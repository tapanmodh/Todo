import Vue from 'vue'
import Vuex from 'vuex'
import ToDoModel from '@/models/ToDoModel'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: Array<ToDoModel>()
    },

    mutations: {
        addToDo(state, todoModel: ToDoModel) {
            state.todos.push(todoModel)
        },
        deleteToDo(state, todoModel: ToDoModel) {
            const index = state.todos.map(item => item.Name).indexOf(todoModel.Name);
            state.todos.splice(index, 1);
        },
        completedToggle(state, todoModel: ToDoModel) {
            const index = state.todos.map(item => item.Name).indexOf(todoModel.Name);
            todoModel.IsCompleted = !todoModel.IsCompleted
            state.todos[index] = todoModel
        }
    },

    actions: {
        addToDo(context, todoModel: ToDoModel) {
            return new Promise((resolve, reject) => {
                context.commit('addToDo', todoModel)
                resolve()
            })
        },
        deleteToDo(context, todoModel: ToDoModel) {
            return new Promise((resolve, reject) => {
                context.commit('deleteToDo', todoModel)
                resolve()
            })
        },
        completedToggle(context, todoModel: ToDoModel) {
            return new Promise((resolve, reject) => {
                context.commit('completedToggle', todoModel)
                resolve()
            })
        },
    }
})