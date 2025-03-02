<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const passwordAgain = ref("");

const router = useRouter();
const auth = getAuth();
const signUp = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Sucessfully registered!");
      alert("가입이 완료되었습니다!\n로그인 하세요.");
      router.push("/login");
    })
    .catch((err) => {
      alert("아이디/비밀번호를 확인해 주세요");
      console.log(err.code);
    });
};
</script>

<template>
  <SubHeader title="ID로 시작하기" />
  <div
    class="login_container h-full pt-[60px] pb-[70px] px-5 flex flex-col items-center relative"
  >
    <form class="flex flex-col justify-between w-full h-[196px] mt-10">
      <input
        type="email"
        placeholder="e-mail을 입력해 주세요."
        class="signup_input"
        v-model="email"
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해 주세요. (6자리 이상)"
        class="signup_input"
        v-model="password"
      />
      <input
        type="password"
        placeholder="비밀번호를 한번 더 입력해 주세요."
        class="signup_input"
        v-model="passwordAgain"
        @keyup.enter="signUp"
      />
    </form>
    <div
      class="btn_container w-full px-5 flex flex-col items-center gap-2.5 absolute bottom-[140px]"
    >
      <button
        class="login_btn text-white"
        :style="{
          backgroundColor:
            password === passwordAgain && password.length >= 6
              ? '#2760ee'
              : '#d2d5da'
        }"
        :disabled="password !== passwordAgain || password.length < 6"
        @click="signUp"
      >
        회원가입
      </button>
    </div>
  </div>
</template>

<style>
.signup_input {
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
