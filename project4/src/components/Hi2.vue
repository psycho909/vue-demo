<template>
    <div>
        <h2>{{ msg }} - {{ $route.params.id }}</h2>
    </div>
</template>
<script>
    export default {
        name:'hi2',
        data(){
            return {
                msg:'Hi-2 Page'
            }
        }
    }
</script>
