<template>
    <div>
        <img :src="img" alt="">
        <div>{{welcome}}</div>
        <button @click="toFirst">第一页</button>
        <button @click="showLoading()">进度条</button>
    </div>

</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                img:'../../static/images/collected.png',
                welcome:'welcom to my vue sdff'
            }
        },
        methods:{
            showLoading(){
                console.log(111)
                this.$Loading.start();
            },
            toFirst(){
                this.$router.push({
                    path:'/first'
                })
            }
        }
    }
</script>

<style scoped>

</style>