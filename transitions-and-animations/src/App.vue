<template>
    <div class="container">
        <button @click="flag = !flag" class="toggle-btn">Toggle</button>
         <transition name="fade" mode="out-in">
            <h2 v-if="flag" class="heading-title" key="base">Hello World!</h2>
            <h2 v-else class="heading-title" key="sub">Hello Visitors!</h2>
         </transition>
    </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
          flag: false,
    }
  },
  components: {

  }
}
</script>

<style>
  .container{
     width: 80%;
     margin: 0 auto;
  }
  .toggle-btn{
         background: #1375e6;
         color: #fff;
         padding: 10px 25px;
         border: none;
         border-radius: 5px;
  }

  /* transitions classes */
  .fade-enter-from{
     opacity: 0;
  }
  .fade-enter-active{
    transition: all 0.5s linear;
  }
  .fade-leave-to{
     transition: all 0.5s linear;
     opacity: 0;
  }
</style>
