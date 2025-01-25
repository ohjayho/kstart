<script setup></script>

<template>
  <div class="post-container p-4 border-t border-b border-gray">
    <div class="post-header mb-2 flex items-center justify-between">
      <span
        class="category-badge text-white bg-[#2760ee] rounded-md text-xs px-1 py-0.5"
        >Event</span
      >
      <span>···</span>
      <div class="more hidden">
        <div class="report-container">Report</div>
        <div class="hide-container">Block User</div>
      </div>
    </div>
    <div class="post-main w-full mb-3 flex">
      <div class="post-text-container flex-grow overflow-hidden">
        <h1 class="post-title text-base mb-2">동네친구하실분!</h1>
        <p
          class="post-description text-sm overflow-hidden text-ellipsis whitespace-nowrap"
        >
          제가 원래 아무 이유 없이도 카페 가는걸 좋아하는데요 어쩌구 저쩌구 제가
          원래 아무 이유 없이도 카페 가는걸 좋아하는데요 어쩌구 저쩌구
        </p>
      </div>
      <div class="post-img w-20 h-20 flex-shrink-0">
        <img src="@/assets/img/example.jpg" alt="img" class="w-full h-full" />
      </div>
    </div>
    <div class="post-footer flex justify-between">
      <div class="footer-left flex gap-4 text-sm">
        <div class="like-container flex">
          <img src="@/assets/img/post/icon-like.svg" alt="icon-comment" />
          <span class="ml-1">3</span>
        </div>
        <div class="comments-container flex">
          <img src="@/assets/img/post/icon-comment.svg" alt="icon-comment" />
          <span class="ml-1">1</span>
        </div>
        <div class="share flex">
          <img src="@/assets/img/post/icon-share.svg" alt="icon-comment" />
        </div>
      </div>
      <div class="footer-right">
        <span class="text-sm">3일 전</span>
      </div>
    </div>
  </div>
</template>
