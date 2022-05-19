import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
  state: {
      pool: {
      	1: {
      		items: 0,
      		selected: false
      	},
      	2: {
      		items: 0,
      		selected: false
      	},
      	3: {
      		items: 0,
      		selected: false
      	}
    }
  },
  mutations: {
    addUpvote (state, { index }) {
     	state.pool[index].items++
    },
    handleSelect (state, { index }) {
    	state.pool[index].selected = !state.pool[index].selected
    }
  }
})


// Export store and import in main.js
export default store