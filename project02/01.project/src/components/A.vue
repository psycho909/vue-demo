<template>
    <div>
        <h1>Hello A - {{$route.params.id}}</h1>
        <ul class="ul-list">
            <li><router-link to="/A/AA/AA">AA</router-link></li>
            <li><router-link to="/A/AA/AB">AB</router-link></li>
        </ul>
        <router-view/>
    </div>
</template>
<script>

    export default {
    }
</script>
