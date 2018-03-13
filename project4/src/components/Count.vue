<template>
    <div>
        <h2>{{msg}}</h2><hr>
        <input type="text" v-model.number="num">
        <h3> {{count}} </h3>
        <!-- <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p> -->
        <p>
            <button @click="addAction(num)">+</button>
            <button @click="reduceAction(num)">-</button>
            <button @click="countRestAction">歸零</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import { mapGetters,mapActions } from 'vuex'
    export default {
        data (){
            return {
                msg:'Hello Vuex',
                num:1
            }
        },
        computed:{
            // ...mapState(['count']),
            ...mapGetters(['count'])
        },
        methods:{
            // ...mapMutations(['add','reduce']),
            ...mapActions([
                'addAction',
                'reduceAction',
                'countRestAction'
            ])
        },
        store
    }
</script>
<style>

</style>
