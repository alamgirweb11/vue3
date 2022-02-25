<template>
  <div class="container">
   <h3 class="base-title">Props</h3>
   <greetings :age="age"></greetings>
  <user :name="name" :age="age" @age-update="updateAge" :changeAgeFunction="changeAgeFunction"></user>
 </div>
</template>

<script>
import Greetings from './components/Greetings.vue'
import User from './components/User.vue'

export default {
  name: 'App',
  data() {
    return {
              name: "Demo",
              age: 26
    }
  },
  components: {
    User,
    Greetings,
  },
  methods: {
      updateAge(i){
           this.age += i
      },
  changeAgeFunction(i){
        this.age += i
  }
  },
}
</script>

<style lang="scss" scoped>
  $base-width: 80%;
  $heading-color: #000;
  $color: #1b1a1a;
  $heading-font-size: 18px;
  @mixin heading-style(){
           color: $heading-color;
           font-size: $heading-font-size;
           text-align: left;
  }
   .container{
        width: $base-width;
        margin: 0 auto;
   }
   .base-title{
       @include heading-style();
   }
</style>
