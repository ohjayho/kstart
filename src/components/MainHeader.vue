<script setup></script>

<template>
  <header
    class="w-[500px] h-[60px] absolute top-0 z-10 flex justify-between items-center px-5 bg-white"
  >
    <div>
      <img src="@/assets/img/header/logo.png" alt="" class="h-[30px]" />
    </div>
    <div class="w-[152.8px] flex justify-between">
      <button
        class="w-[102.8px] flex justify-between items-center border border-[#dadce0] rounded-2xl px-[10px] h-8"
      >
        <img src="@/assets/img/header/bubble.png" alt="" class="h-[24px]" />
        <span class="text-sm">Support</span>
      </button>
      <button>
        <img src="@/assets/img/header/ko.png" alt="" class="h-[28px]" />
      </button>
    </div>
  </header>
</template>
