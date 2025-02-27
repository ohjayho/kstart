<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useRouter } from "vue-router";
import SubHeader from "@/components/SubHeader.vue";

const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Sucessfully registered!");
      router.push("/");
    })
    .catch((err) => {
      console.log(err.code);
      alert(err.message);
    });
};
</script>

<template>
  <SubHeader title="시작하기" />
  <div class="login_container pt-[60px] flex flex-col items-center">
    <div class="logo_wrapper flex items-center my-[138px]">
      <img src="/img/logo.png" alt="logo" class="h-12" />
    </div>
    <RouterLink to="/loginID" class="login_btn">ID로 시작하기</RouterLink>
  </div>
</template>

<style>
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
