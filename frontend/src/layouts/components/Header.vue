<template>
  <nav>
    <div class="d-flex justify-content-between align-items-center h-100">
      <div>
        <h3 class="p-2 text-white fw-bold m-0">
          BeSmart
        </h3>
      </div>
      <div class="d-flex justify-content-center">
        <div class="p-2">
          <router-link :to = "{ name:'home-page' }">
            Beranda
          </router-link>
        </div>
        <div class="p-2">
          <router-link :to = "{ name:'book-page' }">
            Penyewaan
          </router-link>
        </div>
        <div class="p-2">
          <router-link :to = "{ name:'court-page' }">
            Ketersediaan Lapangan
          </router-link>
        </div>
        <div class="p-2">
          <router-link :to = "{ name:'facility-page' }">
            Fasilitas
          </router-link>
        </div>
        <div class="p-2">
          <router-link :to = "{ name:'event-page' }">
            Event
          </router-link>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <div
          v-if="accessToken==null"
          class="p-2"
        >
          <button
            type="button"
            class="btn btn-outline-warning"
            @click="changeRoute('login-page')"
          >
            Log In
          </button>      
        </div>
        <div
          v-if="accessToken==null"
          class="p-2"
        >
          <button
            type="button"
            class="btn btn-warning"
            @click="changeRoute('register-page')"
          >
            Sign Up
          </button>      
        </div>
        <div
          v-if="accessToken!==null"
          class="p-2"
        >
          <button
            type="button"
            class="btn btn-warning"
            @click="changeRoute('logout-page')"
          >
            Log Out
          </button>      
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'NavBar',
    computed: mapState(['accessToken']),
    methods: {
      changeRoute(name) {
        this.$router.push({
          name: name
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
nav {
  background-color: #3B6064;
  height: 70px;
  
  div:nth-child(1) {
    a {
      color: white;
      font-size: 15px;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
