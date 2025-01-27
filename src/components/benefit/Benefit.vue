<script setup>
import BenefitItem from "./BenefitItem.vue";
</script>

<template>
  <div
    class="benefit-items w-full flex flex-col gap-2 items-center text-white text-lg font-semibold"
  >
    <BenefitItem
      title="Shopping Benefit"
      :description="[
        '5,000 KRW Welcome Credit',
        'Earn 3,000 Coupon on 30,000 KRW+'
      ]"
      :style="{ backgroundColor: '#96acf9' }"
      img="src/assets/img/benefit/benefit-shopping.png"
    />
    <BenefitItem
      title="Support Benefit"
      :description="[
        'Free consultation with a native speaker',
        '10% discount for first time users'
      ]"
      :style="{ backgroundColor: '#f1c075' }"
      img="src/assets/img/benefit/benefit-support.png"
    />
    <BenefitItem
      title="Exclusive Benefits for 'Kstart' Members!"
      :description="['The more you use it, the more useful.']"
      :style="{ backgroundColor: '#b897fd' }"
      img="src/assets/img/benefit/benefit-all.png"
    />
  </div>
</template>
