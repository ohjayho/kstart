<script setup>
import { ref } from "vue";
import NewBadge from "../NewBadge.vue";

const props = defineProps({
  newPost: Boolean
});

const categories = [
  "All",
  "Photo Contest",
  "News",
  "Life Tip",
  "Q&A",
  "Event",
  "Free Talk"
];
const curCategory = ref(props.newPost ? "Photo Contest" : "All");
const emit = defineEmits(["updateCategory"]);
const onClick = (category) => {
  curCategory.value = category;
  emit("updateCategory", curCategory.value);
};
</script>

<template>
  <div class="categories-container $attrs.class flex gap-2 flex-wrap py-4">
    <template v-for="category in categories" :key="category">
      <button
        v-if="!(category === 'All' && newPost)"
        class="text-[13px] border px-5 py-2 rounded-2xl relative"
        :class="
          category === curCategory
            ? 'bg-[#2760ee] text-white border-[#C6E2FF]'
            : 'bg-white text-[#6d7280] border-[#e6e8ed]'
        "
        @click="onClick(category)"
      >
        {{ category }}
        <NewBadge v-if="category === 'Photo Contest'" class="-left-1 w-5 h-5" />
      </button>
    </template>
  </div>
</template>
