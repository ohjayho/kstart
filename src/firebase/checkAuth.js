import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./initializeFirebase";
import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";

const isLoggedIn = ref(false);
const userEmail = ref(null);
const nickname = ref("로그인 해주세요.");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    isLoggedIn.value = true;
    userEmail.value = user.email;
    nickname.value = user.displayName;
    // userEmail.value = user.providerData[0].uid;
    // nickname.value = user.providerData[0].displayName;
  } else {
    isLoggedIn.value = false;
    userEmail.value = null;
    nickname.value = "로그인 해주세요.";
  }
});

export function useAuth(nick) {
  return {
    isLoggedIn,
    userEmail,
    nickname
  };
}
