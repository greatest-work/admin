<template>
  <a-collapse destroy-on-hide accordion :bordered="false" @change="getBuildInfo">
    <a-collapse-item
      v-for="item in siteBuild.list" 
      :header="DateType(item.startTime)" :key="item.id">
      <template #extra>
        <div class="pending" v-if="item.status === 0">
          <icon-loading />
          Pending
        </div>
        <div class="success" v-else-if="item.status === 1">
          <icon-check-circle/>
          Success
        </div>
      </template>
      <a-spin :loading="loading">
        <pre class="record"><code>{{siteBuild.content}}</code></pre>
      </a-spin>
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
      status: 1,
      id: ''
    });

    const getBuildList = async () => {
      const { items } = await getBuildLogList(siteId, { limit: 10, offset: 1 })
      siteBuild.list = items;
    }

    const getBuildInfo = async id => {
      loading.value = true;
      siteBuild.content = '';
      if(!id.length) return
      const { content, status } = await getBuildLogInfo(id)
      siteBuild.content = content;
      siteBuild.status = status;
      if(status === 0) {
        openSSE()
      }
      loading.value = false;
    }
    const openSSE = () => {
      const source = new EventSource(`/api/sse/test`);
      source.onopen = (e) => {
        console.log(e);
      }
      source.onmessage = (e) => {
        if(e.data === "build") getBuildList()
        if(e.data === "close") {
          source.close();
          // siteBuild.status = 1;
          siteBuild.list[0].status = 1;
          return 
        }
        siteBuild.content += `\n${e.data}`
      }
    }
    onMounted(async () => {
      openSSE()
      
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
.pending {
  color: rgb(var(--arcoblue-7))
}
.success{
  color: rgb(var(--green-6))
}
</style>