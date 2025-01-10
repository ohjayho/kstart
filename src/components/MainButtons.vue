<script setup>
import { getImageUrl } from "@/utils/getImageUrl";
const btns = ["community", "support", "shopping", "application_form"];
</script>

<template>
  <section class="pb-[30px]">
    <ul class="w-full flex justify-between px-5">
      <li v-for="btn in btns" :key="btn">
        <button class="flex flex-col items-center">
          <img
            :src="getImageUrl(`src/assets/img/mainBtns/icon_${btn}.png`)"
            alt="btn"
          />
          <span class="capitalize text-xs">{{ btn.replace("_", " ") }}</span>
        </button>
      </li>
    </ul>
  </section>
</template>
