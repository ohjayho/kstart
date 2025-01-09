<script setup>
import ImageSlider from "./ImageSlider.vue";
import { register } from "swiper/element/bundle";
register();
</script>

<template>
  <div class="pt-[60px] pb-[70px]">
    <!-- <ImageSlider /> -->
    <swiper-container
      pagination="true"
      autoplay-delay="2000"
      loop="true"
      disable-on-interaction="false"
      style="
        --swiper-pagination-color: #fff;
        --swiper-pagination-bullet-size: 5px;
      "
    >
      <swiper-slide>
        <a href="https://support.kstart.co.kr/ko" target="_blank">
          <img src="@/assets/img/sliderImg/first.png" alt="First Image" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="https://support.kstart.co.kr/ko" target="_blank">
          <img src="@/assets/img/sliderImg/second.png" alt="Second Image" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="https://support.kstart.co.kr/ko" target="_blank">
          <img src="@/assets/img/sliderImg/third.png" alt="Third Image" />
        </a>
      </swiper-slide>
    </swiper-container>
  </div>
</template>
