<template>
  <div class="layout_main">
    <a-table 
      :bordered="false"
      :columns="columns" 
      :data="data.logList" 
    />
  </div>
</template>
<script>
import { columns, getLogType } from '@/service/log/config';
import { DateType } from '@/utils/dateType';
import { reactive, inject, onMounted } from 'vue';

export default {
  name: 'log-list',
  setup() {
    const data = reactive({
      logList: []
    })
    onMounted(async () => {
      const { getLogList } = inject("api");
      const { items: logList } = await getLogList();
      logList.map(items => {
        const ips = items.ip.split(',');
        const ipList = ips.filter(item => item !== '127.0.0.1')
        items.ip = ipList.join();
        items.time = DateType(items.time);
        items.type = getLogType()[items.sentence]
      })
      data.logList = logList;
    })
    return {
      columns,
      data
    };
  }
};
</script>
<style scoped>
.layout_main {
  padding: 10px;
  box-sizing: border-box;
}
</style>
