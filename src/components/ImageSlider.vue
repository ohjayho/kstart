<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";

const slider = ref(null);
const isDragging = ref(false);
const hasDragged = ref(false);
const state = reactive({
  startX: 0,
  scrollLeft: 0,
  activeSlide: 0
});

const images = [
  "@/assets/img/sliderImg/first.png",
  "@/assets/img/sliderImg/second.png",
  "@/assets/img/sliderImg/first.png"
];

const scrollToSlide = (index) => {
  const slideWidth = slider.value.offsetWidth;
  slider.value.scrollTo({
    left: index * slideWidth,
    behavior: "smooth"
  });
  state.activeSlide = index;
};

const updateActiveSlide = () => {
  const slideWidth = slider.value.offsetWidth;
  state.activeSlide = Math.round(slider.value.scrollLeft / slideWidth);
};

const getPageX = (e) => {
  return e.touches ? e.touches[0].pageX : e.pageX;
};

const onMousedown = (e) => {
  e.preventDefault();
  slider.value.classList.remove("snap-x");
  slider.value.classList.remove("snap-mandatory");
  isDragging.value = true;
  hasDragged.value = false;
  state.startX = getPageX(e) - slider.value.offsetLeft;
  state.scrollLeft = slider.value.scrollLeft;
  console.log("abc");
};

const onMousemove = (e) => {
  if (!isDragging.value) return;
  hasDragged.value = true;
  const x = getPageX(e) - slider.value.offsetLeft;
  const walk = (x - state.startX) * 1.5;
  slider.value.scrollLeft = state.scrollLeft - walk;
  // console.log(
  //   `pageX:${e.pageX}, offsetLeft:${slider.value.offsetLeft}, startX:${state.startX}`
  // );
  console.log("Dragging...", {
    walk,
    calculate: state.scrollLeft - walk,
    curSlider: slider.value.scrollLeft
  });
};

const onMouseup = (e) => {
  isDragging.value = false;
  slider.value.classList.add("snap-x");
  slider.value.classList.add("snap-mandatory");
};

const onScroll = () => {
  updateActiveSlide();
};

const onLinkClick = (e) => {
  if (hasDragged.value) {
    e.preventDefault();
  }
};

onMounted(() => {
  slider.value.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  slider.value.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div class="slider-wrapper relative w-[500px] h-[390px]">
    <div
      class="slider w-full h-full overflow-hidden overflow-x-scroll no-scrollbar"
      ref="slider"
      @mousedown="onMousedown"
      @mousemove="onMousemove"
      @mouseup="onMouseup"
      @mouseleave="onMouseup"
      @touchstart="onMousedown"
      @touchmove="onMousemove"
      @touchend="onMouseup"
    >
      <div class="w-max h-full flex" @click="onLinkClick">
        <a
          href="https://support.kstart.co.kr/ko"
          target="_blank"
          class="mr-1 snap-start"
        >
          <img src="@/assets/img/sliderImg/first.png" alt="First Image" />
        </a>
        <a
          href="https://support.kstart.co.kr/ko"
          target="_blank"
          class="mr-1 snap-start"
        >
          <img src="@/assets/img/sliderImg/second.png" alt="Second Image" />
        </a>
        <a
          href="https://support.kstart.co.kr/ko"
          target="_blank"
          class="mr-1 snap-start"
        >
          <img src="@/assets/img/sliderImg/third.png" alt="Third Image" />
        </a>
      </div>
      <div
        class="pagination-bullets absolute left-1/2 bottom-6 transform -translate-x-1/2"
      >
        <button
          v-for="(_, index) in images"
          @click="scrollToSlide(index)"
          class="bullet w-1.5 h-1.5 rounded-full mx-1"
          :class="
            state.activeSlide === index
              ? 'bg-white'
              : 'bg-[rgba(255,255,255,0.3)]'
          "
        ></button>
      </div>
    </div>
  </div>
</template>
