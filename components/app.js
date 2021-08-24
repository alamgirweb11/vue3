// example of components
 const app = Vue.createApp({
      data(){
           return{
               
           }
      }
 })

//  global registration of component
 app.component('programming-lang',{
        template: `<ul class="list-group">
        <li class="list-group-item" v-for="(language, index) in languages">{{ index+1 }}. {{  language }}</li>
        </ul>`,
        data(){
           return{
            languages: ['C', 'C#', 'C++', 'Python', 'Java']
           }
        }
 })

 app.mount("#app")
 // app end

//  start app2
// local registration of component
const secondComponent = {
    template:`
      <h2 class="text-success">Welcome to App2</h2>
      <h2 class="text-success">I'm Loading From App2</h2>
      `
}
const app2 = Vue.createApp({
     components: {secondComponent},
})

app2.mount("#app2")


