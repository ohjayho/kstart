<script setup>
const moreBenefits = [
  { name: "쇼핑", image: "/img/benefit/more-benefit-shopping.png" },
  {
    name: "커뮤니티",
    image: "/img/benefit/more-benefit-community.png"
  },
  {
    name: "보험",
    image: "/img/benefit/more-benefit-insurance.png"
  },
  {
    name: "대출",
    image: "/img/benefit/more-benefit-loan.png"
  }
];
</script>

<template>
  <div
    class="more-benefit-container flex flex-wrap gap-2 w-full max-w-full mt-5"
  >
    <div
      v-for="moreBenefit in moreBenefits"
      :style="{
        backgroundImage: `url(${moreBenefit.image})`
      }"
      :key="moreBenefit.name"
      class="more-benefit w-[48%] h-[110px] bg-white bg-no-repeat bg-contain bg-[95%_100%] px-4 py-[12px] rounded-xl font-semibold"
      style="background-size: 57px"
    >
      <span>{{ moreBenefit.name }}</span>
    </div>
  </div>
</template>
