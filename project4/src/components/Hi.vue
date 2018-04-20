<template>
    <div>
        <h2>{{ msg }}</h2>
        <router-link :to="{name:'hi1',params:{username:'Chen'}}">Hi-1</router-link>
        <router-link :to="{name:'hi2',params:{id:'7788788'}}">Hi-2</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'Hi',
        data(){
            return {
                msg:'Hi Page'
            }
        }
    }
</script>
