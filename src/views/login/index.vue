<template>
  <div class="login-container">
    <a-card :style="{ width: '360px' }" :bordered="false">
      <!-- <template #cover>
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
      </template> -->
      <h2 class="login-form-title">Greatest Work</h2>
      <p class="login-form-sub-title">Login Greatest Work admin</p>
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
        <div class="login-form-password-actions">
          <a-checkbox value="1">记住密码</a-checkbox><a-link href="#">忘记密码</a-link>
        </div>
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
.login-form-password-actions {
    display: flex;
    justify-content: space-between;
}
.login-form-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 0;
}
.login-form-sub-title {
  color: var(--color-text-3);
  font-size: 16px;
  line-height: 24px;
  margin: 4px 0;
}
</style>