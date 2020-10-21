import { createStore } from 'vuex'
type PageType = 'allview' | 'detailview' | 'keypointview'
export default createStore({
  state: {
    currntPage: 'allview'
  },
  getters: {},
  mutations: {
    setCurrentPage(state, curpage: PageType) {
      state.currntPage = curpage
    }
  },
  actions: {},
  modules: {}
})
