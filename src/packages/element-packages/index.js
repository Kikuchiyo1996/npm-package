import BasePagination from './src/BasePagination.vue'

BasePagination.install = function(Vue) {
  Vue.component(BasePagination.name, BasePagination)
}

export default BasePagination