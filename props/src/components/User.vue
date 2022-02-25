<template>
  <div class="user-wrapper">
    <button class="age-increment-btn" @click="ageUpdate">Update Age</button>
    <button class="age-increment-btn" @click="changeAgeFunction(3)">Update Age CF</button>
     <h4>Your name is  {{  name }} and your are {{ age }} years old.</h4>
     <h5>Age double {{ ageDouble }}</h5>
  </div>
</template>

<script>
export default {
  name: 'UserComponent',
  props: {
      age: {
        type: Number,
        require: true,
      },
     name: {
        type: String,
        require: true,
     },
    changeAgeFunction: Function,
  },
  emits: ['age-update'],
  methods: {
       ageUpdate(){
             this.$emit('age-update', 2);
       }
  },
  computed: {
        ageDouble() {
         return this.age * 2
        }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
     @mixin age-btn(){ 
             background: #0d7bd4;
             padding: 10px;
             margin: 8px;
             border: none;
             border-radius: 10px;
             color: #fff;
             transition: 0.3s;
             cursor: pointer;
             &:hover{
                background: #015497;
             }
     }

     .age-increment-btn{
             @include age-btn();
     }
</style>
