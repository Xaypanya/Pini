import { defineStore } from 'pinia'
import axios from 'axios'
const API_URL = 'http://localhost:3000/tasks'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    isLoading: true,
  }),
  getters: {
    favs() {
      return this.tasks.filter((item) => item.isFav)
    },
    favsCount() {
      return this.favs.length
    },
  },
  actions: {
    async getTasks() {
      try {
        const res = await axios.get(API_URL)
        const data = await res.data.reverse()

        this.tasks = data
        this.isLoading = false
      } catch (error) {
        console.log(`error->`, error)
        this.isLoading = false
      }
    },
    async addTasks(task) {
      try {
        await axios.post(API_URL, task)
        this.getTasks()
      } catch (error) {
        console.log(`error->`, error)
      }
    },
    async deleteTask(taskID) {
      try {
        //   this.tasks = this.tasks.filter((task)=> task.id !== taskID)
        await axios.delete(API_URL + `/${taskID}`)
        this.getTasks()
      } catch (error) {
        console.log(`error->`, error)
      }
    },
    async toggleFav(taskID) {
      try {
        const task = this.tasks.find((task) => task.id === taskID)
        task.isFav = !task.isFav

        await axios.put(API_URL + `/${taskID}`, task)
      } catch (error) {
        console.log(`error->`, error)
      }
    },
  },
})
