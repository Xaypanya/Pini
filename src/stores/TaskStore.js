import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "play Gloomhaven", isFav: true},
        ],
    }),
    getters: {
        favs() {
            return this.tasks.filter(item => item.isFav)
        },
        favsCount() {
            return this.favs.length
        }
    },
    actions: {
        addTasks(task){
            this.tasks.push(task)
        },
        deleteTask(taskID){
            this.tasks = this.tasks.filter((task)=> task.id !== taskID)
        },
        toggleFav(taskID){
            const task = this.tasks.find((task)=> task.id === taskID)
            task.isFav = !task.isFav
        }
    },
})