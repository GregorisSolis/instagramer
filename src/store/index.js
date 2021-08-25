import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      likeColor: {'background': 'white'}
  },
  mutations: {
      changeColor: state => {
        if(state.likeColor.background === 'red'){
            state.likeColor = {'background': 'white'}
        }else{
            state.likeColor = {'background': 'red'}
        }
      },

      changeColorRed: state => state.likeColor = {'background': 'red'}
  }
})
