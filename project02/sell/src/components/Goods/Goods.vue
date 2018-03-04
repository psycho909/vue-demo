<template>
    <div class="goods">
        <!-- 分類 -->
        <div class="menu-wrapper" ref="menuScroll">
            <ul>
                <!-- 專場 -->
                <li class="menu-item" :class="{'current':currentIndex === 0}" @click="selectMenu(0)">
                    <p class="text">
                        <img :src="container.tag_icon" alt="" v-if="container.tag_icon" class="icon"> {{container.tag_name}}
                    </p>
                </li>
                <li class="menu-item" v-for="(item,index) in goods" :key="index" :class="{'current':currentIndex === index+1}" @click="selectMenu(index+1)">
                    <p class="text">
                        <img :src="item.icon" alt="" v-if="item.icon" class="icon"> {{item.name}}
                    </p>
                    <i class="num" v-show="calculateCount(item.spus)">{{calculateCount(item.spus)}}</i>
                </li>
            </ul>
        </div>
        <!-- 商品列表 -->
        <div class="foods-wrapper" ref="foodScroll">
            <ul>
                <!-- 專場 -->
                <li class="container-list food-list-hook">
                    <div v-for="(item,index) in container.operation_source_list" :key="index">
                        <img v-if="item.pic_url" :src="item.pic_url" alt="">
                    </div>
                </li>
                <!-- 具體分類 -->
                <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook">
                    <h3 class="title">{{item.name}}</h3>
                    <!-- 具體商品列表 -->
                    <ul>
                        <li v-for="(food,index) in item.spus" :key="index" class="food-item"  @click="showDetail(food)">
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
                            <div class="cartcontrol-wrapper">
                                <Cartcontrol :food="food"></Cartcontrol>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- 購物車 -->
        <Shopcart :selectFoods="selectFoods" :poiInfo="poiInfo"></Shopcart>
        <!-- 商品詳情 -->
        <Food :food="selectedFood" ref="foodView"></Food>
    </div>
</template>
<script>
    // 引入滾動擴展
    import BScroll from 'better-scroll'
    import Shopcart from '@/components/Shopcart/Shopcart'
    import Cartcontrol from '@/components/Cartcontrol/Cartcontrol'
    import Food from '@/components/Food/Food'
    export default {
        data() {
            return {
                container: {},
                goods: [],
                poiInfo: {},
                listHeight: [],
                scrollY: 0,
                menuScroll: {},
                foodScroll: {},
                selectedFood:{}
            }
        },
        created() {
            var that = this;
            that.$axios.get('/api/goods')
                .then(function(response) {
                    var dataSource = response.data;
                    if (dataSource.code == 0) {
                        that.container = dataSource.data.container_operation_source;
                        that.goods = dataSource.data.food_spu_tags;
                        that.poiInfo = dataSource.data.poi_info;
                        // 調用滾動的初始化方法
                        // that.initScroll() //無法調用
                        // 開始時,DOM元素還沒有渲染,即高度是問題
                        // 在獲取到數據後，並DOM已經被渲染，表示列表高度是沒問題的
                        //nextTick()
                        that.$nextTick(() => {
                            // DOM已經更新
                            that.initScroll()
                            // 計算分類區間高度
                            that.calculateHeight()
                        })
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        methods: {
            head_bg(imgName) {
                return "background-image:url(" + imgName + ")";
            },
            // 滾動初始化
            initScroll() {
                // ref屬性就是用來綁定某個dom元素或某個組件，然後再this.$ref裡面
                this.menuScroll = new BScroll(this.$refs.menuScroll, {
                    click: true
                })
                this.foodScroll = new BScroll(this.$refs.foodScroll, {
                    probeType: 3,
                    click: true
                })
                // 添加滾動監聽是件
                this.foodScroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y))
                    //console.log(pos.y)
                })
            },
            calculateHeight() {
                // 通過$refs獲取到對應的元素
                var foodlist = this.$refs.foodScroll.getElementsByClassName('food-list-hook')
                // console.log(foodlist)
                // 添加到數組區間
                // 0~216 一個區間
                // 217~1342
                var height = 0;
                this.listHeight.push(height)
                for (var i = 0; i < foodlist.length; i++) {
                    var item = foodlist[i]
                    //累加
                    height += item.clientHeight;
                    this.listHeight.push(height)
                }
            },
            selectMenu(index) {
                //  console.log(index)
                var foodlist = this.$refs.foodScroll.getElementsByClassName('food-list-hook');
                // 根據下標,滾動到相對的元素
                var el = foodlist[index];
                // 滾動到對應元素的位置
                this.foodScroll.scrollToElement(el, 250)
            },
            calculateCount(spus) {
                var count = 0;
                spus.forEach((food) => {
                    if (food.count > 0) {
                        count += food.count
                    }
                })
                return count
            },
            showDetail(food){
                // 傳直
                this.selectedFood=food;
                
                //顯示詳情頁
                this.$refs.foodView.showView()
            }
        },
        computed: { // 計算屬性(不能傳參)
            currentIndex() { // 根據右側滾動位置,確定對應索引的下標
                for (let i = 0; i < this.listHeight.length; i++) {
                    // 獲取商品區間的範圍
                    var height1 = this.listHeight[i];
                    var height2 = this.listHeight[i + 1];
                    // 是否在上述區間中
                    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                        //console.log(i)
                        return i;
                    }
                }
                return 0;
            },
            selectFoods() {
                let foods = [];
                this.goods.forEach((goods) => {
                    goods.spus.forEach((food) => {
                        if (food.count > 0) {
                            foods.push(food)
                        }
                    })
                })
                return foods
            },
        },
        components: {
            BScroll,
            Shopcart,
            Cartcontrol,
            Food
        }
    }
</script>
<style lang="scss">
    @import 'Goods';
</style>
