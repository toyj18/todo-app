<template>
    <div>
        <div class="row">
            <div class="col-12 mx-auto my-5 p-0 email-card">
                <div class="row my-5">
                    <div class="col-8">
                        <h3 class="text-center"> {{ email_list.email }} </h3>
                    </div>
                    <div class="col-4">
                        <button @click="onDelete(email_list.id)" class="btn btn-danger">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Email',
    components: {
      
    },
    props: {
        email_list: Object,
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-email', id)
        },
    }
}
</script>

<style scoped>
.email-card {
    background-color: rgb(228, 222, 222);
    border: 3px solid gray;
    border-radius: 5px;
    box-shadow: 10px 10px rgba(189, 207, 189, 0.5);
}
</style>