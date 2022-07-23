export default {
    namespaced:true ,// 命名空间
    state(){
        return {
            siteCount: 100,
        }
    },
    getters:{
        // 命名空间里面，getters,新增了2个参数 rooteState,rootGetters
        doubleHomeCounter(state){
            return state.siteCount*2
        }
    },
    mutations:{
        increment(state){
            state.siteCount++
        }
    },
    actions:{
        incrementAction({ commit }){
            commit("increment")
            commit("increment",null,{root:true}) // 在模块里调用state根的mutations里面的方法
        }
    }
}
