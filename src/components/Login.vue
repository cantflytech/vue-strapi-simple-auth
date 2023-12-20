<template>
  <div class="container">
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <div class="row mb-4">
      <label>Email</label>
      </div>
      <div class="mb-4">
      <input required v-model="identifier" type="text" placeholder="Name" />
      </div>
      <div class="row mb-4">
      <label>Password</label>
      </div>
      <div class="mb-4">
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
     </div>
      
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
label{
  font-weight: bold;
    font-family: Arial, sans-serif;
}
input{
  align-items: center !important;
  width: 60% !important;
  padding:10px;
  border: none;
  
  background-color: #E8F0FE;

  border-radius: 10px !important;
}
</style>
<script>
export default {
  data() {
    return {
      identifier: identifier,
      password: password,
    };
  },
  methods: {
    login: function() {
      let identifier = this.identifier;
      let password = this.password;
      this.$store
        .dispatch("login", { identifier, password })
        .then(() => this.$router.push("/request"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
