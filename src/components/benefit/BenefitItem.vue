<script setup>
import { ref, Transition } from "vue";

defineProps({
  title: String,
  description: Array,
  img: String
});
const show = ref(true);
const onClick = (e) => {
  e.target.classList.toggle("rotate-45");
  show.value = !show.value;
};
</script>

<template>
  <div class="benefit-item w-full max-w-[335px] px-5 py-2 rounded-xl">
    <div class="benefit-title flex items-center justify-between">
      <div class="benefit-title-left flex items-center">
        <img :src="img" alt="benefit-shopping" class="w-[55px] mr-3" />
        <span>{{ title }}</span>
      </div>
      <span class="text-2xl transition-transform rotate-45" @click="onClick"
        >+</span
      >
    </div>
    <Transition name="show">
      <div v-if="show" class="benefit-description">
        <ul class="list-disc py-3 pl-5 font-medium text-sm">
          <li v-for="desc in description">{{ desc }}</li>
        </ul>
        <p></p>
      </div>
    </Transition>
  </div>
</template>
<style>
.show-enter-active,
.show-leave-active {
  transition: all 0.5s ease;
}
.show-enter-from,
.show-leave-to {
  opacity: 0;
  max-height: 0;
}
.show-enter-to,
.show-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
