<template>
  <section class="section">
     <Breadcrumb :breadcumbs="breadcumbs" />
     <hr>
    <h3 class="subtitle is-3">
      Penerimaan
    </h3>
    
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod accusamus corporis, tempora quia culpa soluta dolores perspiciatis tenetur perferendis beatae doloribus sit ipsum quam! Debitis vero assumenda aliquid sunt?
    </p>
  </section>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb';  
export default {
    components: {
      Breadcrumb,         
    },
    data() {
      return {
        breadcumbs: [{
          name: 'Home'
        },
          {
            name: 'Penerimaan'
          }
        ]
      }
    }, 
}
</script>

