const app = Vue.createApp({
    data() {
        return {
            username: '',
            getName: '',
          
        }
    },
  methods: {
    submitData(){
               this.getName = this.$refs.username.value;
          },
         
  },
});
app.mount("#app")