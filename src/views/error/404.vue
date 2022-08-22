<template>
  <a-result status="404" subtitle="Whoops, that page is gone.">
    <template #extra>
      <a-space>
        <a-button type="primary">Back</a-button>
      </a-space>
    </template>
  </a-result>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: '404-page',
  setup() {
    const $router = useRouter()
    const backHome = () => $router.push('/');
    return {
      backHome
    };
  }
};
</script>