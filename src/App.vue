<template>
     <header>
      <img src="./assets/pini.png" alt="pini logo"/>
      <h1>Pini Tasks</h1>
     </header>

     <!-- task list  -->
     <div class="task-list" v-if="filter === 'all'">
        <p>all tasks</p>
        <div :key="indexx" v-for="(task, indexx) in taskStore.tasks">
             <TaskDetails :task="task"/>
        </div>
     </div>
       <!-- task list  -->
       <div class="task-list">
        <p>fav tasks</p>
        <div :key="indexx" v-for="(task, indexx) in taskStore.favs">
             <TaskDetails :task="task"/>
        </div>
     </div>

</template>

<script>
  import { ref } from 'vue'
  import TaskDetails from './components/TaskDetails.vue'
  import {useTaskStore} from './stores/TaskStore'

  export default {
    components: { TaskDetails },
    setup() {
      const taskStore = useTaskStore()

      const filter = ref('all')

      return { taskStore, filter }
    }
  }
</script>

<style lang="scss" scoped>

</style>