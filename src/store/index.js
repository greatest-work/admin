import { createStore } from 'vuex'
import site from './modules/site'

const store = createStore({
    state() {
        return {
            token: 0,
            network: true
        }
    },
    mutaions: {
        loginSuccess(state, params) {
            state.token = params
        },
        changeNetwork(state, params) {
            state.network = params
        }
    },
    modules: {
        site
    }
})
export default store