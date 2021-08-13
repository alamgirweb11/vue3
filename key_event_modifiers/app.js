const app = Vue.createApp({
    data() {
        return {
            count: 0,
            username: 'Alamgir Hosen',
            inputValue: '',
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
          getUserName (event, lastName){
               this.username = event.target.value + lastName;
          },
          getInputResult(){
               this.inputResult = this.username;
          },
          formSubmit(event){
            alert('Input is' + ' ' + this.inputValue);
       }
  },
});
app.mount("#app")