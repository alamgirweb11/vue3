const app = Vue.createApp({
    data() {
        return {
          boxASelected: false,
          boxBSelected: false,
          boxCSelected: false,
        };
    },
  computed:{
        boxAClasses(){
            return { active: this.boxASelected };
        }
  },
  methods: {
          onBoxSelected(box){
               if(box === 'A'){
                    this.boxASelected = true;
               }else if(box === 'B'){
                    this.boxBSelected = true;
               }else{
                    this.boxCSelected = !this.boxCSelected;
               }
          }
         
  },
});
app.mount("#app")