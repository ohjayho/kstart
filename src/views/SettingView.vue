<script setup lang="ts">
import Header from "@/components/Header.vue";
import ToggleSwitch from "@/components/setting/ToggleSwitch.vue";
</script>

<template>
  <Header />
  <div class="setting-container pt-[80px] px-4">
    <div class="user-container flex items-center">
      <img
        src="@/assets/img/setting/user-picture.png"
        alt="user-picture"
        class="w-14 h-14 rounded-full mr-3"
      />
      <div class="user-name mr-3 text-lg h-full">오재호</div>
      <button class="user-edit">
        <img src="@/assets/img/setting/user-edit.png" alt="" class="w-6" />
      </button>
    </div>
    <div class="setting-container">
      <div class="push-setting flex justify-between">
        <span class="text-sm">푸시 알림</span>
        <ToggleSwitch />
      </div>
      <div class="ad-setting flex justify-between text-sm">
        <span>광고성 정보 수신 동의</span>
        <ToggleSwitch />
      </div>
    </div>
    <div class="activity-container">
      <button>나의 커뮤니티</button>
      <button>나의 쇼핑</button>
    </div>
    <div class="about-container">
      <button>공지사항</button>
      <button>약관</button>
    </div>
    <div class="company-info-container">
      <h1>Kworkpartners Co., Ltd.</h1>
      <h2>
        CEO : Cho sungkon, Kong sunwook<br />
        Business Registration No. 388-81-03060
      </h2>
      <h2>
        Seoul Office<br />
        707, 547 Yangcheon-ro, Gangseo-gu, Seoul (Gayang-dong)
      </h2>
      <h2>
        Head Office<br />
        5th FL, 48 Buldang 14-ro, Seobuk-gu, Cheonan-si, Chungnam
      </h2>
      <h2>COPYRIGHT ⒸK start. ALL RIGHTS RESERVED</h2>
    </div>
  </div>
</template>
