<template>
    <header>
        <div class="row border-bottom border-dark my-5">
            <div class="col-10">
                <h1>{{ title }}</h1>
            </div>
            <div class="col-2">
                <Button 
                    @btn-click="$emit('toggle-add-task')" 
                    :text="showAddTask ? 'Close' : 'Add Task'" 
                    :color="showAddTask ? 'red' : 'blue'"
                />
            </div>
        </div>
        
    </header>
</template>
<script>
import Button from './Button.vue'
export default ({
    name: 'Header',
    props: {
        title: String, 
        showAddTask: Boolean,
    },
    components: {
     Button   
    }
})
</script>

<style scoped>

</style>
