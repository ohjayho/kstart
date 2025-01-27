<script setup>
import NewBadge from "../NewBadge.vue";
</script>

<template>
  <header
    class="w-[500px] max-w-full h-[60px] fixed top-0 z-10 flex justify-between items-center px-5 bg-white"
  >
    <div>
      <img src="@/assets/img/header/logo.png" alt="" class="h-[30px]" />
    </div>
    <div class="flex">
      <button class="flex justify-between items-center mr-3 relative">
        <img src="@/assets/img/header/inbox.png" alt="btn_inbox" class="w-7" />
        <NewBadge class="w-3 h-3 text-[0.6rem] top-0 -right-0" />
      </button>
      <button>
        <img src="@/assets/img/header/ko.png" alt="" class="h-[28px]" />
      </button>
    </div>
  </header>
</template>
