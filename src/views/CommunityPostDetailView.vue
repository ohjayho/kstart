<script setup>
import CommunityCategoryBadge from "@/components/community/CommunityCategoryBadge.vue";
import CommunityPostCommentSection from "@/components/community/CommunityPostCommentSection.vue";
import CommunityPostHeader from "@/components/community/CommunityPostHeader.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = route.query;
</script>

<template>
  <CommunityPostHeader />
  <div class="community-post-detail-container pb-[70px] px-4">
    <div class="user-info flex items-center mt-3 mb-3">
      <img
        src="/img/setting/user-picture.png"
        alt="user-picture"
        class="w-12 h-12 rounded-full mr-3"
      />
      <div class="post-detail flex flex-col">
        <div class="profile-section flex gap-1.5 items-center">
          <CommunityCategoryBadge :text="post.category" />
          <span>·</span>
          <span class="post-date text-xs">{{ post.date }}</span>
        </div>
        <span class="user-name text-base">{{ post.user }}</span>
      </div>
    </div>
    <h1 class="post-title text-lg mt-5 mb-3">{{ post.title }}</h1>
    <p class="mb-3">{{ post.description }}</p>
    <img
      v-if="post.img"
      :src="post.img"
      alt=""
      class="post-image w-full h-full"
    />
    <CommunityPostCommentSection :comments="post.comments" />
  </div>
</template>
