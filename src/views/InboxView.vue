<script setup>
import Header from "@/components/Header.vue";
import InboxCommunitySection from "@/components/inbox/InboxCommunitySection.vue";
import InboxNoticeSection from "@/components/inbox/InboxNoticeSection.vue";
import { onMounted, ref } from "vue";

const activeWidth = ref(0);
const activeLeft = ref(0);
const selectedTab = ref("Notice");

onMounted(() => {
  updateActiveBar();
});

const updateActiveBar = () => {
  const tabs = document.querySelectorAll(".tab");

  const activeTab = Array.from(tabs).find(
    (tab) => tab.innerText === selectedTab.value
  );
  if (activeTab) {
    activeWidth.value = activeTab.offsetWidth;
    activeLeft.value = activeTab.offsetLeft;
  }
};

const selectTab = (tabName) => {
  selectedTab.value = tabName;
  updateActiveBar();
};
</script>

<template>
  <Header />
  <div class="inbox-section pt-[60px] px-5 pb-20">
    <div
      class="tabs-container w-full flex justify-center relative text-lg border-b-[0.01px] border-b-[#9ca3af] text-[#9ca3af] font-semibold"
    >
      <div
        class="active-bar h-1 bg-[#2760ed] absolute bottom-0 transition-all"
        :style="{ width: activeWidth + 'px', left: activeLeft + 'px' }"
      ></div>
      <button
        class="tab"
        @click="selectTab('Notice')"
        :class="{ 'text-[#2760ed]': selectedTab === 'Notice' }"
      >
        Notice
      </button>
      <button
        class="tab"
        @click="selectTab('Community')"
        :class="{ 'text-[#2760ed]': selectedTab === 'Community' }"
      >
        Community
      </button>
    </div>
    <InboxNoticeSection v-if="selectedTab === 'Notice'" />
    <InboxCommunitySection v-if="selectedTab === 'Community'" />
  </div>
</template>

<style>
.tab {
  width: 50%;
  padding-bottom: 10px;
}
</style>
