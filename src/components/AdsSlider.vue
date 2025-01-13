<script setup>
const ads = [1, 2, 3];
</script>

<template>
  <swiper-container
    class="px-5"
    pagination="true"
    autoplay-delay="2000"
    loop="{}"
    disable-on-interaction="false"
    style="
      --swiper-pagination-color: #fff;
      --swiper-pagination-bullet-size: 5px;
    "
  >
    <swiper-slide v-for="ad in ads">
      <a class="flex justify-center">
        <div class="flex h-[219px]">
          <img
            :src="'src/assets/img/ads/ads_' + ad + '.png'"
            alt="shopping_button"
            class="rounded-xl"
          />
        </div>
      </a>
    </swiper-slide>
  </swiper-container>
</template>
