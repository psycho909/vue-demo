<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4">選購商品</div>
            <div class="col-sm-2">單價</div>
            <div class="col-sm-2">數量</div>
            <div class="col-sm-2">總計</div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm-4">
                <img src="http://ww1.sinaimg.cn/mw690/005MkxmCgw1emff4u3rtej30cu0cnwez.jpg" class="products-img">
                <div class="products-column1">
                    <p>商品名稱：xxx</p>
                    <p>規格：xxx</p>
                </div>
            </div>
            <div class="col-sm-2">$ XXX</div>
            <div class="col-sm-2">XXX</div>
            <div class="col-sm-2">$ XXX</div>
            <div class="col-sm-2"><button class="btn btn-default"><i class="fa fa-trash"></i></button></div>
        </div>
        <div class="row">
            <div class="products-sum">
                <div>商品總數量：XXX   |  結帳總金額：$ XXX</div>
            </div>
        </div>
        <div class="row">
            <div class="products-check">
                <button class="btn btn-default commonbtn">結帳</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.products-img {
    width: 50%;
    border: 1px solid #AAA;
    padding: 10px;
}
.products-column1 {
    float: right;
}
.products-sum {
    float: right;
    background: #aaa;
    padding: 10px 15px;
}
.products-check {
    float: right;
    margin: 20px 0 0;
}
</style>