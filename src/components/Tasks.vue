<template>
    <div>
        <div  :key="task" v-for="task in tasks">
            <Task 
            @toggle-reminder="$emit('toggle-reminder', task.id)" 
            @delete-task="$emit('delete-task', task.id)" :task='task'
            @toggle-updade-task="$emit('toggle-updade-task', task.id)" :showUpdateTask='showUpdateTask'
             />
        </div>
    </div>
</template>

<script>
import Task from './Task'
export default {
    name: 'Tasks',
    components: {
        Task,
    },
    emmit: ['delete-task', 'toggle-reminder', 'toggle-updade-task'],

    props: {
        tasks: Array
    },

}
</script>
