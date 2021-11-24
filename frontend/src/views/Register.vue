<template>
  <div class="register-form pt-3">    
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(registerUser)"
        class="mx-auto"
      >
        <div class="mb-3">
          <ValidationProvider
            name="Name"
            rules="required"
            v-slot="{ errors }"
          >
            <label
              for="input-name"
              class="form-label"
            >
              Name
            </label>
            <input
              id="input-name"
              type="text"
              class="form-control"
              v-model="name"
            >
            <span class="notif">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
        </div>
        <div class="mb-3">
          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <label
              for="input-email"
              class="form-label"
            >
              Email
            </label>
            <input
              id="input-email"
              type="email"
              class="form-control"
              v-model="email"
            >
            <span class="notif">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
        </div>
        <div class="mb-3">
          <ValidationProvider
            name="Username"
            rules="required"
            v-slot="{ errors }"
          >
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
            <span class="notif">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
        </div>
        <div class="mb-3">
          <ValidationProvider
            rules="required|confirmed:confirmation"
            v-slot="{ errors }"
          >
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
            <span class="notif">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
        </div>
        <div class="mb-3">
          <ValidationProvider
            v-slot="{ errors }"
            vid="confirmation"
          >
            <label
              for="password-confirmation"
              class="form-label"
            >
              Password Confirmation
            </label>
            <input
              id="password-confirmation"
              type="password"
              class="form-control"
              v-model="confirmation"
            >
            <span class="notif">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
        </div>
        <button
          type="submit"
          class="btn"
        >
          Register
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full';

export default {
  name: 'register',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmation: ''
    }
  },
  methods: {
    registerUser () {
      this.$store.dispatch('registerUser', {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        confirm: this.confirmation
      })
      .then(() => {
        this.$router.push({ name: 'login-page' })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
.register-form {
  form {
    max-width: 500px;
    button {
      background-color: #55828B;
      color: white
    }
    button:hover{
      background-color: #87BBA2;
    }    
    span.notif {
      color: red;
      font-size: 13px;
    }
  }
}
</style>
