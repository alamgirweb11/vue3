const app = Vue.createApp({
    data() {
        return {
            count: 0,
        };
    },
  beforeCreate() {
        console.log('Before create');
  },
  created() {
      console.log('Created');
  },
  beforeMount() {
      console.log('Before Mounted');
  },
  mounted() {
      console.log('Mounted');
  },
  beforeUpdate() {
      console.log('Before Updated');
  },
  updated() {
      console.log('Updated');
  },
  beforeUnmount() {
      console.log('Before unmounted');
  },
  unmounted() {
      console.log('Unmounted');
  },
});
app.mount("#app")
// for see the unmounted value setTimeout catch
setTimeout(() => {
        app.unmount()
}, 2000);