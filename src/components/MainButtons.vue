<script setup>
const btns = ["community", "support_cetner", "shopping", "application_form"];

const getImageUrl = (src) => {
  const baseUrl = window.location.origin;
  return new URL(src, baseUrl).href;
};
</script>

<template>
  <section>
    <ul>
      <li v-for="btn in btns" :key="btn">
        <button>
          <img
            :src="getImageUrl(`src/assets/img/mainBtns/icon_${btn}.png`)"
            alt="btn"
          />
          <span>{{ btn }}</span>
        </button>
      </li>
    </ul>
  </section>
</template>
