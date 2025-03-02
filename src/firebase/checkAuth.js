import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./initializeFirebase";
import { ref } from "vue";

const isLoggedIn = ref(false);
const username = ref("로그인 해주세요.");

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoggedIn.value = true;
    username.value = user.providerData[0].uid;
  } else {
    isLoggedIn.value = false;
    username.value = "로그인 해주세요.";
  }
});

export function useAuth() {
  return {
    isLoggedIn,
    username
  };
}
