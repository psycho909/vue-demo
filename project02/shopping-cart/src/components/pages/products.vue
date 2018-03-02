<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <img src="http://ww1.sinaimg.cn/mw690/005MkxmCgw1emff4u3rtej30cu0cnwez.jpg" class="products-img">
            </div>
            <div class="col-sm-6">
                <p>商品名稱：xxx</p>
                <p>單價：$ XXX</p>
                <p>規格：xxx</p>
                <p>數量：
                    <button class="btn btn-default" @click="addCount()">+</button>
                    <span class="products-count-number">{{ productCount }}</span>
                    <button class="btn btn-default" @click="minusCount()">-</button> 剩下數量：xxx
                </p>
                <button class="btn btn-default commonbtn">加入購物車</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                productCount: 1
            }
        },
        methods: {
            addCount: function() {
                this.productCount++
            },
            minusCount: function() {
                this.productCount--
            }
        }
    }
</script>
<style>
    .products-img {
        width: 100%;
        border: 1px solid #aaa;
        padding: 10px;
    }
    .products-count-number {
        padding: 10px;
    }
</style>

