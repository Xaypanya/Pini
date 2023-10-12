<template>
     <header>
      <img src="./assets/pini.png" alt="pini logo"/>
      <h1>Pini Tasks</h1>
     </header>

     <!-- new task form  -->
     <div class="new-task-form">
        <TaskForm/>
     </div>

     <!-- filter  -->
     <nav class="filter">
        <button @click="filter = 'all'">All tasks</button>
        <button @click="filter = 'favs'">Fav tasks</button>
     </nav>

     <!-- task list  -->
     <div class="task-list" v-if="filter === 'all'">
      <p>You have {{taskStore.tasks.length}} favs left to do</p>
        <div :key="indexx" v-for="(task, indexx) in taskStore.tasks">
             <TaskDetails :task="task"/>
        </div>
     </div>
       <!-- task list  -->
       <div class="task-list" v-if="filter === 'favs'">
        <p>You have {{taskStore.favsCount}} favs left to do</p>
        <div :key="indexx" v-for="(task, indexx) in taskStore.favs">
             <TaskDetails :task="task"/>
        </div>
     </div>

</template>

<script>
  import { ref } from 'vue'
  import TaskDetails from './components/TaskDetails.vue'
  import {useTaskStore} from './stores/TaskStore'
  import TaskForm from './components/TaskForm.vue'

  export default {
    components: { TaskDetails, TaskForm },
    setup() {
      const taskStore = useTaskStore()

      const filter = ref('all')

      return { taskStore, filter }
    }
  }
</script>

<style lang="scss" scoped>

</style>