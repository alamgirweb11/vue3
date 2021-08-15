const app = Vue.createApp({
    data() {
        return {
            count: 0,
            // username: 'Alamgir',
            firstName: '', 
            lastName: '', 
            fullName: '', 
            inputResult: '',
        };
    },

// watcher use for set condition
  watch:{
         count(value){
              if(value > 5){
                   this.count = 0;
              }
         },

         firstName(){
             this.fullName = this.firstName + ' ' + this.lastName;
         },
         lastName(){
               this.fullName = this.firstName + ' ' + this.lastName;
         }

  },

//   write computed properties
   computed: {
        //   fullName(){
        //       console.log('exsecuting')
        //        return this.username + ' Hosen';
        //   },
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
        //   getFullName(){
        //      return  this.username +' Hosen';
        //   }
         
  },
});
app.mount("#app")