<template>
    <div class="container">
        <button @click="flag = !flag" class="toggle-btn">Toggle</button>
         <!-- <transition name="fade" mode="out-in">
            <h2 v-if="flag" class="heading-title" key="base">Hello World!</h2>
            <h2 v-else class="heading-title" key="sub">Hello Visitors!</h2>
         </transition> -->
         <!-- css animations -->
         <transition name="zoom" type="animation" appear>
            <h2 v-if="flag" class="css-animation-block">Hello World!</h2>
         </transition>
    </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
          flag: true,
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

/* css animations style */
.zoom-enter-active{
     animation: zoom-in 1s linear forwards;
     transition: all 2s linear;
}
.zoom-leave-active{
 animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-enter-from{
     opacity: 0;
}
.zoom-leave-to{
     opacity: 0;
}

.css-animation-block{
     width: 400px;
     padding: 20px;
     margin: 20px;
}
@keyframes zoom-in{
     from{
        transform: scale(0, 0);
     }
     to{
         transform: scale(1, 1);
     }
}
@keyframes zoom-out{
     from{
        transform: scale(1, 1);
     }
     to{
         transform: scale(0, 0);
     }
}
</style>
