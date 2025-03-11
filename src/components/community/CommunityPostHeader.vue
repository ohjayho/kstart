<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import CommunityPostPopup from "./CommunityPostPopup.vue";

defineProps({
  postId: String
});

const router = useRouter();
const goBack = () => {
  router.go(-1);
};

const popupOpen = ref(false);

const handleClickPopup = () => {
  popupOpen.value = true;
  activePopup.value = true;
  console.log("helo");
};

const activePopup = ref(null);

const handleClickOutside = (e) => {
  if (activePopup.value !== null) {
    const popupElement = document.querySelector(".post-detail-popup");
    if (popupElement && !popupElement.contains(e.target)) {
      popupOpen.value = false;
      activePopup.value = null;
    }
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header
    class="sticky top-0 w-full flex justify-between h-15 px-5 py-[11px] bg-white z-10"
  >
    <button @click="goBack">
      <img src="/img/leftArrow.png" alt="left arrow" class="h-6" />
    </button>
    <button @click="handleClickPopup" class="post-detail-popup relative">
      <img src="/img/dots.svg" alt="dots" class="h-6" />
      <CommunityPostPopup v-if="popupOpen" :postId="postId" />
    </button>
  </header>
</template>
