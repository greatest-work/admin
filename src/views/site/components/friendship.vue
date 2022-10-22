<template>
  <div class="layout_main">
    <a-button @click="openModel('add')" type="primary">
      <template #icon>
        <icon-plus />
      </template>
      新增友链
    </a-button>
    <a-table
      class="table-el"
      :loading="loading"
      :bordered="false"
      :columns="columns"
      :pagination="data.pagination"
      @page-change="getList"
      :data="data.list"
    >
      <template #status="{ record }">
        <a-badge
          :status="getFriendshipStatus(record.status).status"
          :text="getFriendshipStatus(record.status).label"
        />
      </template>
      <template #logo="{ record }">
        <a-image height="40" width="40" :src="record.logo" />
      </template>
      <template #optional="{ record }">
        <a-button type="text" @click="editFriendship(record)"> 编辑 </a-button>
        <a-button type="text" status="danger"> 删除 </a-button>
      </template>
    </a-table>
  </div>
  <a-modal v-model:visible="visible" @ok="submitForm" :title="modelTitle()">
    <a-form :rules="rules" :model="data.form">
      <a-form-item field="name" label="友链名称">
        <a-input v-model="data.form.name" />
      </a-form-item>
      <a-form-item field="link" label="友链地址">
        <a-input v-model="data.form.link" />
      </a-form-item>
      <a-form-item field="logo" label="Logo">
        <a-input v-model="data.form.logo" />
      </a-form-item>
      <a-form-item field="descText" label="描述信息">
        <a-input v-model="data.form.descText" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { inject, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { friendshipColumns } from "@/service/site/config";
import { getFriendshipStatus } from "@/const/common";
import { rules } from "@/service/site/friendship"


export default {
  name: "site-friendship",
  setup() {
    const { getFriendshipList, addFriendship } = inject("api");
    const $router = useRouter();
    const { siteId } = $router.currentRoute.value?.params;
    const loading = ref(false);
    const visible = ref(false);

    onMounted(async () => {
      await getList();
    });

    const data = reactive({
      list: [],
      pagination: {
        total: 0,
      },
      form: {},
      type: "add",
    });
    const isAdd = () => data.type === "add";
    const modelTitle = () => `${isAdd() ? "新增" : "编辑"}站点`;
    
    const getList = async (offset = 1) => {
      loading.value = true;
      const params = {
        siteId,
        limit: 10,
        offset,
      };
      const { items, total } = await getFriendshipList(params);
      data.pagination.total = total;
      data.list = items;
      loading.value = false;
    };

    const submitForm = async () => {
      const params = {
          ...data.form,
          siteId
      }
      isAdd() && await addFriendship(params)
      getList() 
    };

    const editFriendship = (row) => {
      data.form = row;
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

    return {
      data,
      getList,
      getFriendshipStatus,
      editFriendship,
      openModel,
      submitForm,
      modelTitle,
      visible,
      rules: rules(),
      columns: friendshipColumns(),
    };
  },
};
</script>

<style>
.layout_main {
  padding: 10px;
  box-sizing: border-box;
}
.table-el {
  margin-top: 10px;
}
</style>