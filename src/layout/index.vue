<template>
  <a-layout v-if="!hidden" class="layout">
    <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
      <div class="logo" > </div>
      <NavMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-button class="collapse_btn" shape="round" @click="onCollapse">
          <IconCaretRight v-if="collapsed" />
          <IconCaretLeft v-else />
        </a-button>
        <LayoutUser />
      </a-layout-header>
      <a-layout style="padding: 0 24px">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item> -->
        </a-breadcrumb>
        <a-layout-content class="container">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
  <div v-else>
    <router-view />
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { Message } from "@arco-design/web-vue";
import NavMenu from "@/components/nav-menu.vue";
import LayoutUser from "@/components/layout-user.vue";
import { useRoute } from "vue-router";
import { IconCaretRight, IconCaretLeft } from "@arco-design/web-vue/es/icon";

export default defineComponent({
  name: "layout-page",
  components: {
    NavMenu,
    IconCaretRight,
    IconCaretLeft,
    LayoutUser
  },
  setup() {
    const route = useRoute();
    const collapsed = ref(false);
    const hidden = ref(false);
    watch(
      () => route.meta,
      (val) => (hidden.value = val.hidden)
    );

    const onCollapse = () => {
      collapsed.value = !collapsed.value;
    };


    return {
      collapsed,
      onCollapse,
      hidden,
      onClickMenuItem(key) {
        Message.info({ content: `You select ${key}`, showIcon: true });
      },
    };
  },
});
</script>
<style scoped>
.container {
  padding: 10px;
  box-sizing: border-box;
}
.layout {
  height: 100vh;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
  box-sizing: border-box;
}
.layout :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
.layout :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}
.layout :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}
.layout :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}
.layout :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}
.layout :deep(.arco-layout-footer),
.layout :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  color: var(--color-black);
  font-size: 16px;
  font-stretch: condensed;
}
.arco-layout-header {
  padding-left: 20px;
  display: flex;
  align-items: center;
}

</style>
