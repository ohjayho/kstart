<script setup>
defineProps({
  text: String
});

const colors = {
  All: "#2760ee",
  "Photo Contest": "#4f97d1",
  News: "#e67e22",
  "Life Tip": "#2ecc71",
  "Q&A": "#8e44ad",
  "Free Talk": "#f39c12"
};
</script>

<template>
  <span
    class="category-badge text-white rounded-md text-xs px-1 py-0.5"
    :style="{ backgroundColor: colors[text] }"
    >{{ text }}</span
  >
</template>
