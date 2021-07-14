<template>
    <div class="row">
        <div class="col-8 offset-2 my-form">
            <form @submit="onSubmit">
        <div class="form-group">
            <label for="text">Add Task</label>
            <input type="text" v-model="text" class="form-control" id="text" name="text" placeholder="Add Task">
        </div>
        <div class="form-group">
            <label for="day">Date and Time</label>
            <input type="text" v-model="day" class="form-control" id="day" name="day" placeholder="Date & Time">
        </div>
        <div class="form-check">
            <input type="checkbox" v-model="reminder" class="form-check-input" name="reminder" id="remind">
            <label class="form-check-label" for="remind">Set Reminder</label>
        </div>
        <button type="submit" class="btn btn-primary">Save Task</button>
    </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddTask',  
        
        data() {
            return {
                text: '',
                day: '',
                reminder: false
            }
        },

        methods: {
            onSubmit(e) {
                e.preventDefault()

                if (!this.text) {
                    alert("PLease Add a Task")
                    return
                }

                const newTask = {
                    // id: Math.floor(Math.random() * 100000),
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder
                }

                this.$emit('add-task', newTask)

                this.text = '',
                this.day = '',
                this.reminder = false
            }
        },
    }
</script>

<style scoped>
    .my-form {
        border: 1px solid black;
    }
</style>