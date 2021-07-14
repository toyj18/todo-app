<template>
    <header>
        <h1>{{ title }}</h1>
        
        <Button 
        @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task'" 
        :color="showAddTask ? '#fff' : 'red'"/>
        
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
