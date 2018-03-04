<template>
    <div class="shopcart" :class="{'heightlight':totalCount > 0}">
        <div class="shopcart-wrapper">
            <div class="content-left">
                <div class="logo-wrapper" :class="{'heightlight':totalCount > 0}" @click="toggleList">
                    <span class="icon-shopping_cart logo"></span>
                    <i class="num" v-show="totalCount">{{totalCount}}</i>
                </div>
                <div class="desc-wrapper">
                    <p class="total-price" v-show="totalPrice">${{totalPrice}}</p>
                    <div class="tip" :class="{'heightlight':totalCount > 0}">另需{{poiInfo.shipping_fee_tip}}</div>
                </div>
            </div>
            <div class="content-right" :class="{'heightlight':totalCount > 0}">
                {{payStr}}
            </div>
            <div class="shopcart-list" v-show="listShow" :class="{'show':listShow}">
                <div class="list-top" v-if="poiInfo.discounts2">
                    {{poiInfo.discounts2[0].info}}
                </div>
                <div class="list-header">
                    <h3 class="title">1號口袋</h3>
                    <div class="empty" @click="emptyFn">
                        <img src="./ash_bin.png" alt="">
                        <span>清空購物車</span>
                    </div>
                </div>
                <div class="list-content" ref="listContent">
                    <ul>
                        <li class="food" v-for="(food,index) in selectFoods" :key="index">
                            <div class="desc-wrapper">
                                <div class="desc-left">
                                    <p class="name">{{food.name}}</p>
                                    <p class="unit" v-show="!food.description">{{food.unit}}</p>
                                    <p class="description" v-show="food.description">{{food.description}}</p>
                                </div>
                                <div class="desc-right">
                                    <div class="price">${{food.min_price}}</div>
                                </div>
                            </div>
                            <div class="cartcontrol-wrapper">
                                <Cartcontrol :food="food"></Cartcontrol>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="list-footer">
    
                </div>
            </div>
        </div>
        <div class="shopcart-mask" v-show="listShow" @click="hideMask">
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import Cartcontrol from '@/components/Cartcontrol/Cartcontrol'
    export default {
        data(){
            return {
                fold:true
            }
        },
        props: {
            poiInfo:{
                type:Object,
                default:{}
            },
            selectFoods: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        computed: {
            // 總個數
            totalCount() {
                let num = 0;
                this.selectFoods.forEach((food) => {
                    num += food.count
                })
                return num;
            },
            // 總金額
            totalPrice() {
                var total = 0;
                this.selectFoods.forEach((food) => {
                    total += food.min_price * food.count
                })
                return total;
            },
            // 結算按鈕顯示
            payStr() {
                if (this.totalCount > 0) {
                    return '去結算'
                } else {
                    return this.poiInfo.min_price_tip;
                }
            },
            listShow(){
                if(!this.totalCount){ // 個數為0
                    this.fold=true
                    return false;
                }
                let show=!this.fold;

                // BScroll相關
                if(show){
                    this.$nextTick(()=>{
                        if(!this.shopScroll){
                            this.shopScroll=new BScroll(this.$refs.listContent,{
                                click:true
                            })
                        }else{
                            this.shopScroll.refresh()
                        }
                    })
                }
                return show
            }
        },
        methods:{
            toggleList(){
                if(!this.totalCount){
                    return;
                }
                this.fold=!this.fold;
            },
            emptyFn(){
                this.selectFoods.forEach((food)=>{
                    food.count=0;
                })
            },
            hideMask(){
                this.fold=true;
            }
        },
        components:{
            Cartcontrol,
            BScroll
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/styles/icon.css';
    @import 'Shopcart';
</style>


