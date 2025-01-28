<script setup>
import { ref } from "vue";

const isPushOn = ref(false);
const onToggle = () => {
  isPushOn.value = !isPushOn.value;
  console.log(isPushOn.value);
};
</script>

<template>
  <button
    class="toggle-wrapper w-[38px] h-[20px] rounded-xl border-2 border-t-2 border-b-2 flex items-center relative transition-all"
    :class="
      isPushOn
        ? 'bg-[#2760ed] border-[#2760ed]'
        : 'bg-[#dcdfe6] border-[#dcdfe6]'
    "
    @click="onToggle"
  >
    <div
      class="toggle-switch w-4 h-4 bg-white rounded-full absolute transition-all"
      :class="isPushOn ? 'translate-x-[18px]' : 'translateX-0'"
    ></div>
  </button>
</template>
