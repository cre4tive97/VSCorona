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
    data () {
      return {
        nationalCounter: {}
      }
    },
    mutations: {

    },
    actions: {
      getCovidData (context) {
        api.get('https://api.corona-19.kr/korea/?serviceKey=xUMn8d6i7mpuVzcALSGFfKrqEZo2lsRIY')
          .then((result) => {
            console.log(result)
            context.nationalCounter = result.data
            console.log(context.nationalCounter)
          })
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
