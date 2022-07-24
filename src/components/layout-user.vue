<template>
  <div class="actions_dropdown">
    <a-dropdown @select="handleSelect">
      <a-avatar
        :style="{
          marginRight: '24px',
          verticalAlign: 'middle',
          backgroundColor: '#14a9f8',
        }"
      >
      Admin
      </a-avatar>
      <template #content>
        <a-doption>个人信息</a-doption>
        <a-doption>退出登录</a-doption>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "layout-user",

  components: {},

  setup() {
    const $router = useRouter();
    const handleSelect = () => {
      $router.push("/login");
    };
    return {
      handleSelect,
    };
  },
};
</script>

<style>
.actions_dropdown {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
}
</style>