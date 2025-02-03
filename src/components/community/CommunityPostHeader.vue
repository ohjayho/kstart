<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <header class="sticky top-0 w-full h-15 px-5 py-[11px] bg-white">
    <button @click="goBack">
      <img src="@/assets/img/leftArrow.png" alt="left arrow" class="h-6" />
    </button>
  </header>
</template>
