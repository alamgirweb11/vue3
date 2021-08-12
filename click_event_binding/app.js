const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
  methods: {
           increment(){
               this.count+=2;
           },
           decrement(){
              this.count--;
          },
  },
});
app.mount("#app")