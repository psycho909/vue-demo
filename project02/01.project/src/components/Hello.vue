<template>
    <div class="hello">
        <h3>{{message}}</h3>
        <input type="radio" v-model="selected" value="Item1"><label>Item1</label>
        <input type="radio" v-model="selected" value="Item2"><label>Item2</label>
        <input type="radio" v-model="selected" value="Item3"><label>Item3</label>
        <div>selected = {{ selected }}</div>
    </div>
</template>
<script>
    export default {
        name:'Hello',
        data() {
            return {
                message:'Hello World',
                selected:""
            }
        }
    }
</script>