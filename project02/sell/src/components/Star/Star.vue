<template>
    <div class="star">
        <!-- itemClas: on, half, off -->
        <span v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="star-item"></span>
    </div>
</template>
<script>
    // 星星的長度
    const LENGTH=5;
    // 星星對應CLASS
    const CLS_ON="on";
    const CLS_HALF="half";
    const CLS_OFF="off";

    export default {
        props:{
            score:{
                type:Number
            }
        },
        data() {
            return {

            }
        },
        computed:{
            itemClasses(){
                let result=[];
                // console.log(this.score)
                //對分數進行處理，向下取0.5倍數
                let score=Math.floor(this.score*2)/2
                // 小數，控制半星
                let hasDecimal=score % 1 !== 0;
                // console.log('hasDecimal: '+hasDecimal)
                // 整數，控制全星
                let integer=Math.floor(score);
                // console.log('integer: '+integer)
                // 全星
                for(let i=0;i<integer;i++){
                    result.push(CLS_ON)
                }
                //半星
                if(hasDecimal){
                    result.push(CLS_HALF)
                }
                // 補齊
                while(result.length < LENGTH){
                    result.push(CLS_OFF)
                }
                // console.log(result)
                return result;
            }
        }
    }
</script>
<style lang="scss">
    .star{
        font-size: 0;
        .star-item{
            display: inline-block;
            width: 10px;
            height: 10px;
            margin-right: 3px;
            background-repeat: no-repeat;
            background-size: 10px 10px;
            &:last-child{
                margin-right: 0;
            }
        }
        // 對應三種狀態
        .on{
            background-image: url('./star24_on@2x.png');
        }
        .half{
            background-image: url('./star24_half@2x.png');
        }
        .off{
            background-image: url('./star24_off@2x.png');
        }
    }
</style>
