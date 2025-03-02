<script setup>
import SubHeader from "@/components/SubHeader.vue";
import CommunityCategories from "@/components/community/CommunityCategories.vue";
</script>

<template>
  <SubHeader title="New feed" />
  <CommunityCategories class="mt-[60px]" :isBadgeVisible="false" />
</template>
