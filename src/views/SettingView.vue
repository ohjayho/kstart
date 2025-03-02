<script setup>
import Header from "@/components/Header.vue";
import ToggleSwitch from "@/components/setting/ToggleSwitch.vue";
import { RouterLink, useRouter } from "vue-router";

import { signOut } from "firebase/auth";
import { useAuth } from "@/firebase/checkAuth";
import { auth } from "@/firebase/initializeFirebase";

const router = useRouter();

const { username, isLoggedIn } = useAuth();

const onSignOut = () => {
  signOut(auth)
    .then(() => {
      router.push("/setting");
      isLoggedIn.value = false;
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
</script>

<template>
  <Header />
  <div class="setting-container pt-[90px] pb-[120px] px-4 flex flex-col gap-5">
    <div class="user-container flex items-center">
      <img
        src="/img/setting/user-picture.png"
        alt="user-picture"
        class="w-14 h-14 rounded-full mr-3"
      />
      <RouterLink
        to="/login"
        class="user-name mr-3 text-lg h-full"
        :class="{ underline: !isLoggedIn, 'text-[#9ca3af]': !isLoggedIn }"
      >
        {{ username }}
      </RouterLink>
      <button v-if="isLoggedIn" class="user-edit">
        <img src="/img/setting/user-edit.png" alt="" class="w-6" />
      </button>
    </div>
    <div class="setting-container flex flex-col gap-3">
      <div class="push-setting flex justify-between">
        <span class="text-sm">푸시 알림</span>
        <ToggleSwitch />
      </div>
      <div class="ad-setting flex justify-between text-sm">
        <span>광고성 정보 수신 동의</span>
        <ToggleSwitch />
      </div>
    </div>
    <div class="activity-container flex flex-col gap-3">
      <h1>My Activity</h1>
      <button class="btn">
        <span>나의 커뮤니티</span>
        <img src="/img/rightArrow.png" class="w-[14px]" alt="rightArrowImg" />
      </button>
      <button class="btn">
        <span>나의 쇼핑</span>
        <img src="/img/rightArrow.png" class="w-[14px]" alt="rightArrowImg" />
      </button>
    </div>
    <div class="about-container flex flex-col gap-3">
      <h1>About Service</h1>
      <button class="btn">
        <span>공지사항</span>
        <img src="/img/rightArrow.png" class="w-[14px]" alt="rightArrowImg" />
      </button>
      <button class="btn">
        <span>약관</span>
        <img src="/img/rightArrow.png" class="w-[14px]" alt="rightArrowImg" />
      </button>
    </div>
    <div
      class="company-info-container text-sm flex flex-col gap-3 text-[#303133]"
    >
      <h1 class="font-extrabold">Kworkpartners Co., Ltd.</h1>
      <p class="flex flex-col">
        <span> CEO : Cho sungkon, Kong sunwook </span>
        <span> Business Registration No. 388-81-03060 </span>
      </p>
      <p class="flex flex-col">
        <span class="font-semibold"> Seoul Office</span>
        <span> 707, 547 Yangcheon-ro, Gangseo-gu, Seoul (Gayang-dong) </span>
      </p>
      <p class="flex flex-col">
        <span class="font-semibold"> Head Office </span>
        <span> 5th FL, 48 Buldang 14-ro, Seobuk-gu, Cheonan-si, Chungnam </span>
      </p>
      <p>COPYRIGHT ⒸK start. ALL RIGHTS RESERVED</p>
    </div>
    <button
      v-if="isLoggedIn"
      @click="onSignOut"
      class="flex justify-center border border-[#ca5c5c] px-5 py-4 rounded-3xl text-[#ca5c5c] font-semibold"
    >
      로그아웃
    </button>
    <RouterLink
      v-if="!isLoggedIn"
      to="/login"
      class="flex justify-center border border-[#2760ee] px-5 py-4 rounded-3xl text-[#2760ee] font-semibold"
    >
      로그인
    </RouterLink>
  </div>
</template>

<style>
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: start;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 1px;
  border-style: solid;
  border-color: #d3d3d3;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}
</style>
