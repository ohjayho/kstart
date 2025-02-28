import BenefitView from "@/views/BenefitView.vue";
import CommunityPostDetailView from "@/views/CommunityPostDetailView.vue";
import CommunityView from "@/views/CommunityView.vue";
import HomeView from "@/views/HomeView.vue";
import InboxView from "@/views/InboxView.vue";
import Login from "@/views/Login.vue";
import LoginWithID from "@/views/LoginWithID.vue";
import SettingView from "@/views/SettingView.vue";
import SignUpWithID from "@/views/SignUpWithID.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/loginID",
      name: "loginID",
      component: LoginWithID
    },
    {
      path: "/signUpID",
      name: "signUpID",
      component: SignUpWithID
    },
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/community",
      name: "community",
      component: CommunityView
    },
    {
      path: "/benefit",
      name: "benefit",
      component: BenefitView
    },
    {
      path: "/setting",
      name: "setting",
      component: SettingView
    },
    {
      path: "/inbox",
      name: "inbox",
      component: InboxView
    },
    {
      path: "/community/:id",
      component: CommunityPostDetailView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
