<template>
    <div>
        <div :key="email_list" v-for="email_list in emails">
            <Email 
            @delete-email="$emit('delete-email', email_list.id)" :email_list='email_list'
             />
        </div>
    </div>
</template>

<script>
import Email from './Email.vue'
export default {
    name: 'Emails',
    components: {
        Email,
    },
    emmit: ['delete-email'],

    props: {
        emails: Array
    },

}
</script>
