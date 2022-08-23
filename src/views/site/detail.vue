<template>
  <a-page-header @back="back" title="站点详情" :subtitle="detail.name">
    <a-tabs default-active-key="1" position="left">
      <a-tab-pane key="0" title="基本信息">
      </a-tab-pane>
      <a-tab-pane key="1" title="友情链接">
      </a-tab-pane>
      <a-tab-pane key="2" title="评论配置"> Content of Tab Panel 2 </a-tab-pane>
      <a-tab-pane key="3" title="主题设置"> </a-tab-pane>
    </a-tabs>
  </a-page-header>
</template>
<script>
import { inject, reactive, onMounted } from 'vue';
import { useRouter } from "vue-router";

export default {
  name: 'site-detail',

  setup() {
    const $router = useRouter();
    const { getSiteInfo } = inject("api");
    onMounted(async () => {
      await getInfo()
    })
    const detail = reactive({
      name: ''
    })
    const getInfo = async () => {
      const { siteId } = $router.currentRoute.value?.params; 
      console.log(detail);
      const { name } = await getSiteInfo(siteId);
      detail.name = name
    }
    const back = () => {
      $router.push('/site/list')
    }
    return {
      detail,
      getInfo,
      back,
    };
  }
};
</script>
<style scoped>

</style>
