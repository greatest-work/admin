<template>
  <div class="layout_main">
    <a-space style="margin: 10px 0">
      <a-button @click="openModel('add')" type="primary">
        <template #icon>
          <icon-plus />
        </template>
        新增站点
      </a-button>
    </a-space>
    <a-table
      :bordered="false"
      :loading="loading"
      :columns="columns"
      :data="data.site"
    >
      <template #siteInfo="{ record }">
        <a-link :href="'#/site/detail/'+record.id">
        {{record.name}}
        </a-link>
      </template>
      <template #siteLink="{ record }">
        <a-link :href="record.siteLink" target="_blank">
        {{record.siteLink}}
        </a-link>
      </template>
      <template #status="{ record }">
        <a-badge 
            :status="getSiteStatus(record.status).status" 
            :text="getSiteStatus(record.status).label" 
        />
      </template>

      <template #optional="{ record }">
        <a-button type="text" @click="startBuildSite(record.id)">构建</a-button>
        <a-button type="text" @click="editSite(record)">编辑</a-button>
        <a-button type="text" @click="toDeleteSite(record.id)" status="danger"
          >删除</a-button
        >
      </template>
    </a-table>
  </div>
  <a-modal v-model:visible="visible" @ok="submitForm" :title="modelTitle()">
    <a-form :model="data.form">
      <a-form-item field="name" label="站点名称">
        <a-input v-model="data.form.name" />
      </a-form-item>
      <a-form-item :rules="[{ type: 'url' }]" field="siteLink" label="网站地址">
        <a-input v-model="data.form.siteLink" />
      </a-form-item>
      <a-form-item field="path" label="根目录地址">
        <a-input v-model="data.form.path" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { reactive, ref, inject, onMounted } from "vue";
import { columns } from "@/service/site/config";
import { Modal } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import { DateType } from '@/utils/dateType';
import { getSiteStatus } from '@/const/common';

export default {
  name: "site-list",

  setup() {
    const scroll = {
      y: 400,
    };
    const $router = useRouter();
    const { getSiteList, buildSite, deleteSite, updateSite, addSite } =
      inject("api");

    const loading = ref(true);
    const visible = ref(false);
    const data = reactive({
      site: [],
      pagination: {
        pageSize: 10,
        total: 0,
      },
      form: {
        name: "",
        siteLink: "",
        path: "",
        admin: "",
      },
      type: "add",
    });

    onMounted(async () => {
      await getList();
    });
    const isAdd = () => data.type === "add";
    const modelTitle = () => `${isAdd() ? "新增" : "编辑"}站点`;

    const submitForm = async () => {
      isAdd() ? await addSite(data.form) : await updateSite(data.form);
      await getList();
    };
    const getList = async (page = 1) => {
      loading.value = true;
      const prarms = {
        pageSize: data.pagination.pageSize,
        page,
      };
      const { items, total } = await getSiteList(prarms);
      items.forEach(item => {
        item.createTime = DateType(item.createTime);
        item.updateTime = DateType(item.updateTime);
      })
      data.site = items;
      data.pagination.total = total;
      loading.value = false;
    };

    const startBuildSite = async (id) => {
      await buildSite(id);
      await getList();
    };

    const toDeleteSite = (id) => {
      Modal.warning({
        title: "温馨提示",
        content: "确定删除这个站点吗？继续将无法找回",
        "on-before-ok": async function (done) {
          await deleteSite(id);
          await getList();
          done();
        },
      });
    };

    const openModel = (type) => {
      data.form = {
        name: "",
        siteLink: "",
        path: "",
        admin: "",
      };
      data.type = type;
      visible.value = true;
    };

    const editSite = (row) => {
      openModel("edit");
      data.form = { ...row };
    };

    const getSiteInfo = id => {
      $router.push({
        path: `/site/detail/${id}`
      })
    }

    return {
      columns,
      loading,
      data,
      getList,
      scroll,
      visible,
      submitForm,
      startBuildSite,
      toDeleteSite,
      editSite,
      modelTitle,
      openModel,
      getSiteInfo,
      getSiteStatus
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