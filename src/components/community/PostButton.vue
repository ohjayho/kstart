<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const addPost = () => {
  router.push("/post");
};
</script>

<template>
  <button
    @click="addPost"
    class="w-[52px] h-[52px] rounded-full bg-[#2760ee] px-2 py-[15px] sticky top-0"
  >
    +
  </button>
</template>
