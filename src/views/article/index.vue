<template>
  <a-range-picker
    style="width: 254px; margin: 10px 0 10px 0;"
  />
  <a-table
    :scroll="scroll"
    :bordered="false"
    :loading="loading"
    :columns="columns"
    :data="data.articles"
    :pagination="data.pagination"
    @page-change="getList"
  >
    <template #optional>
      <a-button type="text">编辑</a-button>
      <a-button type="text" status="danger">删除</a-button>
    </template>
  </a-table>
</template>

<script>
import { reactive, ref, inject, onMounted } from "vue";
import { columns } from "@/service/article/config";

export default {
  name: "article-list",
  setup() {
    const scroll = {
      y: 400
    };
    const { getArticlesList } = inject("api");

    const loading = ref(true);

    const data = reactive({ articles: [], pagination: { pageSize: 10, total: 0 } });

    onMounted(async () => {
      await getList()
    });

    const getList = async (page = 1) => {
      loading.value = true;

      const prarms = {
        pageSize: data.pagination.pageSize,
        page
      }
      const { result, total } =  await getArticlesList(prarms);
      data.articles = result;
      data.pagination.total = total;
      loading.value = false;
    }
    
    return {
      columns,
      loading,
      data,
      getList,
      scroll
    };
  },
};
</script>
