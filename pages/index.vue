<template>
 <div>
   Welcome to HCIS
 </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    middleware: ['auth'],
    created() {
      // this.getProvinces();
      //   console.log(this.provinces);         
    },
    data() {
      return {
        province: '',
        provinces: [],
      }
    },

    methods: {
      // getProvinces() {
      //   this.provinces = [];
      //   this.$axios.get('/province/getall')
      //     .then(response => {
      //       console.log(response);

      //       this.provinces = response.data.data;
      //        console.log(this.provinces);    
      //     })
      //     .catch(e => {
      //       console.log(e);
      //     });
      // },
    }

  }

</script>

<style>

</style>
