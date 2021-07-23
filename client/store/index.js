import Vue from 'vue'
import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      alert: [],
    },

    mutations: {
      newAlert(
        state,
        [
          strong = 'Hi',
          msg = 'Its a test alert',
          how = 'success',
          id = Date.now(),
        ]
      ) {
        state.alert = [
          ...state.alert,
          {
            strong: strong,
            msg: msg,
            how: `alert-${how}`,
            id: id,
          },
        ]
      },
      deleteAlert(state, id) {
        state.alert = state.alert.filter((i) => i.id !== id)
      },
    },
  })

export default store
