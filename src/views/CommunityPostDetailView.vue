<script setup>
import CommunityCategoryBadge from "@/components/community/CommunityCategoryBadge.vue";
import CommunityPostCommentSection from "@/components/community/CommunityPostCommentSection.vue";
import CommunityPostHeader from "@/components/community/CommunityPostHeader.vue";
import CommunityWriteComment from "@/components/community/CommunityWriteComment.vue";
import Loading from "@/components/Loading.vue";
import { db } from "@/firebase/initializeFirebase";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import { doc, onSnapshot } from "firebase/firestore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const postId = route.query.id;
const loadingPost = ref(false);
const post = ref({});

onMounted(() => {
  loadingPost.value = true;
  const docRef = doc(db, "posts", postId);
  onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      post.value = {
        id: docSnap.id,
        ...docSnap.data(),
        date: formatTimeAgo(docSnap.data().date.seconds)
      };
    }
    loadingPost.value = false;
  });
});
</script>

<template>
  <CommunityPostHeader :postId="postId" />
  <div class="community-post-detail-container pb-[70px] px-4 relative">
    <div class="user-info flex items-center mt-3 mb-3">
      <img
        src="/img/setting/user-picture.png"
        alt="user-picture"
        class="w-12 h-12 rounded-full mr-3"
      />
      <Loading v-if="loadingPost" />
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
    <Loading v-if="loadingPost" />
    <img
      v-if="post.imgUrl"
      :src="post.imgUrl"
      alt=""
      class="post-image w-full h-full"
    />
    <CommunityWriteComment :postId="postId" />
    <CommunityPostCommentSection :postId="postId" />
  </div>
</template>
