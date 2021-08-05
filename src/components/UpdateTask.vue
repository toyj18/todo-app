<template>
    <div class="row">
        <div class="col-8 offset-2 my-form">
            <form @submit="onSubmitUpdate">
        <div class="form-group">
            <label for="text">Add Task</label>
            <input
             type="text" 
             class="form-control" 
             id="text" 
             name="text"
             v-model="text" 
             placeholder="Add Task"
            >
        </div>
        <div class="form-group">
            <label for="day">Date and Time</label>
            <input
             type="datetime-local" 
             class="form-control" 
             id="day" 
             name="day" 
             v-model="day"
             placeholder="Date & Time"
            >
        </div>
        <!-- <div class="form-check">
            <input type="checkbox" v-model="reminder" class="form-check-input" name="reminder" id="remind">
            <label class="form-check-label" for="remind">Set Reminder</label>
        </div> -->
        <button type="submit" class="btn btn-primary">Save Task</button>
    </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UpdateTask',
        
        data() {
            return {
                id: task.id,
                text: text,
                day: day,
                // reminder: false
            }
        },

        methods: {
        
            onSubmitUpdate(e) {
                e.preventDefault()

                const newUpdateTask = {
                    id:this.id,
                    text: this.text,
                    day: this.day,
                    // reminder: this.reminder
            
                }

                this.$emit('add-update-task', newUpdateTask)

                this.text = '',
                this.day = ''
                // this.reminder = false
            }
        },
        // watch: {
        //     editTask: {
        //         handler() {
        //             this.title = this.editTask.title;
        //             this.day = this.editTask.day;
        //             this.edit = true
        //         },
        //         deep: true
        //     },
        //     title:{
        //         handler(){
        //             if(this.title === '' || this.day === ''){
        //                 this.edit = false;
        //             }
        //         }
        //     }
        // }
    }
    
</script>

<style scoped>
    .my-form {
        border: 1px solid black;
    }
</style>