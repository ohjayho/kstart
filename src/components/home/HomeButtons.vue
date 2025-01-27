<script setup>
import { getImageUrl } from "@/utils/getImageUrl";
import { RouterLink } from "vue-router";
const btns = [
  { name: "support", link: "https://support.kstart.co.kr/ko" },
  { name: "shopping", link: "https://shop.kstart.kr/" },
  {
    name: "application_form",
    link: "https://support.kstart.co.kr/ko/categories/49351379"
  }
];
</script>

<template>
  <section class="pb-[30px]">
    <ul class="w-full flex justify-between px-5">
      <li class="w-[97px]" key="community">
        <RouterLink class="flex flex-col items-center" to="/community">
          <img src="@/assets/img/mainBtns/icon_community.png" alt="btn" />
          <span class="capitalize text-xs">Community</span>
        </RouterLink>
      </li>
      <li v-for="btn in btns" :key="btn" class="w-[97px]">
        <a class="flex flex-col items-center" :href="btn.link" target="_blank">
          <img
            :src="getImageUrl(`src/assets/img/mainBtns/icon_${btn.name}.png`)"
            alt="btn"
          />
          <span class="capitalize text-xs text-center">{{
            btn.name.replace("_", " ")
          }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>
