<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <header
    class="sticky top-0 w-full flex justify-between h-15 px-5 py-[11px] bg-white z-10"
  >
    <button @click="goBack">
      <img src="/img/leftArrow.png" alt="left arrow" class="h-6" />
    </button>
    <button>
      <img src="/img/dots.svg" alt="dots" class="h-6" />
    </button>
  </header>
</template>
