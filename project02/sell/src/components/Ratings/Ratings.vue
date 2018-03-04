<template>
    <div class="ratings" ref="ratingView">
        <div class="ratings-wrapper">
            <div class="overview">
                <div class="overview-left">
                    <div class="comment-score">
                        <p class="score">{{ratings.comment_score}}</p>
                        <p class="text">商家評分</p>
                    </div>
                    <div class="other-score">
                        <div class="quality-score item">
                            <span class="text">口味</span>
                            <Star :score="ratings.quality_score" class="star"></Star>
                            <span class="score">{{ratings.quality_score}}</span>
                        </div>
                        <div class="pack-score item">
                            <span class="text">包裝</span>
                            <Star :score="ratings.pack_score" class="star"></Star>
                            <span class="score">{{ratings.pack_score}}</span>
                        </div>
                    </div>
                </div>
                <div class="overview-right">
                    <div class="delivery-score">
                        <p class="score">{{ratings.delivery_score}}</p>
                        <p class="text">配送評分</p>
                    </div>
                </div>
            </div>
            <Split></Split>
            <div class="content">
                <div class="rating-select" v-if="ratings.tab">
                    <span class="item" @click="selectTypeFn(2)" :class="{'active':selectType==2}">
                                {{ratings.tab[0].comment_score_title}}
                            </span>
                    <span class="item" @click="selectTypeFn(1)" :class="{'active':selectType==1}">
                                {{ratings.tab[1].comment_score_title}}
                            </span>
                    <span class="item" @click="selectTypeFn(0)" :class="{'active':selectType==0}">
                                <img src="./icon_sub_tab_dp_normal@2x.png" alt="" v-show="selectType!=0">
                                <img src="./icon_sub_tab_dp_highlighted@2x.png" alt="" v-show="selectType==0">
                                {{ratings.tab[2].comment_score_title}}
                            </span>
                </div>
                <div class="labels-view">
                    <span v-for="(item,index) in ratings.labels" :key="index" class="item" :class="{'heighlight':item.label_star > 0}">
                            {{item.content}} {{item.label_count}}
                        </span>
                </div>
                <ul class="rating-list">
                    <li v-for="(comment,index) in selectComments" :key="index" class="comment-item">
                        <div class="comment-header">
                            <img :src="comment.user_pic_url" alt="" v-if="comment.user_pic_url">
                            <img src="./anonymity.png" alt="" v-if="!comment.user_pic_url">
                        </div>
                        <div class="comment-main">
                            <div class="user">
                                {{comment.user_name}}
                            </div>
                            <div class="time">
                                {{fotmatData(comment.comment_time)}}
                            </div>
                            <div class="star-wrapper">
                                <span class="text">評分</span>
                                <Star :score="comment.order_comment_score" class="star"></Star>
                            </div>
                            <div class="c_content" v-html="commentStr(comment.comment)"></div>
                            <div class="img-wrapper" v-if="comment.comment_pics.length">
                                <img :src="item.thumbnail_url" alt="" v-for="item in comment.comment_pics">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import Star from '@/components/Star/Star'
    import Split from '@/components/Split/Split'
    var ALL = 2; // 全部
    var PICTURE = 1; // 帶圖片
    var COMMENT = 0; // 點平
    export default {
        created() {
            var that = this;
            this.$axios.get('/api/ratings')
                .then(function(response) { // 獲取到數據
                    var dataSource = response.data;
                    if (dataSource.code == 0) {
                        that.ratings = dataSource.data;

                        // init BScroll
                        that.$nextTick(()=>{
                            if(!that.scroll){
                                that.scroll=new BScroll(that.$refs.ratingView,{
                                    click:true
                                })
                            }else{
                                that.scroll.refresh()
                            }
                        })
                    }
                })
                .catch(function(error) { // 出錯處理
                    console.log(error)
                })
        },
        data() {
            return {
                ratings: [],
                selectType: 2
            }
        },
        methods: {
            selectTypeFn(type) {
                this.selectType = type;

                // 刷新操作
                this.$nextTick(()=>{
                    this.scroll.refresh()
                })
            },
            fotmatData(time){
                var data=new Date(time*1000)
                var fmt="yyyy-MM-dd"
                if(/(y+)/.test(fmt)){
                    var year=data.getFullYear().toString()
                    fmt=fmt.replace(RegExp.$1,year)
                }
                if(/(M+)/.test(fmt)){
                    var month=data.getMonth()+1;
                    if(month < 10){
                        month='0'+month
                    }
                    fmt=fmt.replace(RegExp.$1,month)
                }
                if(/(d+)/.test(fmt)){
                    var mydate=data.getDate()+1;
                    if(mydate < 10){
                        month='0'+mydate
                    }
                    fmt=fmt.replace(RegExp.$1,mydate)
                }
                return fmt;
            },
            commentStr(content){
                var rel=/#[^#]+#/g;
                return content.replace(rel,'<i style="color:#576b95;">$&</i>')
            }
        },
        computed:{
            selectComments(){
                if(this.selectType == 2){
                    return this.ratings.comments
                }else if(this.selectType == 1){
                    var arr=[];
                    this.ratings.comments.forEach((comment)=>{
                        if(comment.comment_pics.length){
                            arr.push(comment)
                        }
                    })
                    return arr;
                }else{
                    return this.ratings.comments_dp.comments
                }
            }
        },
        components: {
            Star,
            Split,
            BScroll
        }
    }
</script>
<style lang="scss" scoped>
    @import './Ratings.scss';
</style>

