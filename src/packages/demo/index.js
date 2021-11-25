import elementTest from './src/demo.vue'

elementTest.install = function(Vue) {
  Vue.component(elementTest.name, elementTest)
}

export default elementTest