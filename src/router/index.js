import BenefitView from "@/views/BenefitView.vue";
import CommunityView from "@/views/CommunityView.vue";
import HomeView from "@/views/HomeView.vue";
import InboxView from "@/views/InboxView.vue";
import SettingView from "@/views/SettingView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    }
  ]
});

export default router;
