<template>
  <div class="layout_main">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="通知设置">
        <Notification />
      </a-tab-pane>
      <a-tab-pane key="2" title="用户设置"> Content of Tab Panel 2 </a-tab-pane>
      <a-tab-pane key="3" title="主题安装"> <Theme /> </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Notification from "./components/notification";
import Theme from "./components/theme";
export default {
  name: "system-config",
  components: {
    Notification,
    Theme
  },
  setup() {
    // return {};
  },
};
</script>
<style scoped>
.layout_main {
  padding: 10px;
  box-sizing: border-box;
}
</style>
