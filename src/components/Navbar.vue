<script setup>
import { getImageUrl } from "@/utils/getImageUrl";
import { useRoute } from "vue-router";
const navBtns = [
  {
    name: "main",
    route: "/"
  },
  {
    name: "community",
    route: "/community"
  },
  {
    name: "benefit",
    route: "/benefit"
  },
  {
    name: "setting",
    route: "/setting"
  }
];
const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <footer
    class="w-[500px] h-[70px] flex absolute bottom-0 border-t border-[#dadce0] bg-white z-10"
  >
    <button
      v-for="btn in navBtns"
      :key="btn"
      class="w-1/4 h-full flex flex-col items-center justify-center"
    >
      <img
        :src="
          getImageUrl(
            `src/assets/img/navbar/${isActiveLink(btn.route) ? 'clicked' : ''}${
              btn.name
            }.png`
          )
        "
        :alt="btn.name"
        class="w-6 m-1"
      />
      <span
        :class="`text-xs capitalize ${
          isActiveLink(btn.route) ? 'text-[#2760ed]' : ''
        }`"
        >{{ btn.name }}</span
      >
    </button>
  </footer>
</template>
