<template>
  <div id="main-container">
    <Header />
    <div class="page-container">
      <router-view />      
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/layouts/components/Footer.vue'
import Header from '@/layouts/components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
#main-container > div {
  min-width: 600px;
}
.page-container {
  min-height: calc(100vh - 120px);
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
}
</style>
