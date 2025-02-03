<script setup>
defineProps({
  item: Object,
  index: Number
});
</script>

<template>
  <swiper-slide>
    <a :href="item.link" target="_blank">
      <div
        class="max-w-[152px] h-[232px] flex flex-col items-center p-2 shadow-[0_4px_12px_#0a0f150a]"
      >
        <img :src="item.src" alt="" class="w-[100px] h-[100px]" />
        <div
          class="card-body h-[86px] flex flex-col justify-between text-[12px]"
        >
          <p>{{ item.name }}</p>
          <div class="w-full flex justify-between text-[14px] font-bold">
            <span>{{ item.price + "원" }}</span>
            <span class="text-[#2760EE]">{{ item.discount + "%" }}</span>
          </div>
          <div class="flex items-center w-full text-white text-[10px]">
            <span
              v-if="item.best"
              class="flex justify-center items-center w-[41px] h-5 bg-[#2760ee] rounded-xl px-2 py-0.5"
              >BEST</span
            >
            <span
              v-if="item.new"
              class="flex justify-center items-center w-[41px] h-5 bg-[#59d683] rounded-xl px-2 py-0.5 ml-1"
              >NEW</span
            >
          </div>
        </div>
      </div>
    </a>
  </swiper-slide>
</template>
