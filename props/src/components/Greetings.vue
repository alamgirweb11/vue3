<template lang="">
      <h3 v-if="age > 30" class="greeting-title">Welcome! you are eligible.</h3>
      <h3 v-else class="greeting-title-error">You are not eligible for see the greetings.</h3>
</template>
<script>
export default {
      name: 'GreetingsComponent',
      props: ['age']
}
</script>
<style lang="scss">
    .greeting-title{
         color: #00b83d;
    }
    .greeting-title-error{
         color: #cc1414;
    }
</style>