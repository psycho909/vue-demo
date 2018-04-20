<template>
    <div>
        <h2>{{ msg }} + {{id}} - {{ $route.params.id }}</h2>
    </div>
</template>
<script>
    export default {
        name:'hi2',
        props:['id'],
        data(){
            return {
                msg:'Hi-2 Page'
            }
        }
    }
</script>
