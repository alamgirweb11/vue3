const app = Vue.createApp({
    data() {
        return {
             first_text: "First Text",
             second_text: "Second Text",
             h_tag: '<h2 class="text-center">Comes from h2 tag.</h2>'
        }
    },
  methods: {
           firstText(){
               return this.first_text;
           },
          secondText(){
               return ' I am from secondText Method';
          },
          htmlTag(){
                return this.h_tag;
          }
  },
});
app.mount("#app")