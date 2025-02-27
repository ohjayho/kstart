<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const router = useRouter();

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Sucessfully login!");
      router.push("/setting");
    })
    .catch((err) => {
      console.log(err.code);
      alert(err.message);
    });
};
</script>

<template>
  <SubHeader title="ID로 시작하기" />
  <div
    class="login_container h-full pt-[60px] pb-[70px] px-5 flex flex-col items-center relative"
  >
    <form class="flex flex-col justify-between w-full h-[124px] mt-10">
      <input
        type="email"
        placeholder="e-mail을 입력해 주세요."
        class="login_input"
        v-model="email"
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        class="login_input"
        v-model="password"
      />
    </form>
    <div
      class="btn_container w-full px-5 flex flex-col items-center gap-2.5 absolute bottom-[140px]"
    >
      <button
        class="login_btn text-white"
        :style="{
          backgroundColor: password.length >= 6 ? '#2760ee' : '#d2d5da'
        }"
        @click="login"
      >
        로그인
      </button>
      <button class="login_btn">회원가입</button>
      <button class="text-[#9ca3af] text-[13px] underline">
        비밀번호 찾기
      </button>
    </div>
  </div>
</template>

<style>
.login_input {
  width: 100%;
  height: 52px;
  padding: 0 20px;
  border: 1px solid rgb(210, 213, 218);
  border-radius: 10px;
  font-size: 14px;
}

.login_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 8px 15px 8px 15px;
  border: 1px solid rgb(210, 213, 218);
  border-radius: 26px;
}
</style>
