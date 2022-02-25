<template>
 <div class="container">
    <card cardHeader="Card Header" cardFooter="Card Footer"></card>
 </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
   $base-width: 80%;
   .container{
         width: $base-width;
         margin: 0 auto;
   }
</style>
