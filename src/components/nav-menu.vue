<template>
  <a-menu
    :style="{ width: '100%' }"
    :default-open-keys="['0']"
    :default-selected-keys="['0']"
  >
    <a-menu-item key="0">
      <IconHome />
      站点看板
    </a-menu-item>
    <a-sub-menu key="1">
      <template #icon><icon-bug></icon-bug></template>
      <template #title>Navigation 2</template>
      <a-menu-item key="1_0"> <icon-apps /> Menu 1</a-menu-item>
      <a-menu-item key="1_1">Menu 2</a-menu-item>
      <a-menu-item key="1_2">Menu 3</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="2">
      <template #icon><icon-bulb></icon-bulb></template>
      <template #title>Navigation 3</template>
      <a-menu-item key="2_0">Menu 1</a-menu-item>
      <a-menu-item key="2_1">Menu 2</a-menu-item>
      <a-sub-menu key="2_2" title="Navigation 4">
        <a-menu-item key="2_2_0">Menu 1</a-menu-item>
        <a-menu-item key="2_2_1">Menu 2</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import {
  IconApps,
  IconBug,
  IconBulb,
  IconHome,
} from "@arco-design/web-vue/es/icon";

export default {
  name: "nav-component",
  components: {
    IconApps,
    IconBug,
    IconBulb,
    IconHome,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>