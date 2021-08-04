// create component of vue2
Vue.component('vue2-component', {
      template: '<button @click="getMessage">Click Me</button>',
      methods: {
              getMessage(){
                   this.$emit('update');
              }
      }
});
// create new app of vue2
new Vue({
    el: '#app',
    data: {
            message:'Hello I am from vue2 module.',
    },
    methods:{
        getUpdateMessage() {
            this.message = 'Hello I am update from vue2 click event.'
        },    
    }
});
