<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  <div>
    <!-- <swiper class="swiper-container">
      <swiper-slide
        class="swiper-slide"
        v-for="(banner, index) in banners"
        :key="index"
      >
        <img
          style="width: 100%; height: 200px"
          :src="'./src/assets/' + banner"
          alt=""
        />
      </swiper-slide>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div> -->
      <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <!-- <div class="swiper-button-next"></div> -->
      <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <!-- </swiper> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";

export default defineComponent({
  name: "ps-picshow",
  components: {},
  props: {},
  setup() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    const banners = [
      "th1.jpg",
      "th2.jpg",
      "th3.jpg",
      "th4.jpg",
    ]
    return {
      banners,
      swiper
    };
  },
});
</script>

<style scoped>
 html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
	  transition: 300ms;
	  transform: scale(0.8);
    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);
	}
</style>

