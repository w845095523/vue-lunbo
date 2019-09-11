<template>
    <div class="hello">
        <Carousel :count="2"></Carousel>
        <Carousel :count="5"></Carousel>
        <Carousel :count="10"></Carousel>
    </div>
</template>
<script>
import Carousel from '../components/carousel'
export default {
    props:{

    },
    components:{
        Carousel:Carousel
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

    }
}
</script>
<style scoped lang="">

</style>