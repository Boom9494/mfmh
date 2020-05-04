<template>
  <div class="swiperBox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">
          <img src="../../../public/img/ban1.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/img/ban2.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/img/ban3.jpg" alt="" />
        </div> -->
        <slot></slot>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper',
  mounted () {
    /* eslint-disable */
    new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }
    });
    /* eslint-enable */
  }
}
</script>

<style lang="scss" scoped>
.swiperBox {
  margin: 10px 0 18px 0;
}
.swiper-container {
  width: 338px;
  height: 208px;
  img {
    width: 100%;
  }
}
</style>
