<script setup>
import SubHeader from "@/components/SubHeader.vue";
</script>

<template>
  <SubHeader title="시작하기" />
  <div class="login_container px-4 pt-[60px] flex flex-col items-center">
    <div class="logo_wrapper flex items-center my-[138px]">
      <img src="/img/logo.png" alt="logo" class="h-12" />
    </div>
    <RouterLink to="/loginID" class="login_btn">ID로 시작하기</RouterLink>
  </div>
</template>

<style>
.login_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 8px 15px 8px 15px;
  border: 1px solid rgb(210, 213, 218);
  border-radius: 26px;
}
</style>
