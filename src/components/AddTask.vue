<template>
    <div class="row">
        <div class="col-8 offset-2 my-form p-4">
            <form @submit="onSubmit">

                <div class="form-group">
                    <label for="text">Add Task</label>
                    <input
                    type="text"
                    v-model="text" 
                    class="form-control" 
                    id="text" 
                    name="text" 
                    placeholder="Add Task">
                </div>

                <div class="form-group">
                    <label for="day">Date and Time</label>
                    <input
                    type="datetime-local" 
                    v-model="day" 
                    class="form-control" 
                    id="day" name="day" 
                    placeholder="Date & Time">
                </div>

                <div class="form-check my-2">
                    <input
                    type="checkbox" 
                    v-model="reminder" 
                    class="form-check-input mx-2" 
                    name="reminder" 
                    id="remind">
                    <label class="form-check-label mx-3 px-5" for="remind">Set Reminder</label>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Save Task</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddTask',
        props: ['edittask'],
        
        data() {
            return {
                text: '',
                day: '',
                reminder: false,
                completed: false,
                archive: false,
                edit: false
            }
        },

        methods: {
            onSubmit(e) {
                e.preventDefault()
                if (this.edit === false){
                    if (!this.text) {
                        alert("Please Add a Task")
                        return
                    }

                    const newTask = {
                        // id: Math.floor(Math.random() * 100000),
                        text: this.text,
                        day: this.day,
                        reminder: this.reminder,
                        completed: this.completed,
                        archive: this.archive          
                    }

                    this.$emit('add-task', newTask)
                

                    this.text = '',
                    this.day = '',
                    this.reminder = false
                }else{
                    //edit Task
                    const newUpdateTask = {
                        id: this.id,
                        text: this.text,
                        day: this.day,
                        reminder: this.reminder
                        
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-task-event', newUpdateTask);
                    // clear input field
                    this.text = '',
                    this.day = '',
                    this.reminder = false
                    this.edit = false;
                }
            }
        },
        watch: {
            editTask: {
                handler() {
                    this.id = this.editTask.id;
                    this.text = this.editTask.text;
                    this.day = this.editTask.day;
                    this.reminder = this.editTask.reminder;
                    this.edit = true
                },
                deep: true
            },
            title:{
                handler(){
                    if(this.text === '' || this.day === ''){
                        this.edit = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .my-form {
        border: 1px solid black;
    }
</style>