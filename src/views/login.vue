<template>
  <div class="login-container">
    <a-card :style="{ width: '360px' }">
      <template #cover>
        <div
          :style="{
            height: '140px',
            overflow: 'hidden',
            'text-align': 'center',
          }"
        >
          <img
            :style="{ width: '150px' }"
            alt="dessert"
            src="@/assets/logo.png"
          />
        </div>
      </template>
      <a-space direction="vertical" size="large">
        <a-input
          :style="{ width: '320px' }"
          placeholder="请输入账号"
          allow-clear
        />
        <a-input-password
        long
          :style="{ width: '320px' }"
          placeholder="请输入密码"
          allow-clear
        />

        <a-button type="primary" :loading="loading" @click="handleLogin" long>登录</a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue"
export default {
  name: "login-page",
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const handleLogin = () => {
      loading.value = true
      setTimeout(() => {
        router.push("/")
      }, 2000);
    }
    return {
      handleLogin,
      loading
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  width: 100vw;
}
</style>