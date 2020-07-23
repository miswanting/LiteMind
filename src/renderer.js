const Vue = require('../node_modules/vue/dist/vue.js')
Vue.component('test', {
    template: '<div><header></header><main></main><footer></footer></div>'
})
var vm = new Vue({
    el: '#root',
    data: {
        msg: '123'
    },
    template: '<test></test>'
})