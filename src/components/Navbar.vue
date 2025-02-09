<script setup>
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
  const link = route.path.split("/")[1];
  const activeLink = link.length ? "/" + link : "/";
  return activeLink === routePath;
};
</script>

<template>
  <footer
    class="w-[500px] max-w-full h-[70px] flex fixed bottom-0 border-t border-[#dadce0] bg-white z-10"
  >
    <RouterLink
      v-for="btn in navBtns"
      :key="btn"
      :to="btn.route"
      class="w-1/4 h-full flex flex-col items-center justify-center hover:bg-[#f5f7fa]"
    >
      <img
        :src="`/img/navbar/${
          isActiveLink(btn.route)
            ? 'clicked' + btn.name.charAt(0).toUpperCase() + btn.name.slice(1)
            : btn.name
        }.png`"
        :alt="btn.name"
        class="w-6 m-1"
      />
      <span
        :class="`text-xs capitalize ${
          isActiveLink(btn.route) ? 'text-[#2760ed]' : ''
        }`"
        >{{ btn.name }}</span
      >
    </RouterLink>
  </footer>
</template>
