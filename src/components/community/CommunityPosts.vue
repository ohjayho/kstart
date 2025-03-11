<script setup>
import { useRouter } from "vue-router";
import CommunityCategoryBadge from "./CommunityCategoryBadge.vue";
import { getImageUrl } from "@/utils/getImageUrl";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import { computed, onMounted, onUnmounted, ref, watchEffect } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/initializeFirebase";
import Loading from "../Loading.vue";
import { useAuth } from "@/firebase/checkAuth";
import CommunityPostPopup from "./CommunityPostPopup.vue";

const props = defineProps({
  curCategory: String
});

const posts = ref([]);

const { isLoggedIn, nickname } = useAuth();

const filteredPosts = computed(() => {
  return props.curCategory === "All"
    ? posts.value
    : posts.value.filter((post) => post.category === props.curCategory);
});

const popups = ref([]);

watchEffect(() => {
  popups.value = filteredPosts.value.map(() => false);
});

const router = useRouter();

const loadingPosts = ref(false);

const goToDetail = (post) => {
  router.push({
    path: `/community/${post.id}`,
    query: {
      id: post.id
    }
  });
};

const togglePopup = (idx, e) => {
  e.stopPropagation();
  popups.value[idx] = !popups.value[idx];
  activePopup.value = popups.value[idx] ? idx : null;
};

const activePopup = ref(null);

const handleClickOutside = (e) => {
  if (activePopup.value !== null) {
    const popupElement = document.querySelector(".post-popup");
    if (popupElement && !popupElement.contains(e.target)) {
      popups.value[activePopup.value] = false;
      activePopup.value = null;
    }
  }
};

onMounted(() => {
  loadingPosts.value = true;
  onSnapshot(collection(db, "posts"), (querySnapshot) => {
    const fbPosts = [];
    querySnapshot.forEach((doc) => {
      const post = {
        id: doc.id,
        user: doc.data().user,
        date: doc.data().date,
        category: doc.data().category,
        title: doc.data().title,
        description: doc.data().description,
        img: doc.data().img,
        likes: doc.data().likes,
        comments: doc.data().commentCount
      };
      fbPosts.push(post);
      // console.log(doc.id, "=>", doc.data());
    });
    const sortedPosts = fbPosts.sort((a, b) => {
      return b.date?.seconds - a.date?.seconds;
    });
    posts.value = sortedPosts;
    loadingPosts.value = false;
  });
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    v-if="loadingPosts"
    class="posts-loading flex justify-center items-center mt-5"
  >
    <Loading />
  </div>
  <div v-if="!filteredPosts.length && !loadingPosts" class="posts-empty mt-5">
    <h1 class="text-center text-[#6d7280]">게시글이 없습니다.</h1>
  </div>
  <div
    v-for="(post, idx) in filteredPosts"
    :key="post.id"
    class="post-container py-4 border-t border-b border-gray"
    @click="goToDetail(post)"
  >
    <div class="post-header mb-2 flex items-center justify-between">
      <CommunityCategoryBadge :text="post.category" />
      <button
        v-if="isLoggedIn && nickname === post.user"
        @click="togglePopup(idx, $event)"
        class="relative"
      >
        <span>···</span>
        <CommunityPostPopup v-if="popups[idx]" :postId="post.id" />
      </button>
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
        <img
          v-if="post.img"
          :src="getImageUrl(post.img)"
          alt="img"
          class="object-contain"
        />
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
        <span class="text-sm">{{
          post.date ? formatTimeAgo(post.date.seconds) : "No date Available"
        }}</span>
      </div>
    </div>
  </div>
</template>
