<script setup>
import { ref } from "vue";

const searchValue = ref("");

const onFocus = () => {
  const searchContainer = document.querySelector(".search-container");
  searchContainer.classList.remove("border-[#e0e2e6]");
  searchContainer.classList.add("border-[#2760ee]");
};

const onFocusOut = () => {
  const searchContainer = document.querySelector(".search-container");
  searchContainer.classList.remove("border-[#2760ee]");
  searchContainer.classList.add("border-[#e0e2e6]");
};

const onDelete = () => {
  searchValue.value = "";
};
</script>

<template>
  <div
    class="search-container h-10 my-[11px] mx-5 px-4 border border-[#e0e2e6] rounded-xl flex items-center transition-colors"
  >
    <img
      src="@/assets/img/search/search.png"
      alt="search"
      class="w-[18px] mr-3"
    />
    <input
      type="text"
      name=""
      id=""
      placeholder="검색"
      class="flex-grow outline-none text-sm"
      v-model="searchValue"
      @focus="onFocus"
      @focusout="onFocusOut"
    />
    <button class="w-[18px] h-[18px]" @click="onDelete">
      <img
        src="@/assets/img/search/search_delete.png"
        alt=""
        v-if="searchValue !== ''"
        class="w-full h-full"
      />
    </button>
  </div>
</template>
