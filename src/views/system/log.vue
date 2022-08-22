<template>
  <div class="layout_main">
    <a-table
      :loading="loading"
      :bordered="false"
      :columns="columns"
      :pagination="data.pagination"
      @page-change="getList"
      :data="data.logList"
    />
  </div>
</template>
<script>
import { columns, getLogType } from "@/service/log/config";
import { DateType } from "@/utils/dateType";
import { reactive, inject, onMounted, ref } from "vue";

export default {
  name: "log-list",
  setup() {
    const { getLogList } = inject("api");
    const loading = ref(false);
    const data = reactive({
      logList: [],
      pagination: {
        pageSize: 10,
        total: 0,
        "show-total": true,
      },
    });
    onMounted(async () => {
      await getList();
    });
    const getList = async (offset = 1) => {
      loading.value = true;
      const { items: logList, total } = await getLogList({
        limit: 10,
        offset,
      });
      logList.map((items) => {
        const ips = items.ip.split(",");
        const ipList = ips.filter((item) => item !== "127.0.0.1");
        items.ip = ipList.join();
        items.time = DateType(items.time);
        items.type = getLogType()[items.sentence];
      });
      data.pagination.total = total;
      data.logList = logList;
      loading.value = false;
    };
    return {
      columns,
      data,
      loading,
      getList,
    };
  },
};
</script>
<style scoped>
.layout_main {
  padding: 10px;
  box-sizing: border-box;
}
</style>
