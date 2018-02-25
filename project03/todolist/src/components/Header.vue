<template>
    <div class="header-view">
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
    export default {
        name: 'Header-view',
        data() {
            return {
                title: 'Title'
            }
        },
        // 父組件 向 子組件傳參
        // 第一步: props
        props: {
            msg:{   // 自定義屬性
                type:String,
                default:'我是誰?'
            }
        }
    }
</script>