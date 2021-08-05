<template>
  <div id="app">
    <div>
      <div v-if="!emails.length">
        <div class="container-fluid">
          <div class="row my-5 py-5">
            <div class="col-8 mx-auto my-5 border rounded rounded-lg">
              <h4 class="text-center py-3">Please Enter a valid Email to access this application</h4>
              <RegisterEmail @register-email="registerEmail" /> 
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="container-fluid">
          <div class="row">
            <div class="col-8 m-auto">
              <Emails
                @delete-email="deleteEmail" 
                :emails="emails"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-8 m-auto">
              <Header 
                @toggle-add-task="toggleAddTask()" 
                title="Task Tracker"
                :showAddTask="showAddTask" 
              />
            </div>
            <div class="col-8 m-auto">
              <div v-if="showAddTask">
                <AddTask @add-task="addTask" />
              </div>
              <form action="">
                <input type="text" name="josh1" v-model="josh1">
                <input type="datetime-local" name="josh2" v-model="josh2">
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-8 m-auto offset-2">
              <Tasks
                @toggle-reminder="toggleReminder"
                @change-completed="toggleCompleted"
                @toggle-archive="toggleArchive"
                @delete-task="deleteTask" :pageOfItems="pageOfItems"
                @update-task="updateTask"
                @toggle-updade-task="toggleUpdateTask()" 
                :showUpdateTask="showUpdateTask"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-7 m-auto text-center">
              <div class="card-footer pb-0 pt-3">
                <jw-pagination :pageSize=2 :items="tasks" @changePage="onChangePage"></jw-pagination>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <SocialShare />
              <ContactUs />
            </div>
          </div>
        </div>

    
        <!-- <div v-if="showUpdateTask">
          <UpdateTask @add-update-task="addUpdateTask" />
        </div> -->

    
      <Footer />

      </div>
    </div>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import RegisterEmail from './components/RegisterEmail'
import Emails from './components/Emails'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import UpdateTask from './components/UpdateTask.vue'
import Footer from './components/Footer'
import JwPagination from 'jw-vue-pagination';
import SocialShare from './components/SocialShare.vue'
import ContactUs from './components/ContactForm.vue'


export default {
  name: 'App',

  data() {
    return {
      emails: [],
      tasks: [],
      pageOfItems: [],
      visibleTodos: [],
      showAddTask: false,
      showUpdateTask: false,
      josh1: "",
      josh2: ""
      // nextId: 13,
      // currentPage: 0,
      // pageSize: 3 
    }
    
  },

  components: {
    RegisterEmail,
    Emails,
    Header,
    Tasks,
    AddTask,
    UpdateTask,
    Footer,
    JwPagination,
    SocialShare,
    ContactUs,
  },

  beforeMount: function() {
    this.updateVisibleTodos();
  },

  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      

    },

    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },

    toggleUpdateTask() {
      this.showUpdateTask = !this.showUpdateTask
    },

    async registerEmail(email) {
      const res = await fetch('api/emails', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(email)
      })

      const data = await res.json()
      
      this.emails = [...this.emails, data]

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

    async deleteEmail(id) {
      if (confirm('Are you sure you want to log out')) {
        const res = await fetch(`api/emails/${id}`, {
          method: 'DELETE'
        })
        
        res.status === 200
          ? (this.emails = this.emails.filter(
          (email_list) => email_list.id !== id)) 
          : alert('Error deleting while Log out Users')
      }
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
          this.updateVisibleTodos()
      }
    },

    // async updateTask(task) {
    //   const res = await fetch(`api/tasks/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(task)
    //   })

    //   const data = await res.json()
      
    //   this.tasks = [...this.tasks, data]
    // },
   
    async updateTask(id) {
      const josh = "love you"
      const taskToUpdate = await this.fetchTask(id)
      const updTask = {...taskToUpdate, 
      text: newUpdateTask.text,
      day: newUpdateTask.day
      }
      
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask)
      })

      
      const data = await res.json()

      this.tasks = this.tasks.map((task) =>
        task.id === id ?  { ...task, 
        text: data.text,
        day: data.day
        } : task)
        this.josh1 = ""
        this.josh2 = ""
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

    async toggleCompleted(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, completed:
      !taskToToggle.completed}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask),
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) =>
        task.id === id ?  { ...task, completed: data.completed
        } : task)
    },

    async toggleArchive(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, archive:
      !taskToToggle.archive}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask),
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) =>
        task.id === id ?  { ...task, archive: data.archive
        } : task)
    },


    async fetchEmails() {
      const res = await fetch('api/emails')

      const data = await res.json()

      return data
    },

    async fetchEmail(id) {
      const res = await fetch(`api/emails/${id}`)

      const data = await res.json()

      return data
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
    this.emails = await this.fetchEmails()
    this.tasks = await this.fetchTasks()
    this.updateVisibleTodos()
    
  }
}
</script>

<style>
/* #app {
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
} */
</style>
