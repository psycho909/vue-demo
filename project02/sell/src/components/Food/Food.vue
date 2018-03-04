<template>
    <transition name="detail">
        <div class="food" v-show="showFlag" @click="closeView" ref="foodView">
            <div class="food-wrapper">
                <div class="food-content">
                    <div class="img-wrapper">
                        <img :src="food.picture" alt="" class="food-img">

                        <span class="icon-close close-bt" @click="closeView"></span>
                        <img src="./share.png" alt="" class="share-bt">
                        <img src="./more.png" alt="" class="more-bt">
                    </div>
                    <div class="content-wrapper">
                        <h3 class="name">{{food.name}}</h3>
                        <p class="saled">{{food.month_saled_content}}</p>
                        <img :src="food.product_label_picture" alt="" class="product" v-show="food.product_label_picture">
                        <p class="price">
                            <span class="text">${{food.min_price}}</span>
                            <span class="unit">/{{food.unit}}</span>
                        </p>
                        <div class="cartcontrol-wrapper">
                            <Cartcontrol :food="food"></Cartcontrol>
                        </div>
                        <div class="buy" v-show="!food.count || food.count == 0" @click.stop.prevent="addFirst">
                            選規格
                        </div>
                    </div>
                </div>
                <Split></Split>
                <div class="rating-wrapper">
                    <div class="rating-title">
                        <div class="like-ratio" v-if="food.rating">
                            <span class="title">{{food.rating.title}}</span>
                            <span class="ratio">( {{food.rating.like_ratio_desc}} <i>{{food.rating.like_ratio}}</i> )</span>
                        </div>
                        <div class="snd-title" v-if="food.rating">
                            <span class="text">{{food.rating.snd_title}}</span>
                            <span class="icon-keyboard_arrow_right icon"></span>
                        </div>
                    </div>
                    <ul class="rating-content" v-if="food.rating">
                        <li v-for="(comment,index) in food.rating.comment_list" :key="index" class="rating-item">
                            <div class="comment-header">
                                <img :src="comment.user_icon" alt="" v-if="comment.user_icon">
                                <img src="./anonymity.png" alt="" v-if="!comment.user_icon">
                            </div>
                            <div class="comment-main">
                                <div class="user">
                                    {{comment.user_name}}
                                </div>
                                <div class="time">
                                    {{comment.comment_time}}
                                </div>
                                <div class="content">
                                    {{comment.comment_content}}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue'
    import BScroll from 'better-scroll'
    import Cartcontrol from '@/components/Cartcontrol/Cartcontrol'
    import Split from '@/components/Split/Split'
    export default {
        data() {
            return {
                showFlag: false
            }
        },
        props:{
            food:{
                type:Object
            }
        },
        methods:{
            // 父組件是可以調用子組件的方法
            showView(){
                this.showFlag=true;

                // BScroll初始化
                this.$nextTick(()=>{
                    if(!this.scroll){
                        this.scroll=new BScroll(this.$refs.foodView,{
                            click:true
                        })
                    }else{
                        this.scroll.refresh()
                    }
                })
            },
            closeView(){
                this.showFlag=false;
            },
            addFirst(){
                Vue.set(this.food,'count',1)
            }
        },
        components:{
            Cartcontrol,
            BScroll,
            Split
        }
    }
</script>
<style lang="scss" scoped>
    @import url('../../common/styles/icon.css');
    @import './Food';
</style>

