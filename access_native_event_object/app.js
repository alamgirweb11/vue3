const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: '',
            username: ''
        }
    },
  methods: {
           increment(){
              this.count+=2;
          },
           decrement(){
              this.count--;
          },
          inputData (event){
                 this.name = event.target.value;
          },
          getUserName (event, lastName){
               this.username = event.target.value + lastName;
          }
  },
});
app.mount("#app")