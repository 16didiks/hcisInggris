<template>
  <nav class="breadcrumb  " aria-label="breadcrumbs">
    <ul>
      <li v-for="(breadcumb, index) in breadcumbs" :key="index">
        <nuxt-link to="">{{ breadcumb.name }}</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: ['breadcumbs']
  }
</script>
