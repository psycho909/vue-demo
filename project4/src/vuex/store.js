import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state={
    count:1
}

var getters={
    count:(state)=>{
        return state.count
    }
}

var mutations={
    add(state,num){
        state.count+=num;
    },
    reduce(state,num){
        state.count-=num;
    },
    countreset(state){
        state.count=0;
    }
}

var actions={
    addAction({commit},num){
        console.log(num)
        commit('add',num)
    },
    reduceAction({commit},num){
        console.log(num)
        commit('reduce',num)
    },
    countRestAction({commit}){
        commit('countreset')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})