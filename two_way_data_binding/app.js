const app = Vue.createApp({
    data() {
        return {
            count: 0,
            username: 'Alamgir',
            inputResult: '',
        }
    },
  methods: {
           increment(){
              this.count+=2;
          },
           decrement(){
              this.count--;
          },
          getUserName (event){
               this.username =  event.target.value;
          },
          getFullName(){
             return  this.username +' Hosen';
          }
         
  },
});
app.mount("#app")