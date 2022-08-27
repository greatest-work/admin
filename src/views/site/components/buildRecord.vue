<template>
  <a-collapse destroy-on-hide accordion :bordered="false" @change="getBuildInfo">
    <a-collapse-item
      v-for="item in siteBuild.list" 
      :header="DateType(item.startTime)" :key="item.id">
      <a-spin :loading="loading">
        <pre class="record"><code>{{siteBuild.content}}</code></pre>
      </a-spin>
      <icon-loading v-if="siteBuild.status === 0" />
    </a-collapse-item>
  </a-collapse>
</template>

<script>
import { reactive, inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { DateType } from '@/utils/dateType';

export default {
  name: "build-record",
  setup() {
    const { getBuildLogInfo, getBuildLogList } = inject("api");
    const $router = useRouter();
    const { siteId } = $router.currentRoute.value?.params;
    const loading = ref(false)
    const siteBuild = reactive({
      list: [],
      content: '',
      status: 1
    });

    const getBuildList = async () => {
      const { items } = await getBuildLogList(siteId, { limit: 10, offset: 1 })
      siteBuild.list = items;
    }

    const getBuildInfo = async id => {
      loading.value = true;
      siteBuild.content = ''
      if(!id.length) return
      const { content, status } = await getBuildLogInfo(id)
      siteBuild.content = content;
      siteBuild.status = status;
      loading.value = false;
    }

    onMounted(async () => {
      await getBuildList()
    })

    return {
      siteBuild,
      loading,
      getBuildInfo,
      getBuildList,
      DateType
    }
  },
}
</script>

<style scoped>
.record code{
  display: block;
  width: 100%;
  color: rgb(var(--green-7));
  /* background-color: ; */
}
.record .arco-collapse-item-content {
  background-color: var(--color-bg-1) !important;
}
</style>