<template>
    <div class="child">
        <input type="text" v-model="childMyName">
        <input type="text" v-model="childMyAge">
        <span>{{myName}} / {{myAge}}</span>
        <div>{{count}}</div>
        <button @click="addCount">Count</button>
    </div>
</template>
<script>
    export default {
        props:['myName','myAge'],
        data() {
            return {
                childMyName:this.myName,
                childMyAge:this.myAge,
                count:0
            }
        },
        watch:{
            childMyName:function(val){
                this.$emit('update:my-name',val)
            },
            childMyAge:function(val){
                this.$emit('update:my-age',val)
            },
        },
        methods:{
            addCount:function(){
                this.count++;
                console.log('Child : '+this.childMyName)
                this.$emit('addCount',this.childMyName)
            }
        }
    }
</script>
