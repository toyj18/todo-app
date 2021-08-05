<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <div v-if="showUpdateTask">
            <UpdateTask 
            @add-update-task="$emit('update-task', newUpdateTask)"
            />
            
        </div>
        <div class="row p-3">
            <div class="col-6 text-left">
                <button class="btn btn-link" @click="$emit('toggle-archive', task.id)">Archive</button>
            </div>
            <div class="col-6 text-right">
                <i @click="onDelete(task.id)" class="fas fa-times text-right"></i>

            </div>
            <div class="col-10"><h3> {{ task.text }} </h3></div>
            
            <div class="col-10 pt-3">
                <p> 
                    {{ task.day }} 
                    <button v-on:click="onCompleted(task.id)" class="btn btn-link">
                        <span v-if="task.completed"> completed</span> 
                        <span v-else> Not completed</span>
                    </button>
                </p>
                
            </div>
            <div class="col-2">
                <button
                 type="submit" 
                 class="btn btn-light btn-outline-dark btn-block update-btn"
                 @click="onClick()"
                 v-bind:editTask="editTask"
                >
                    <div v-if="showUpdateTask">
                        <span>Close</span> 
                    </div>
                    <div v-else>
                        <span>Update</span> 
                    </div>
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>
import Button from './Button.vue'
import UpdateTask from './UpdateTask.vue'

export default {
    name: 'Task',
    data() {
        return {
            showUpdateTask: false,
            newUpdateTask: []
        }
    },

    components: {
        UpdateTask,
        Button,
    },

    props: {
        task: Object,
        text: String,
        color: String,
    },
    
    methods: {
        onDelete(id) {
            this.$emit('delete-task', id)
        },

        onCompleted(id) {
            this.$emit('change-completed', id)
        },

        onClick() {
            this.showUpdateTask = !this.showUpdateTask;
        },
    }
}
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .example {background: red;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .example {background: green;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .example {background: blue;}
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .example {background: orange;}
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    body {
        font-size: 500px;
    }
}

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

.update-btn {
    
}

</style>