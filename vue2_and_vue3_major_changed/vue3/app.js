
// create new app of vue3
const app = Vue.createApp({
  data() {
      return{
        message:'Hello I am from vue3 module.',
      }
    },      
  methods: {
      getUpdateMessage() {
          this.message = 'Hello I am update from vue3 click event.'
      } 
  } 
});

// create component of vue3
app.component('vue3-component', {
    template: '<button @click="getMessage">Click Me</button>',
    methods: {
            getMessage(){
                 this.$emit('update');
            }
    }
});

app.mount('#app');