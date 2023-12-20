<template>
  <div class="user-page">
    <p>{{ token }}</p>
    <p v-if="info">Role: {{ roleText }}</p>
    <button @click="redirectToDashboardOrRequest">Go to {{ buttonText }}</button>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "About",
  data() {
    return {
      info: null,
      buttonText: "Dashboard",
    };
  },
  computed: {
    ...mapState(['token']),
    roleText() {
      if (this.info && this.info.role) {
        const roleName = this.info.role.name;
        if (roleName === 'Authenticated') {
          return 'You are an Authenticated User';
        } else if (roleName === 'Admin') {
          return 'You are an Admin';
        } else {
          return 'Unknown Role';
        }
      } else {
        return 'No Role Information';
      }
    },
  },
  methods: {
    megetUser() {
      axios
        .get("http://localhost:1337/api/users/me?populate=role", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          console.log(JSON.stringify(response.data, null, 2));
          this.info = response.data;
          this.setButtonText(); // Call this function to set the button text
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    },
    setButtonText() {
      // Set the button text based on the user's role
      if (this.info && this.info.role) {
        const roleName = this.info.role.name;
        if (roleName === 'Admin') {
          this.buttonText = 'Dashboard';
        } else {
          this.buttonText = 'Request';
        }
      }
    },
    redirectToDashboardOrRequest() {
      if (this.info && this.info.role) {
        const roleName = this.info.role.name;
        if (roleName === 'Admin') {
          // Redirect to the dashboard route for admins
          this.$router.push('/dashboard');
        } else {
          // Redirect to the request route for other roles
          this.$router.push('/request');
        }
      }
    },
  },
  created() {
    // Call the megetUser method when the component is created
    this.megetUser();
  },
};
</script>
