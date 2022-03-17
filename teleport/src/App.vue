<template>
    <div class="container">
       <CommentForm/>
    
    </div>
</template>

<script>
import CommentForm from './components/CommentForm.vue'

export default {
  name: 'App',
  data() {
    return {
        
    }
  },
  components: {
CommentForm
  },
  methods: {
  
  },
}
</script>

<style>
  .container{
     width: 80%;
     margin: 0 auto;
  }
  
</style>
