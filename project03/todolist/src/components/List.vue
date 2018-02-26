<template>
    <div class="view">
        <h1 class="title">{{title}}</h1>
        <input type="text" v-model="newStr" v-on:keyup.enter="addData">
        <ul>
            <li v-for="(item,index) in items" v-bind:key="item.id" v-bind:class="{finsh:item.isFinished}" v-on:click="toggleFinish(item)">
                <span>{{item.text}}</span>
                <button class="del" v-on:click="delData(index)">X</button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'List',
        data() {
            return {
                title:'TodoList',
                items:[
                    {
                        text:'Today',
                        isFinished:false
                    },
                    {
                        text:'Babala',
                        isFinished:true
                    }
                ],
                newStr:''
            }
        },
        methods:{
            toggleFinish:function(item){
                item.isFinished=!item.isFinished;
                // console.log(item)
            },
            addData:function(){
                this.items.push({text:this.newStr,isFinished:false});

                // 將輸入框數 傳遞給父組件
                // 觸發myMsg事件，並且傳遞參數
                this.$emit("myMsg",this.newStr)
                
                this.newStr='';
            },
            delData:function(index){
                this.items.splice(index,1)
                //console.log(index)
            }
        }
    }
</script>
<style>
.view{
    width: 400px;
    border:1px solid gray;
    margin: 20px auto;
}
.view .title{
    border-bottom:1px solid gray;
}
.view ul li{
    margin: 10px 0;
    list-style: none;
    cursor: pointer;
}
.view .finsh{
    color:gray;
    text-decoration:line-through;
}

</style>

