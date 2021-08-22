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
     },
     removeList(index){
           this.hobbies.splice(index, 1)
     }
  },
});
app.mount("#app")