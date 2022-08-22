<template>
  <a-result
    status="403"
    subtitle="Access to this resource on the server is denied."
  >
    <template #extra>
      <a-space>
        <a-button type="primary" @click="backHome">Back</a-button>
      </a-space>
    </template>
  </a-result>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: '403-page',

  setup() {
    const $router = useRouter()
    const backHome = () => $router.push('/');
    return {
      backHome
    };
  }
};
</script>