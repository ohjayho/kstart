<script setup>
import ShoppingCard from "./ShoppingCard.vue";
const items = [
  {
    name: "쿠팡보다 싸다! 나주곰탕 5pack",
    price: "53,500",
    discount: "11",
    best: true,
    new: true,
    src: "src/assets/img/productImg/product_1.png",
    link: "https://shop.kstart.kr/surl/P/361"
  },
  {
    name: "프리미엄 전기요 전자파안심",
    price: "79,000",
    discount: "28",
    best: true,
    new: false,
    src: "src/assets/img/productImg/product_2.png",
    link: "https://shop.kstart.kr/product/%EC%9D%B4%EB%A9%94%ED%85%8D-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%A0%84%EA%B8%B0%EC%9A%94-%EC%A0%84%EC%9E%90%ED%8C%8C%EC%95%88%EC%8B%AC%EB%AC%BC%EC%84%B8%ED%83%81%EC%9D%B4-%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%9D%B4%EB%A9%94%ED%85%8D-%EC%88%9C%EB%A9%B4-%EB%8D%94%EB%B8%94-imc-830-2%EC%9D%B8%EC%9A%A9-%EC%82%AC%EC%8A%B4-%EB%B6%84%EB%A6%AC%EB%82%9C%EB%B0%A9/26/category/50/display/1/"
  },
  {
    name: "[HBAF] 군옥수수맛 아몬드",
    price: "8,900",
    discount: "11",
    best: false,
    new: false,
    src: "src/assets/img/productImg/product_3.png",
    link: "https://shop.kstart.kr/product/11-%EA%B5%B0%EC%98%A5%EC%88%98%EC%88%98%EB%A7%9B-%EC%95%84%EB%AA%AC%EB%93%9C3%EC%B2%9C%EC%9B%90%EB%8C%80-hbaf-%EA%B5%B0%EC%98%A5%EC%88%98%EC%88%98%EB%A7%9B-%EC%95%84%EB%AA%AC%EB%93%9C-120g-x-2%EB%B4%89%EC%A7%80/544/category/50/display/1/"
  },
  {
    name: "[홍삼] 정관장 면역력 강화",
    price: "39,000",
    discount: "34",
    best: true,
    new: false,
    src: "src/assets/img/productImg/product_4.png",
    link: "https://shop.kstart.kr/product/%EC%A0%95%EA%B4%80%EC%9E%A5-%EB%A9%B4%EC%97%AD%EB%A0%A5-%EA%B0%95%ED%99%94-%EA%B1%B4%EA%B0%95%EC%8B%9D%ED%92%88-%ED%99%8D%EC%82%BC%EB%B3%B4%EB%A0%A5-20%ED%8F%AC60%ED%8F%AC-%ED%83%9D1/266/category/47/display/1/"
  },
  {
    name: "Samsung Galaxy S22",
    price: "562,600",
    discount: "44",
    best: true,
    new: false,
    src: "src/assets/img/productImg/product_5.png",
    link: "https://shop.kstart.kr/product/%25EB%25A6%25AC%25ED%258D%25BC%25ED%258F%25B0-%25EC%2582%25BC%25EC%2584%25B1-%25EA%25B0%25A4%25EB%259F%25AD%25EC%258B%259C-s22-256gb-1%25EB%2585%2584-%25EB%25AC%25B4%25EC%2583%2581-%25EB%25B3%25B4%25EC%25A6%259D%25EC%2582%25AC%25EC%259D%2580%25ED%2592%2588-7%25EC%25A2%2585/373/category/58/display/1/"
  }
];
</script>

<template>
  <div class="px-5 mb-[30px]">
    <button class="w-14 flex justify-between items-center">
      <span class="text-xl font-semibold">쇼핑</span>
      <img
        src="@/assets/img/btns/rightArrow.png"
        alt="shopping_button"
        class="w-[14px]"
      />
    </button>
    <swiper-container slidesPerView="3">
      <ShoppingCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :index="index"
      />
    </swiper-container>
  </div>
</template>
