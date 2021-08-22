const app = Vue.createApp({
    data() {
        return {
         hobbies: [],
         enterYourHobby: '',
         users:[
              {
                  id: 1,
                  name: 'Abir Ahmed',
                  mobile: '014747555000',
                  address: 'Dhaka'
              },
              {
                  id: 2,
                  name: 'Ratul Ahmed',
                  mobile: '01200115000',
                  address: 'Comilla'
              },
            ]
        };
    },
  methods: {
     addOnHobby(){
           this.hobbies.push(this.enterYourHobby);
     }
  },
});
app.mount("#app")