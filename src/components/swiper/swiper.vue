<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item of imgs" :key="item.id">
                <img :src="item.picUrl" class="swiper-img">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'commonSwiper',
        props: {
            imgs: Array
        },
        data() {
            return {
                swiperOption: {
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        bulletActiveClass: 'my-bullet-active',
                    },
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style scoped lang="stylus">
    .wrapper >>> .my-bullet-active
        background #fff
        opacity 1
    .swiper-slide
      width 100%
      height 150px
      .swiper-img
        width 100%
</style>
