<template lang="">
   <div class="comments-form">
      <textarea v-model="comments" class="input-textarea" placeholder="Write your comments"></textarea>
      <button>Submit</button>
   </div>
</template>
<script>
export default {
    
}
</script>
<style scop>
     .comments-form{
          width: 320px;
          margin: 10px auto;
     }
     .input-textarea{
          width: 100%;
          
     }
</style>