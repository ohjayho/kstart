<script setup>
import { register } from "swiper/element/bundle";
register();
</script>

<template>
  <swiper-container
    pagination="true"
    autoplay-delay="2000"
    loop="true"
    disable-on-interaction="false"
    style="
      --swiper-pagination-color: #fff;
      --swiper-pagination-bullet-size: 5px;
    "
    class="pt-[60px]"
  >
    <swiper-slide>
      <a href="https://support.kstart.co.kr/ko" target="_blank">
        <img src="/img/sliderImg/first.png" alt="First Image" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="https://support.kstart.co.kr/ko" target="_blank">
        <img src="/img/sliderImg/second.png" alt="Second Image" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="https://support.kstart.co.kr/ko" target="_blank">
        <img src="/img/sliderImg/third.png" alt="Third Image" />
      </a>
    </swiper-slide>
  </swiper-container>
</template>
