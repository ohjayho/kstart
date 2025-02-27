<script setup>
import { useRouter } from "vue-router";

defineProps({
  title: String
});

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<template>
  <header
    class="w-[500px] max-w-full h-[60px] fixed top-0 z-20 flex justify-center items-center px-5 bg-white"
  >
    <button @click="goBack" class="absolute left-6">
      <img src="/img/leftArrow.png" alt="" class="h-6" />
    </button>
    <h1 class="text-lg font-bold">{{ title }}</h1>
  </header>
</template>
