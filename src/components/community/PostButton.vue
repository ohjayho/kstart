<script setup>
import { useAuth } from "@/firebase/checkAuth";
import { useRouter } from "vue-router";
const router = useRouter();
const { isLoggedIn } = useAuth();

const addPost = () => {
  if (!isLoggedIn.value) {
    alert("로그인 해주세요.");
    router.push("/login");
  } else {
    router.push("/post");
  }
};
</script>

<template>
  <button
    @click="addPost"
    class="w-[52px] h-[52px] flex justify-center items-center text-[25px] text-white rounded-full bg-[#2760ee] px-2 py-[15px] fixed bottom-[80px]"
    :style="{ right: 'calc((100vw - min(100vw,500px))/2 + 5px' }"
  >
    +
  </button>
</template>
