import { createStore } from 'vuex'

import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'

import coachesModule from './modules/coaches/index.js'
import requestsModule from './modules/requests/index.js'

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;