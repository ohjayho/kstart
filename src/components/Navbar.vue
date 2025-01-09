<script setup>
const navBtns = [
  {
    name: "Main",
    src: "src/assets/img/navbar/main.png"
  },
  {
    name: "Community",
    src: "src/assets/img/navbar/community.png"
  },
  {
    name: "Benefit",
    src: "src/assets/img/navbar/benefit.png"
  },
  {
    name: "Setting",
    src: "src/assets/img/navbar/setting.png"
  }
];

function getImageUrl(src) {
  const baseUrl = window.location.origin;
  return new URL(src, baseUrl).href;
}
</script>

<template>
  <footer
    class="w-[500px] h-[70px] flex absolute bottom-0 border-t border-[#dadce0] bg-white z-10"
  >
    <button
      v-for="btn in navBtns"
      class="w-1/4 h-full flex flex-col items-center justify-center"
    >
      <img :src="getImageUrl(btn.src)" :alt="btn.name" class="w-6 m-1" />
      <span class="text-xs">{{ btn.name }}</span>
    </button>
  </footer>
</template>
