import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state={
    count:3
}
var mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

var getters={
    count:function(state){
        return state.count+=5
    }
}

var actions={
    addAction(context){
        setTimeout(()=>{
            context.commit('add',10)
        },1000)
        console.log('比reduce')
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

var moduleA={
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
    modules:{a:moduleA}
})