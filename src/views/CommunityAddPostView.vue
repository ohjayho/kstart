<script setup>
import SubHeader from "@/components/SubHeader.vue";
import CommunityCategories from "@/components/community/CommunityCategories.vue";
import { ref } from "vue";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "@/firebase/checkAuth";
import { db } from "@/firebase/initializeFirebase";
import { useRouter } from "vue-router";

const category = ref(null);
const text = ref("");
const { username } = useAuth();
const router = useRouter();

const handleUpdateCategory = (newCategory) => {
  category.value = newCategory;
};

const addPost = async () => {
  if (!category.value) {
    alert("카테고리를 설정해 주세요.");
    return;
  }
  if (!text.value) {
    alert("내용을 입력해 주세요.");
    return;
  }
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      user: username.value,
      date: serverTimestamp(),
      category: category.value,
      title: "제목이라네",
      description: text.value,
      img: "https://www.christiandaily.co.kr/board/data/editor/2105/thumb-33e1f7fbce47d3787240c01283e56d6c_1620104459_3667_600x800.jpg",
      likes: 3,
      comments: 5
    });
    // console.log("Document written with ID: ", docRef.id);
    alert("게시글이 등록됐습니다.");
    router.push("/community");
  } catch (error) {
    alert("게시글 작성을 실패했습니다.");
  }
  // Add a new document with a generated id.
};
</script>

<template>
  <div class="add-post-container flex flex-col items-center px-4">
    <SubHeader title="New feed" />
    <CommunityCategories
      class="mt-[60px]"
      :newPost="true"
      @updateCategory="handleUpdateCategory"
    />
    <textarea
      class="w-[460px] h-[300px] p-5 border border-[rgb(210, 213, 218)] rounded-lg outline-none"
      placeholder="Text Area"
      v-model="text"
    ></textarea>
    <button
      class="post-submit-btn mt-10"
      :style="{
        backgroundColor: category && text.length > 0 ? '#2760ee' : '#d2d5da'
      }"
      :disabled="category && text.length > 0 ? false : true"
      @click="addPost"
    >
      게시하기
    </button>
  </div>
</template>

<style>
.post-submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 8px 15px 8px 15px;
  border: 1px solid rgb(210, 213, 218);
  border-radius: 26px;
  color: white;
}
</style>
