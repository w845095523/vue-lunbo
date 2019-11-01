<template>
    <div class="carousel-wrap">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in list">
                    <a :href="item.link">
                        <img :src="item.pic" alt="">
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { setTimeout } from 'timers';
export default {
    props:['count'],
    components:{

    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){
        //打印父组件通过props传过来的自定义属性count
        console.log(this.count)
        axios.post('/carousel',{count:this.count}).then(res=>{
            console.log(res.data.list)
            this.list = res.data.list
        })
        setTimeout(()=>{
            new swiper('.swiper-container',{
            autoplay:true,
            pagination:{
                el:'.swiper-pagination'
            },
            loop:true
        })
        },200)
    }
}
</script>
<style scoped lang="scss">
    .carousel-wrap{
        height: 300px;
        height: 300px;
        border: 1px solid #666;
    }
</style>