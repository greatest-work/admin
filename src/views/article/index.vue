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
    @page-size-change="getList"
  >
    <template #status={record}>
      {{ RELEASE_STATUS[record.status] }}
    </template>
    <template #tag="{ record }">
      <!-- {{record.tags}} -->
        <a-space>
          <a-tag v-for="tag in record.tags.split(',')" :key="tag">{{tag}}</a-tag>
        </a-space>
    </template>
    <template #optional={record}>
      <a-button type="text" @click="eidtArticle(record)">编辑</a-button>
      <a-button type="text" @click="deleteArticle(record.id)" status="danger">删除</a-button>
    </template>
  </a-table>
    <a-modal v-model:visible="visible" @ok="submitForm" title="新增站点">
    <a-form :model="data.form">
      <a-form-item field="title" label="文章标题">
        <a-input v-model="data.form.title" />
      </a-form-item>
      <a-form-item field="siteId" label="文章所属站点">
        <a-select
          v-model="data.form.siteId" 
          :options="site.list" :field-names="siteFieldNames"
          placeholder="选择站点" allow-clear>
        </a-select>
      </a-form-item>
      <a-form-item field="tags" label="文章标签">
        <a-input-tag
          v-model="data.form.tags"
          placeholder="请选择文章标签"
          allow-clear
        />
      </a-form-item>
      <!-- <a-form-item
        :rules="[{ type: 'email' }]"
        field="admin"
        label="管理员邮箱"
      >
        <a-input v-model="form.admin" />
      </a-form-item> -->
    </a-form>
  </a-modal>
</template>

<script>
import { reactive, ref, inject, onMounted } from "vue";
import { columns } from "@/service/article/config";
import { RELEASE_STATUS } from "@/const/common";
export default {
  name: "article-list",
  setup() {
    const scroll = {
      y: 400
    };
    const { getArticlesList, getSiteList, updateArticles } = inject("api");

    const loading = ref(true);
    const visible = ref(false)
    const data = reactive({ 
      articles: [], 
      pagination: { 
        pageSize: 10, 
        total: 0,
        'show-total': true,
        'show-page-size': true,
        // onChange: getList()
      }, 
      form: {
        title: '', 
        tags: [], 
        siteId: []
      }
    });
    const site = reactive({list: []})
    const siteFieldNames = {value: 'id', label: 'name'}
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
    
    const submitForm = async () => {
      await updateArticles(data.form);
      await getList()
    }
    
    const eidtArticle = async row => {
      data.form = { ...row, tags: row.tags?.split(',') }
      const { result } = await getSiteList() ?? [];
      site.list = result;
      visible.value = true;
    }

    const deleteArticle = async id => {
      console.log(id);
    }

    return {
      columns,
      loading,
      data,
      visible,
      scroll,
      site,
      siteFieldNames,
      getList,
      eidtArticle,
      deleteArticle,
      submitForm,
      RELEASE_STATUS
    };
  },
};
</script>
