const app = Vue.createApp({
    data() {
        return {
         hobbies: [],
         enterYourHobby: '',
        };
    },
  methods: {
     addOnHobby(){
           this.hobbies.push(this.enterYourHobby);
     }
  },
});
app.mount("#app")