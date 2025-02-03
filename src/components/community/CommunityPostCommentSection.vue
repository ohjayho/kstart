<script setup>
defineProps({
  comments: String
});
</script>

<template>
  <div class="comments-container mt-5">
    <div class="sort-option hidden">
      <span class="mr-3">Sort by:</span>
      <select>
        <option name="" id="">Top</option>
        <option name="" id="">Newest</option>
        <option name="" id="">Oldest</option>
      </select>
    </div>
    <div class="sort-section flex justify-between border-t-2 pt-5 text-sm">
      <div class="sort-left flex gap-0.5">
        <span class="font-semibold">댓글</span>
        <span>{{ comments }}</span>
      </div>
      <div class="sort-right flex gap-3 text-[#6d7280]">
        <button class="text-black">등록순</button>
        <button>최신순</button>
      </div>
    </div>

    <div class="user-info flex flex-col mt-3 mb-3">
      <div class="user-detail flex items-center gap-1.5 mb-1">
        <span class="user-name text-base font-semibold">오재호</span>
        <span>·</span>
        <span class="post-date text-xs">22시간 전</span>
      </div>
      <p class="user-comment ml-1">우와!</p>
    </div>
  </div>
</template>
