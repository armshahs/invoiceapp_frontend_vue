<template>
    <div class="page-signup">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Sign up</h1>

                <form @submit.prevent="submitForm">

                    <div class="field">
                        <label>E-mail</label>
                        <div class="control">
                            <input class="input" name="username" type="email" v-model="username">
                        </div>
                    </div>

                    <div class="field">
                        <label>Password</label>
                        <div class="control">
                            <input class="input" name="password" type="password" v-model="password">
                        </div>
                    </div>

                    <div class="notification is-danger is-light" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">
                            {{ error }}
                        </p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-success">Sign up</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            password: '',
            errors: [],

        }
    },
    methods: {
        submitForm(e) {
            const formData = {
                username: this.username,
                password: this.password
            }
            
            // to clear the previous error message
            this.errors = []

            axios
                .post("/api/v1/users/", formData)
                .then(response => {
                    console.log(response)
                    
                    this.$router.push('/log-in')
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]} `)
                        }

                        console.log(JSON.stringify(error.response.data))
                    } else if (error.message) {
                        console.log(JSON.stringify(error.message))
                    } else {
                        console.log(JSON.stringify(error))
                    }
                })
        }
    },
}
</script>