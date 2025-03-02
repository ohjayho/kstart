<script setup>
import { useRouter } from "vue-router";
import CommunityCategoryBadge from "./CommunityCategoryBadge.vue";
import { getImageUrl } from "@/utils/getImageUrl";

defineProps({
  posts: Array
});

const router = useRouter();
const goToDetail = (post) => {
  router.push({
    path: "/community/1",
    query: {
      user: post.user,
      date: post.date,
      category: post.category,
      title: post.title,
      description: post.description,
      img: post.img,
      likes: post.likes,
      comments: post.comments
    }
  });
};
</script>

<template>
  <div v-if="!posts.length" class="posts-empty mt-5">
    <h1 class="text-center text-[#6d7280]">게시글이 없습니다.</h1>
  </div>
  <div
    v-for="post in posts"
    class="post-container p-4 border-t border-b border-gray"
    @click="goToDetail(post)"
  >
    <div class="post-header mb-2 flex items-center justify-between">
      <CommunityCategoryBadge :text="post.category" />
      <span>···</span>
      <div class="more hidden">
        <div class="report-container">Report</div>
        <div class="hide-container">Block User</div>
      </div>
    </div>
    <div class="post-main w-full mb-3 flex">
      <div class="post-text-container flex-grow overflow-hidden">
        <h1 class="post-title text-base mb-2">{{ post.title }}</h1>
        <p
          class="post-description text-sm overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {{ post.description }}
        </p>
      </div>
      <div
        class="post-img w-20 h-20 flex flex-shrink-0 justify-center items-center overflow-hidden"
      >
        <img :src="getImageUrl(post.img)" alt="img" class="object-contain" />
      </div>
    </div>
    <div class="post-footer flex justify-between">
      <div class="footer-left flex items-center gap-4 text-sm">
        <div class="like-container flex items-center">
          <img src="/img/post/icon-like.svg" alt="icon-comment" />
          <span class="ml-1">{{ post.likes }}</span>
        </div>
        <div class="comments-container flex items-center">
          <img src="/img/post/icon-comment.svg" alt="icon-comment" />
          <span class="ml-1">{{ post.comments }}</span>
        </div>
        <div class="share flex items-center">
          <img src="/img/post/icon-share.svg" alt="icon-comment" />
        </div>
      </div>
      <div class="footer-right">
        <span class="text-sm">{{ post.date }}</span>
      </div>
    </div>
  </div>
</template>
