<template>
    <div class="dynamic-component">
     <div class="sidebar">
        <ul>
        <li v-for="singleComponent in allComponents"
          :key="singleComponent"
          @click.prevent="activeComponent = singleComponent">
          {{ singleComponent }}
          </li>
      </ul>
     </div>
     <div class="content">
        <keep-alive>
             <component :is="activeComponent" class=""></component>
        </keep-alive>
     </div>
    </div>
</template>

<script>
import Home from '@/components/Home'
import About from '@/components/About'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'

export default {
  name: 'App',
  components: {
        Home,
        About,
        Faq,
        Contact,
  },

 data(){
     return{
         activeComponent: "Home",
         allComponents: ["Home", "About", "Faq", "Contact"]
     }

 },

}
</script>

<style>
.dynamic-component{
   width: 80%;
   margin: 0 auto;
   display: flex;
}
.sidebar{
   width: 15%;
   border-right: 1px solid #000;
  margin: 10px;

}

 ul{
      list-style: none;
}
 ul li{
       border-bottom: 1px solid #000;
       cursor: pointer;
}
</style>
