<template>
  <div class="login-form">
    <div
      v-if="wrongCred"
      class="alert alert-warning alert-dismissible fade show my-2"
      role="alert"
    >
      Wrong credentials entered!. Please enter your correct details.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        @click="wrongCred = !wrongCred"
        aria-label="Close" />   
    </div>
    <form
      @submit.prevent="loginUser"
      class="my-3 mx-auto"
    >
      <div class="mb-3">
        <label
          for="input-username"
          class="form-label"
        >
          Username
        </label>
        <input
          id="input-username"
          type="text"
          class="form-control"
          v-model="username"
        >
      </div>
      <div class="mb-3">
        <label
          for="input-password"
          class="form-label"
        >
          Password
        </label>
        <input
          id="input-password"
          type="password"
          class="form-control"
          v-model="password"
        >
      </div>
      <button
        type="submit"
        class="btn"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {
      username: '',
      password: '',
      wrongCred: false // activates appropriate message if set to true
    }
  },
  methods: {
    loginUser () { // call loginUSer action
      this.$store.dispatch('loginUser', {
        username: this.username,
        password: this.password
      })
      .then(() => {
        this.wrongCred = false
        this.$router.push({ name: 'home-page' })
      })
      .catch(err => {
        console.log(err)
        this.wrongCred = true // if the credentials were wrong set wrongCred to true
      })
    }
  }
}
</script>

<style lang="scss">
.login-form {
  form {
    max-width: 500px;
    button {
      background-color: #55828B;
      color: white
    }
    button:hover{
      background-color: #87BBA2;
    }    
  }
}
</style>
