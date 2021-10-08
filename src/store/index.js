import { store } from 'quasar/wrappers'
import { api } from 'src/boot/axios'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
    },
    state () {
      return {
        nationalCounter: {},
        sortedByCity: {},
        sortedByKorea: {}
      }
    },
    mutations: {
      setNationalCounter (state, payload) {
        state.nationalCounter = payload
      },
      setSortedByCity (state, payload) {
        state.sortedByCity = payload
      },
      setSortedByKorea (state, payload) {
        state.sortedByKorea = payload
      }
    },
    actions: {
      getNationalCounter (context) {
        api.get('https://api.corona-19.kr/korea/?serviceKey=xUMn8d6i7mpuVzcALSGFfKrqEZo2lsRIY')
          .then((result) => {
            context.commit('setNationalCounter', result.data)
          })
      },
      getSortedByCity (context) {
        api.get(
          'https://api.corona-19.kr/korea/country/new/?serviceKey=xUMn8d6i7mpuVzcALSGFfKrqEZo2lsRIY'
        ).then(result => {
          context.commit('setSortedByCity', result.data)
          context.commit('setSortedByKorea', result.data.korea)
        })
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
