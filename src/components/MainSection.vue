<script setup>
import ImageSlider from "./ImageSlider.vue";
import { register } from "swiper/element/bundle";
register();
</script>

<template>
  <div class="pt-[70px] pb-[60px]">
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
        <img src="@/assets/img/sliderImg/first.png" alt="First Image" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/sliderImg/second.png" alt="Second Image" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/sliderImg/third.png" alt="Third Image" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>
