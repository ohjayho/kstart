<script setup>
import CommunityCategories from "@/components/community/CommunityCategories.vue";
import CommunityPosts from "@/components/community/CommunityPosts.vue";
import SearchBar from "@/components/community/SearchBar.vue";
import postsData from "@/assets/postsData.json";
import { onMounted, ref } from "vue";
import PostButton from "@/components/community/PostButton.vue";
import { db } from "@/firebase/initializeFirebase";
import { collection, onSnapshot } from "firebase/firestore";

const posts = ref(postsData);
const curCategory = ref("All");
const handleUpdateCategory = (category) => {
  curCategory.value = category;
};

onMounted(() => {
  onSnapshot(collection(db, "posts"), (querySnapshot) => {
    const fbPosts = [];
    querySnapshot.forEach((doc) => {
      const post = {
        user: doc.data().user,
        date: doc.data().date,
        category: doc.data().category,
        title: doc.data().title,
        description: doc.data().description,
        img: doc.data().img,
        likes: doc.data().likes,
        comments: doc.data().comments
      };
      fbPosts.push(post);
      // console.log(doc.id, "=>", doc.data());
    });
    posts.value = fbPosts;
  });
});
</script>

<template>
  <div class="community-view-container pb-[70px] relative px-4">
    <SearchBar />
    <CommunityCategories @updateCategory="handleUpdateCategory" />
    <CommunityPosts
      :posts="
        curCategory === 'All'
          ? posts
          : posts.filter((post) => post.category === curCategory)
      "
    />
    <PostButton />
  </div>
</template>
