<script setup>
import { RouterLink } from "vue-router";
import NewBadge from "./NewBadge.vue";
</script>

<template>
  <header
    class="w-[500px] max-w-full h-[60px] fixed top-0 z-20 flex justify-between items-center px-5 bg-white"
  >
    <RouterLink to="/">
      <img src="/img/logo.png" alt="" class="h-[30px]" />
    </RouterLink>
    <div class="flex">
      <RouterLink
        to="/inbox"
        class="flex justify-between items-center mr-3 relative"
      >
        <img src="/img/header/inbox.png" alt="btn_inbox" class="w-7" />
        <NewBadge class="w-3 h-3 text-[0.6rem] top-0 -right-0" />
      </RouterLink>
      <button>
        <img src="/img/header/ko.png" alt="" class="h-[28px]" />
      </button>
    </div>
  </header>
</template>
