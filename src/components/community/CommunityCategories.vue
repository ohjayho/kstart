<script setup>
import { ref } from "vue";

const categories = [
  "All",
  "Photo Contest",
  "News",
  "Life Tip",
  "Q&A",
  "Event",
  "Free Talk"
];
const curCategory = ref("All");
const onClick = (category) => {
  curCategory.value = category;
};
</script>

<template>
  <div class="categories-container flex gap-2 flex-wrap p-4">
    <button
      v-for="category in categories"
      :key="category"
      class="text-[13px] border px-5 py-2 rounded-2xl relative"
      :class="
        category === curCategory
          ? 'bg-[#2760ee] text-white border-[#C6E2FF]'
          : 'bg-white text-[#6d7280] border-[#e6e8ed]'
      "
      @click="onClick(category)"
    >
      {{ category }}
      <span
        v-if="category === 'Photo Contest'"
        class="absolute bg-[#dc3243] -top-2 -left-1 rounded-full w-5 h-5 text-white font-extralight"
        >N</span
      >
    </button>
    <div class="posts-container">
      <div class="post-header"></div>
      <h1 class="post-title"></h1>
      <div class="post-footer"></div>
    </div>
  </div>
</template>
