<script setup>
import SubHeader from "@/components/SubHeader.vue";
import CommunityCategories from "@/components/community/CommunityCategories.vue";
import Loading from "@/components/Loading.vue";
import { onMounted, ref } from "vue";

import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  onSnapshot
} from "firebase/firestore";
import { useAuth } from "@/firebase/checkAuth";
import { db, storage } from "@/firebase/initializeFirebase";
import {
  ref as firebaseRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import { useRoute, useRouter } from "vue-router";
import { formatTimeAgo } from "@/utils/formatTimeAgo";

const category = ref("Photo Contest");
const title = ref("");
const description = ref("");
const img = ref(null);
const fileKey = ref(0);
const imgUrl = ref("");
const { nickname } = useAuth();
const route = useRoute();
const router = useRouter();
const loadingImg = ref(false);
const loadingPost = ref(false);
const postId = route.params.postId;
const post = ref({});
const isEditing = ref(false);

const handleUpdateCategory = (newCategory) => {
  category.value = newCategory;
};

const onFileChange = (e) => {
  loadingImg.value = true;
  img.value = e.target.files[0];
  // Create a storage reference from our storage service
  const file = img.value;
  const storageRef = firebaseRef(storage, `images/${img.value.lastModified}`);
  // Upload the file
  const uploadTask = uploadBytesResumable(storageRef, file); // file is your File object

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;
        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        imgUrl.value = downloadURL;
        loadingImg.value = false;
      });
    }
  );
};

const onDeleteFile = () => {
  // Create a reference to the file to delete
  const desertRef = firebaseRef(storage, `images/${img.value.lastModified}`);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
      console.log(`${img.value.lastModified} 삭제 완료`);
      img.value = null;
      imgUrl.value = "";
      fileKey.value += 1;
      //
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(`${img.value.lastModified} 삭제 실패!`);
    });
};

const addPost = async () => {
  if (!category.value) {
    alert("카테고리를 설정해 주세요.");
    return;
  }
  if (!title.value) {
    alert("제목을 입력해 주세요.");
    return;
  }
  if (!description.value) {
    alert("내용을 입력해 주세요.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "posts"), {
      category: category.value,
      comments: 0,
      date: serverTimestamp(),
      description: description.value,
      img: imgUrl.value,
      likes: 0,
      postId: docRef.id,
      title: title.value,
      user: nickname.value
    });
    // console.log("Document written with ID: ", docRef.id);
    alert("게시글이 등록됐습니다.");
    router.push("/community");
  } catch (error) {
    alert("게시글 작성을 실패했습니다.");
  }
  // Add a new document with a generated id.
};

onMounted(() => {
  if (postId) {
    isEditing.value = true;
    loadingPost.value = true;
    loadingImg.value = true;
    const docRef = doc(db, "posts", postId);
    onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        title.value = data.title;
        description.value = data.description;
        imgUrl.value = data.img;
        console.log(title.value, description.value, imgUrl.value);
      }
      loadingPost.value = false;
      loadingImg.value = false;
    });
  }
});
</script>

<template>
  <div
    class="add-post-container w-full flex flex-col items-center px-4 pb-[80px]"
  >
    <SubHeader title="New feed" />
    <CommunityCategories
      class="mt-[60px]"
      :newPost="true"
      @updateCategory="handleUpdateCategory"
    />
    <input
      type="text"
      class="w-full h-[42px] p-5 border border-[rgb(210, 213, 218)] rounded-lg outline-none"
      placeholder="Title"
      v-model="title"
    />
    <textarea
      class="w-full h-[300px] p-5 border border-[rgb(210, 213, 218)] rounded-lg outline-none mt-5"
      placeholder="Description"
      v-model="description"
    ></textarea>
    <div class="upload-image flex flex-col w-full items-start mt-5">
      <h2>사진 첨부</h2>
      <div class="img-container flex items-center gap-3 mt-2">
        <label
          for="file"
          class="flex justify-center items-center w-[86px] h-[86px] bg-[#d2d5da] text-white text-4xl rounded-lg"
        >
          <Loading v-if="loadingImg" />
          <template v-else> + </template>
        </label>
        <div
          class="img-preview w-[86px] h-[86px] bg-center bg-cover bg-[#d2d5da] rounded-lg relative"
          v-if="imgUrl?.length"
          :style="{ backgroundImage: `url(${imgUrl})` }"
        >
          <button
            v-if="imgUrl"
            @click="onDeleteFile"
            class="absolute flex justify-center items-center w-5 h-5 rounded-full bg-[rgba(0,0,0,0.3)] top-1 right-1 text-white text-xs"
          >
            ×
          </button>
        </div>
      </div>
      <input
        type="file"
        id="file"
        @change="onFileChange"
        :key="fileKey"
        class="hidden"
      />
    </div>

    <button
      class="post-submit-btn mt-10"
      :style="{
        backgroundColor:
          category && description.length > 0 ? '#2760ee' : '#d2d5da'
      }"
      :disabled="category && description.length > 0 ? false : true"
      @click="addPost"
    >
      게시
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
