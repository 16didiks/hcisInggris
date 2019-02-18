<template>
  <div>
    <Navbar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>

  import Navbar from './../components/Navbar'
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  Vue.use(VeeValidate);
  import swal from 'sweetalert';

  export default {
    components: {
      Navbar
    }
  }
</script>
