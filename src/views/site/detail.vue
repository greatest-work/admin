<template>
  <a-spin :loading="loading" tip="加载站点信息中">
    <a-page-header
      @back="back"
      title="站点详情"
      :subtitle="detail.baseInfo.name"
    >
      <a-tabs style="min-width: 700px;" default-active-key="0" position="right" v-if="!loading">
        <a-tab-pane key="0" title="基本信息">
          <BaseInfo :detail="detail.baseInfo" />
        </a-tab-pane>
        <a-tab-pane key="1" title="友情链接">
          <Friendship />
        </a-tab-pane>
        <a-tab-pane key="2" title="评论配置">
          Content of Tab Panel 2
        </a-tab-pane>
        <a-tab-pane key="3" title="主题设置"> </a-tab-pane>
        <a-tab-pane key="4" title="订阅者信息"> </a-tab-pane>
        <a-tab-pane key="5" title="构建记录"> 
          <BuildRecord />
        </a-tab-pane>
      </a-tabs>
    </a-page-header>
  </a-spin>
</template>
<script>
import { inject, reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import BaseInfo from "./components/baseInfo";
import Friendship from "./components/friendship";
import BuildRecord from "./components/buildRecord.vue";

export default {
  name: "site-detail",
  components: { BaseInfo, Friendship, BuildRecord },
  setup() {
    const $router = useRouter();
    const { getSiteInfo } = inject("api");
    const loading = ref(true);
    onMounted(async () => {
      await getInfo();
    });
    const detail = reactive({
      baseInfo: {},
    });
    const getInfo = async () => {
      loading.value = true;
      const { siteId } = $router.currentRoute.value?.params;
      detail.baseInfo = await getSiteInfo(siteId);
      loading.value = false;
    };
    const back = () => {
      $router.push("/site/list");
    };
    return {
      detail,
      getInfo,
      back,
      loading,
    };
  },
};
</script>
<style scoped>
</style>
