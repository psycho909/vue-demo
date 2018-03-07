<template>
    <transition name="slide-down">
        <div class="ta-dialog_wrapper" v-if="isShow">
            <div class="ta-dialog">
                <div class="ta-dialog_header">
                    <span>{{title}}</span>
                    <i class="ios-close-empty" @click="handleCancel()"></i>
                </div>
                <div class="ta-dialog_body">
                    <slot></slot>
                </div>
                <div class="ta-dialog_footer">
                    <button @click="handleCancel()">取消</button>
                    <button @click="handleOk()">确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'Dialog',
        props: {
            title: {
                type: String,
                default: '標題'
            }
        },
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            handleCancel() {
                this.isShow = false;
                this.$emit('cancel')
            },
            handleOk() {
                this.isShow = true;
                this.$emit('ok')
            }
        }
    }
</script>
<style scoped>
    .ta-dialog_wrapper {
        border: 1px solid #000;
        width: 220px;
        padding: 12px;
        border-radius: 12px;
        transform: translateY(50%);
    }
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: all .5s;
    }
    .slide-down-enter,
    .slide-down-leave-to{
        opacity: 0;
        transform: translateY(-50%);
    }
    .slide-down-enter-to,
    .slide-down-leave{
        opacity: 1;
        transform: translateY(50%);
    }
</style>


