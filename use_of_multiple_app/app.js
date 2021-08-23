const commonItem = {
        commonMessage: 'I am for both item.',
        changeMessage: 'I am change form both item',
}

const app1 = Vue.createApp({
    data() {
        return {
            app1Message:'From App1 Instance',
            common: commonItem,
        };
    },
});
app1.mount("#app1")
const app2 = Vue.createApp({
    data() {
        return {
            app2Message:'From App2 Instance',
            common: commonItem,
        }; 
    },
    methods: {
      changeCommonMessage(){
             this.common.commonMessage = this.common.changeMessage;
      }  
   },
});
app2.mount("#app2")