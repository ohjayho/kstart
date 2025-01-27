<script setup>
import Benefit from "@/components/benefit/Benefit.vue";
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
      <div class="benefit-footer flex flex-col items-center mt-10 gap-2">
        <h5 class="text-xl font-semibold">
          <span class="text-[#2760ee]">더 많은 혜택</span>을 준비하고 있습니다.
        </h5>
        <p class="flex text-center text-[#414549] font-semibold">
          쇼핑, 커뮤니티, 보험, 대출 서비스에서도<br />
          더 큰 혜택과 다양한 서비스로 <br />
          여러분에게 힘이 되겠습니다.
        </p>
      </div>
      <MoreBenefit />
      <BenefitImage />
    </div>
  </div>
</template>
