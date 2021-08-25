const app = Vue.createApp({
    data() {
        return {
          seatStates:{
              sold:{
                   text:'Sold',
                   color: '#ff0000'
              },
              available:{
                   text:'Available',
                   color: '#fff'
              },
              booked:{
                   text:'Booked',
                   color: '#424242'
              },
              selected:{
                   text:'Selected',
                   color: '#00ff00'
              },
          }
        }
    },
});
app.mount("#app")