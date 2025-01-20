<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex justify-center h-full">
    <div class="w-[500px] max-w-full h-full">
      <RouterView />
      <Navbar />
    </div>
  </div>
</template>
