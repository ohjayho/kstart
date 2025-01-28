<script setup>
import Benefit from "@/components/benefit/Benefit.vue";
import BenefitComment from "@/components/benefit/BenefitComment.vue";
import BenefitHeader from "@/components/benefit/BenefitHeader.vue";
import BenefitImage from "@/components/benefit/BenefitImage.vue";
import MoreBenefit from "@/components/benefit/MoreBenefit.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <div class="benefit-background bg-[#2760ee] pt-10 h-full min-h-full -z-20">
    <div
      class="benefits-container flex flex-col items-center px-5 rounded-2xl bg-[#f4f7fb] pb-[110px]"
    >
      <BenefitHeader />
      <Benefit />
      <BenefitComment />
      <MoreBenefit />
      <BenefitImage />
    </div>
  </div>
</template>
