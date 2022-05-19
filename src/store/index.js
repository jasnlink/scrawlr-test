import { createStore } from 'vuex'


//create a new store instance.
const store = createStore({

  //each pool has an items counter to keep track of the number of upvote buttons
  //and a selected flag to keep track of selected/not-selected state of the buttons in the pool
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
    //increments items counter for passed in pool index
    addUpvote (state, { index }) {
     	state.pool[index].items++
    },
    //toggles selected flag in pool
    handleSelect (state, { index }) {
    	state.pool[index].selected = !state.pool[index].selected
    }
  }
})


// export store and import in main.js
export default store