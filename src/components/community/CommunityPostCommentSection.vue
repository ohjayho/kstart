<script setup>
import { db } from "@/firebase/initializeFirebase";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import { onMounted, ref } from "vue";
import Loading from "../Loading.vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/firebase/checkAuth";

const props = defineProps({
  postId: String
});

const loadingComments = ref(false);
const comments = ref([]);
const filterState = ref(true);
const { isLoggedIn, nickname } = useAuth();
const router = useRouter();

const changeOrderComments = (setting) => {
  const sortedComments = setting
    ? comments.value.sort((a, b) => {
        return b.date - a.date;
      })
    : comments.value.sort((a, b) => {
        return a.date - b.date;
      });
  comments.value = sortedComments;
  console.log(sortedComments, setting);
  filterState.value = setting;
};

const onDeleteComment = async (commentId) => {
  if (!isLoggedIn.value) {
    alert("로그인하세요.");
    router.push("/login");
    return;
  }
  try {
    const docRef = doc(db, "comments", commentId);
    await deleteDoc(docRef);
    alert("댓글이 삭제됐습니다.");
  } catch (error) {
    alert("댓글 삭제를 실패했습니다.");
    console.log(error);
  }
};

onMounted(() => {
  loadingComments.value = true;
  const q = query(
    collection(db, "comments"),
    where("postId", "==", props.postId)
  );
  onSnapshot(q, (querySnapshot) => {
    const foundComments = [];
    querySnapshot.forEach((doc) => {
      const foundComment = {
        id: doc.id,
        author: doc.data().author,
        comment: doc.data().comment,
        date: doc.data().date?.seconds,
        postId: doc.data().postId
      };
      foundComments.push(foundComment);
      // console.log(doc.id, "=>", doc.data());
    });
    const sortedComments = foundComments.sort((a, b) => {
      return b.date - a.date;
    });
    comments.value = sortedComments;
    loadingComments.value = false;
  });
});
</script>

<template>
  <div class="comments-container mt-5 pb-[62px]">
    <div class="sort-option hidden">
      <span class="mr-3">Sort by:</span>
      <select>
        <option name="" id="">Top</option>
        <option name="" id="">Newest</option>
        <option name="" id="">Oldest</option>
      </select>
    </div>
    <div class="sort-section flex justify-between border-t-2 pt-5 text-sm">
      <div class="sort-left flex gap-0.5">
        <span class="font-semibold">댓글</span>
        <span>{{ comments.length }}</span>
      </div>
      <div class="sort-right flex gap-3 text-[#6d7280]">
        <button
          @click="changeOrderComments(true)"
          :class="{ 'text-black': filterState }"
        >
          Newest
        </button>
        <button
          @click="changeOrderComments(false)"
          :class="{ 'text-black': !filterState }"
        >
          Oldest
        </button>
      </div>
    </div>
    <Loading v-if="loadingComments" />
    <div v-for="comment in comments" class="user-info flex flex-col mt-3 mb-3">
      <div class="user-detail flex items-center gap-1.5 mb-1">
        <span class="user-name text-base font-semibold">{{
          comment.author
        }}</span>
        <span>·</span>
        <span class="post-date text-xs">{{ formatTimeAgo(comment.date) }}</span>
        <button
          v-if="nickname === comment.author"
          @click="onDeleteComment(comment.id)"
          class="flex justify-center items-center w-5 h-5 rounded-full bg-[rgb(252,113,89)] text-white text-xs ml-0.5"
        >
          ×
        </button>
      </div>
      <p class="user-comment ml-1">{{ comment.comment }}</p>
    </div>
  </div>
</template>
