<template>
    <div>
        <div>{{msg}}</div>
        <p>newId {{ $route.params.newsId }}</p>
        <p>newId {{ $route.params.newsTitle }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'Params page'
            }
        },
        beforeRouteEnter:(to,from,next)=>{
            console.log('準備進入路由')
            next()
        },
        beforeRouteLeave:(to,from,next)=>{
            console.log('準備離開路由')
            next()
        }
    }
</script>
