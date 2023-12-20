<template>
    <div class="container">
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div class="mb-4">
            <label for="username">username</label>
           </div>
            <div class="mb-4">
                <input id="username" type="text" v-model="username" required autofocus>
            </div>
            <div class="mb-4">
            <label for="email" >E-Mail Address</label>
            </div>
            <div class="mb-4">
                <input id="email" type="email" v-model="email" required>
            </div>
            <div class="mb-4">
            <label for="password">Password</label>
            </div>
            <div class="mb-4">
                <input id="password" type="password" v-model="password" required>
            </div>
            <div class="mb-4">
            <label for="password-confirm">Confirm Password</label>
            </div>
            <div class="mb-4">
                <input id="password-confirm" type="password" v-model="password_confirmation" required>
            </div>

            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        data(){
            return {
                username : "",
                email : "",
                password : "",
                password_confirmation : "",
                is_admin : null
            }
        },
        methods: {
            register(){
                const data = {
                
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    is_admin: this.is_admin
                }
                console.log("Data being sent:", JSON.stringify(data, null, 2));
                return new Promise((resolve, reject) => {
      axios.post('http://localhost:1337/api/auth/local/register', data)
      .then(response => {
        console.log("Response received:", JSON.stringify(response.data, null, 2));
        resolve(response.data);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
    });
                
            }
        }
    }
</script>
