<script setup>
import CommunityCategories from "@/components/community/CommunityCategories.vue";
import CommunityPosts from "@/components/community/CommunityPosts.vue";
import SearchBar from "@/components/community/SearchBar.vue";
import postsData from "@/assets/postsData.json";
import { ref } from "vue";
import PostButton from "@/components/community/PostButton.vue";

// const posts = ref(postsData);

const curCategory = ref("All");
const handleUpdateCategory = (category) => {
  curCategory.value = category;
};
</script>

<template>
  <div class="community-view-container pb-[70px] relative px-4">
    <SearchBar />
    <CommunityCategories @updateCategory="handleUpdateCategory" />
    <CommunityPosts :curCategory="curCategory" />
    <PostButton />
  </div>
</template>
