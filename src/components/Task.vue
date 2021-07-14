<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <div class="row">
            <div class="col-10"><h3> {{ task.text }} </h3></div>
            <div class="col-2">
                <i @click="onDelete(task.id)" class="fas fa-times"></i>
                <Button 
                    @btn-click="$emit('toggle-updade-task', task.id)" 
                    :text="showUpdateTask ? 'Close' : 'update Task'" 
                    :color="showUpdateTask ? '#fff' : 'red'"/>
            </div>

            

        </div>
        <p> {{ task.day }} </p>
    </div>
</template>

<script>
import Button from './Button'
export default {
    name: 'Task',
    components: {
        Button,
    },
    props: {
        task: Object,
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-task', id)
        },
    }
}
</script>

<style scoped>
.task {
    background-color: #ececec;
    border-top: 1px solid #35495e;
    border-right: 1px solid #35495e;
    border-bottom: 1px solid #35495e;
    color:#35495e;
    border-left: 5px solid rgb(247, 18, 18);
    margin: 10px;
    box-shadow: 5px 3px rgba(7, 7, 7, 0.5);
}
.task h3 {
    text-align: left;
}
.task p {
    text-align: left;
}

.task i {
    text-align: right;
}

.fas {
    color: rgb(247, 18, 18);
}

.reminder {
    background-color: #ececec;
    border-top: 1px solid #35495e;
    border-right: 1px solid #35495e;
    border-bottom: 1px solid #35495e;
    color:#35495e;
    border-left: 5px solid #41b883;
    margin: 10px;
    box-shadow: 5px 3px rgba(7, 7, 7, 0.5);
}
.reminder h3 {
    text-align: left;
}
.reminder p {
    text-align: left;
}

.reminder i {
    text-align: right;
}

</style>