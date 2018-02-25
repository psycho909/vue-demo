<template>
    <div class="hello">
        <h3>Hello Test Vue</h3>
        <div>{{message}}</div>
    </div>
</template>
<script>
    export default {
        name: "hello",
        data () {
            return{
                message: 'Hello World'
            }
        }
    }
</script>
