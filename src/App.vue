<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <Header 
    @toggle-add-task="toggleAddTask()" 
    title="Task Tracker"
    :showAddTask="showAddTask" />


    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    
    <Tasks
     @toggle-reminder="toggleReminder"
     @delete-task="deleteTask" :tasks="tasks"
     @toggle-updade-task="toggleUpdateTask()" 
     :showUpdateTask="showUpdateTask"
     />

     <div v-if="showUpdateTask">
      <UpdateTask @add-update-task="addUpdateTask" />
    </div>

    
    <Footer />

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import UpdateTask from './components/UpdateTask.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
    UpdateTask,
    Footer,
    
  },

  data() {
    return {
      tasks: [],
      showAddTask: false,
      showUpdateTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },

    toggleUpdateTask() {
      this.showUpdateTask = !this.showUpdateTask
    },

    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()
      
      this.tasks = [...this.tasks, data]
    },

    async deleteTask(id) {
      if (confirm('Are you sure')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })
        
        res.status === 200
          ? (this.tasks = this.tasks.filter(
          (task) => task.id !== id)) 
          : alert('Error deleting task')
      }
    },

    async addUpdateTask(id) {
      const taskToUpdate = await this.fetchTask(id)
      const updTask = {...taskToUpdate, text:
      taskToToggle.text}
      const res = await fetch(`api/tasks${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()
      
      this.tasks = [...this.tasks, data]
    },

    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder:
      !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask),
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) =>
        task.id === id ?  { ...task, reminder: data.reminder
        } : task)
    },

    async fetchTasks() {
      const res = await fetch('api/tasks')

      const data = await res.json()

      return data
    },

    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json()

      return data
    }
  },

  async created() {
    this.tasks = await this.fetchTasks()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  background-color: #35495e;
  color:#fff;
  border: 2px solid #41b883;
  width: 20vw;
  border-radius: 5px;
  margin: 3px;
}

.btn:hover {
  background-color: #41b883;
}
</style>
