<template>
 <div class="container">
   <div class="card-wrapper">
    <card> 
       <template v-slot:card-header>
           <h4>Card Header-01</h4>
       </template>
       <template v-slot:card-body>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis voluptates ad mollitia illo odit neque corrupti. Non culpa illum a, dignissimos sunt incidunt numquam natus minima nulla exercitationem distinctio aspernatur quisquam laboriosam eaque enim ab obcaecati esse debitis! Dicta ea esse ab, sit incidunt vel optio iure quia saepe?</p>
       </template>
       <template v-slot:card_footer>
          <h4>Card Footer-01</h4>
       </template>
    </card>
    <card> 
       <template v-slot:card-header>
           <h4>Card Header-02</h4>
       </template>
       <template v-slot:card-body>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis voluptates ad mollitia illo odit neque corrupti. Non culpa illum a, dignissimos sunt incidunt numquam natus minima nulla exercitationem distinctio aspernatur quisquam laboriosam eaque enim ab obcaecati esse debitis! Dicta ea esse ab, sit incidunt vel optio iure quia saepe?</p>
       </template>
       <template v-slot:card_footer>
          <h4>Card Footer-02</h4>
       </template>
    </card>
    <card> 
       <template v-slot:card-header>
           <h4>Card Header-03</h4>
       </template>
       <template v-slot:card-body>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis voluptates ad mollitia illo odit neque corrupti. Non culpa illum a, dignissimos sunt incidunt numquam natus minima nulla exercitationem distinctio aspernatur quisquam laboriosam eaque enim ab obcaecati esse debitis! Dicta ea esse ab, sit incidunt vel optio iure quia saepe?</p>
       </template>
       <!-- <template v-slot:card_footer>
          <h4>Card Footer-03</h4>
       </template> -->
    </card>
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
