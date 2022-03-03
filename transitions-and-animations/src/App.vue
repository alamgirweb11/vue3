<template>
    <div class="container">
        <!-- <button @click="flag = !flag" class="toggle-btn">Toggle</button> -->
         <!-- <transition name="fade" mode="out-in">
            <h2 v-if="flag" class="heading-title" key="base">Hello World!</h2>
            <h2 v-else class="heading-title" key="sub">Hello Visitors!</h2>
         </transition> -->
         <!-- css animations -->
         <!-- <transition name="zoom" type="animation" appear>
            <h2 v-if="flag" class="css-animation-block">Hello World!</h2>
         </transition> -->
           <!-- javascript animations -->
         <!-- <transition 
         @before-enter = "beforeEnter" 
         @enter = "enter"
         @after-enter = "afterEnter"
         @before-leave = "beforeLeave"
         @leave = "leave"
         @after-leave = "afterLeave"
         :css="true"
         name="fade"
        >
            <h2 v-if="flag" class="js-animation-block">Hello World!</h2>
         </transition> -->
    <!-- list styling -->
       <button @click="addNewNumber()" class="add-new-number-btn">Add New Number</button>
              <ul>
                 <transition-group name="fade">
                <li
                 v-for="(number, index) in numbers"
                  :key="number"
                  @click="removeItem(index)"
                  >
                  {{ number }}
                  </li>
                  </transition-group>
              </ul>
    </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
          flag: true,
          numbers: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  components: {

  },
  methods: {
    // add new random number
    addNewNumber(){
        const num = Math.floor(Math.random() * 100 + 1);
        const index = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(index, 0, num);

    },
    removeItem(index){
         this.numbers.splice(index, 1);
    },
        beforeEnter(el){
            console.log('before-enter event fired',  el)
        },
        enter(el){
            console.log('enter event fired',  el)
          //  const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], {
          //     duration: 1000,
          //  })

          //  animation.onfinish = () => {
          //      done()
          //  }
        },
        afterEnter(el){
            console.log('after-enter event fired',  el)
        },
        beforeLeave(el){
             console.log('before-leave event fired',  el)
        },
        leave(el){
             console.log('leave event fired',  el)

          //     const animation = el.animate([{}, {transform: "scale3d(0,0,0)" }], {
          //     duration: 1000,
          //  })

          //  animation.onfinish = () => {
          //      done()
          //  }
        },
        afterLeave(el){
          console.log('after-leave event fired',  el)
        },
  },
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
         margin: 8px;
  }
  .add-new-number-btn{
         background: #1976e0;
         color: #fff;
         padding: 10px 25px;
         border: none;
         border-radius: 5px;
         margin: 8px;
  }

/* list style */
 ul li{
      font-size: 26px;
      cursor: pointer;
 }

  /* transitions classes */
  .fade-leave-active{
      position: absolute;
  }
  .fade-move{
     transition: all 1s linear;
  }
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
