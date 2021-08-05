<template>
    <div>
        <div class="my-form p-3">
            <form @submit="onSubmit">
                <div class="form-group">
                    <label for="email">Register Your Email</label>
                    <input
                    type="email"
                    v-model="email" 
                    class="form-control" 
                    id="email" 
                    name="email" 
                    placeholder="Enter Your Email">
                </div>
                <div class="form-group">
                    <label for="day">Date and Time</label>
                    <input
                    type="date" 
                    v-model="day" 
                    class="form-control" 
                    id="day" name="day" 
                    placeholder="Date and Time">
                </div>
                
                <button type="submit" class="btn btn-primary btn-block">Save Task</button> 
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegisterEmail',  
        
        data() {
            return {
                email: '',
                day: '',
                // reminder: false
            }
        },

        methods: {
            onSubmit(e) {
                e.preventDefault()

                if (!this.email) {
                    alert("Please enter your Email to login into this App")
                    return
                }

                const newEmail = {
                    // id: Math.floor(Math.random() * 100000),
                    email: this.email,
                    day: this.day,
                    // reminder: this.reminder
                }

                this.$emit('register-email', newEmail)

                this.email = '',
                this.day = ''
                // this.reminder = false
            }
        },
    }
</script>

<style scoped>
    /* .my-form {
        border: 1px solid black;
        border-radius: 5px;
    } */
</style>