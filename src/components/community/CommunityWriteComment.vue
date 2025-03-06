<script setup>
import { useAuth } from "@/firebase/checkAuth";
import { db } from "@/firebase/initializeFirebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  increment,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  postId: String
});

const { isLoggedIn, nickname } = useAuth();

const comment = ref("");

const router = useRouter();

const onSubmitComment = async () => {
  if (!isLoggedIn.value) {
    alert("로그인하세요.");
    router.push("/login");
    return;
  }
  try {
    const docRef = await addDoc(collection(db, "comments"), {
      author: nickname.value,
      date: serverTimestamp(),
      comment: comment.value,
      postId: props.postId
    });
    const postRef = doc(db, "posts", props.postId);
    await updateDoc(postRef, {
      commentCount: increment(1)
    });
    alert("댓글이 등록됐습니다.");
    comment.value = "";
  } catch (error) {
    alert("댓글 작성을 실패했습니다.");
    console.log(error);
  }
};

const goToSignIn = () => {
  if (!isLoggedIn.value) {
    router.push("/login");
    return;
  }
};
</script>

<template>
  <div
    class="write-comment-container fixed w-[470px] max-w-full flex bottom-[80px] left-1/2 -translate-x-1/2 gap-2"
  >
    <input
      type="text"
      class="flex-1 h-[42px] p-5 border border-[rgb(210, 213, 218)] rounded-lg outline-none bg-[#fafafa]"
      :placeholder="isLoggedIn ? 'Write a comment' : 'Please login'"
      @click="goToSignIn"
      v-model="comment"
    />
    <button @click="onSubmitComment" class="text-white">
      <img src="/img/comment/submit-comment.png" alt="submit" class="w-7 h-7" />
    </button>
  </div>
</template>
