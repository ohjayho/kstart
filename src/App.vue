<script setup>
import { RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex justify-center h-full">
    <div class="max-w-[500px] h-full">
      <MainHeader />
      <RouterView />
      <Navbar />
    </div>
  </div>
</template>
