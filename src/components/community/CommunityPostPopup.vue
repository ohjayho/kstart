<script setup>
import { db } from "@/firebase/initializeFirebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "vue-router";

const props = defineProps({
  postId: String
});

const router = useRouter();

const handlePostDelete = async () => {
  await deleteDoc(doc(db, "posts", props.postId));
};

const handlePostEdit = async () => {
  router.push(`/newPost/${props.postId}`);
};
</script>

<template>
  <div
    class="post-popup bg-white flex flex-col absolute right-0 top-0 rounded-sm"
  >
    <button @click="handlePostEdit" class="flex items-center w-20 h-8">
      <img src="/img/post/icon-modify.svg" alt="icon-modify" class="w-5" />
      <span class="w-full flex justify-center text-sm">Edit</span>
    </button>
    <button @click="handlePostDelete" class="flex items-center w-20 h-8">
      <img src="/img/post/icon-delete.svg" alt="icon-modify" class="w-5" />
      <span class="w-full flex justify-center text-sm">Delete</span>
    </button>
  </div>
</template>
