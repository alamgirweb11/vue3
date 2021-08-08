const app = Vue.createApp({
    data() {
        return {
            message: 'Hello World',
            vue_link:'https://v3.vuejs.org/guide/introduction.html#declarative-rendering',
            vue_text: 'Vue Js 3',
            blank: '__blank'
        }
    },
});
app.mount("#app")