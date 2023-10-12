<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i @click="deleteTask(task.id)" class="material-icons">delete</i>
            <i @click="toggleFav(task.id)" class="material-icons" :style="`color: ${task.isFav? 'red': ''}`">favorite</i>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore'
    export default {
        props: ['task'],
        setup() {
            const taskStore = useTaskStore()

            const deleteTask = (id) => {
                if(!id) return
                taskStore.deleteTask(id)
            }

            const toggleFav = (id) => {
                if(!id) return
                taskStore.toggleFav(id)
            }

            return { taskStore, deleteTask, toggleFav}
        }
    }
</script>

