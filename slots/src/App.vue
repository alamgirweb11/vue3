<template>
 <div class="container">
   <div class="card-wrapper">
    <card cardHeader="Card Header1" cardFooter="Card Footer1">
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi dolor, alias iusto dicta illum vitae illo nesciunt magnam aliquid. Illum ipsa laboriosam nisi. Amet, libero. Nobis excepturi quisquam labore ullam fugiat laborum ratione sapiente corporis non unde molestias fugit obcaecati omnis, voluptas explicabo eos praesentium numquam quasi error delectus.</p>
    </card>
    <card cardHeader="Card Header2" cardFooter="Card Footer2"></card>
    <card cardHeader="Card Header3" cardFooter="Card Footer3"></card>
   </div>
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
     .card-wrapper{
                 display: flex;
                 justify-content: space-around;
          }

</style>
