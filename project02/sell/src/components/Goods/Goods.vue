<template>
    <div class="goods">
        <!-- 分類 -->
        <div class="menu-wrapper">
            <ul>
                <!-- 專場 -->
                <li class="menu-item">
                    <p class="text">
                        <img :src="container.tag_icon" alt="" v-if="container.tag_icon" class="icon">
                        {{container.tag_name}}
                    </p>
                </li>
                <li class="menu-item" v-for="(item,index) in goods" :key="index">
                    <p class="text">
                        <img :src="item.icon" alt="" v-if="item.icon" class="icon">
                        {{item.name}}
                    </p>
                </li>
            </ul>
        </div>
        <!-- 商品列表 -->
        <div class="foods-wrapper">
            <ul>
                <!-- 專場 -->
                <li class="container-list">
                    <div v-for="(item,index) in container.operation_source_list" :key="index">
                        <img v-if="item.pic_url" :src="item.pic_url" alt="">
                    </div>
                </li>
                <!-- 具體分類 -->
                <li v-for="(item,index) in goods" :key="index" class="food-list">
                    <h3 class="title">{{item.name}}</h3>
                    <!-- 具體商品列表 -->
                    <ul>
                        <li v-for="(food,index) in item.spus" :key="index" class="food-item">
                            <div class="icon" :style="head_bg(food.picture)"></div>
                            <div class="content">
                                <h3 class="name">{{food.name}}</h3>
                                <p class="desc" v-if="food.description">{{food.description}}</p>
                                <div class="extra">
                                    <span class="saled">{{food.month_saled_content}}</span>
                                    <span class="praise">{{food.praise_content}}</span>
                                </div>
                                <img class="product" :src="food.product_label_picture" alt="" v-if="food.product_label_picture">
                                <p class="price">
                                    <span class="text">${{food.min_price}}</span>
                                    <span class="unit">/{{food.unit}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                container:{},
                goods:[]
            }
        },
        created(){
            var that=this;
            that.$axios.get('/api/goods')
                .then(function(response){
                    var dataSource=response.data;
                    if(dataSource.code == 0 ){
                        that.container=dataSource.data.container_operation_source
                        that.goods=dataSource.data.food_spu_tags
                        console.log(that.goods)
                    }
                })
                .catch(function(error){
                    console.log(error)
                })
        },
        methods:{
            head_bg(imgName){
                return "background-image:url("+imgName+")";
            }
        }
        // computed:{ // 計算屬性(不能傳參)
        //     head_bg(){
        //         return 
        //     }
        // }
    }
</script>
<style lang="scss">
@import 'Goods';
</style>
