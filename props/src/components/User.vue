<template>
  <div class="user-wrapper">
     <h4>Your name is  {{  name }} and your are {{ age }} years old.</h4>
  </div>
</template>

<script>
export default {
  name: 'UserComponent',
  props: ["name", "age"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
