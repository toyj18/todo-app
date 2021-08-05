<template>
    <div>
        <div  :key="task" v-for="task in pageOfItems">
            <div v-show="!task.archive">
                <Task 
                @toggle-reminder="$emit('toggle-reminder', task.id)" 
                @change-completed="$emit('change-completed', task.id)"
                @toggle-archive="$emit('toggle-archive', task.id)" 
                
                @delete-task="$emit('delete-task', task.id)" :task='task'
                @update-task="$emit('update-task', newUpdateTask)"
                @toggle-updade-task="$emit('toggle-updade-task', task.id)" :showUpdateTask='showUpdateTask'
                />
            </div>
        </div>



        <!-- <div class="card text-center m-3">
            <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3>
            <div class="card-body">
                <div v-for="item in pageOfItems" :key="item.id">{{item.name}}</div>
            </div>
            <div class="card-footer pb-0 pt-3">
                <jw-pagination :items="tasks" @changePage="onChangePage"></jw-pagination>
            </div>
        </div> -->
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
        pageOfItems: Array
    },


}
</script>
