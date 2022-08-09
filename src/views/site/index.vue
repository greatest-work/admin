<template>
  <a-space>
    <a-button @click="visible = true" type="primary">
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
    :data="data"
  >
    <template #tag="{ record }">
      <a-space>
        <a-tag v-for="item in record.tag" :key="item">{{item}}</a-tag>
      </a-space>
    </template>
  </a-table>
  <a-modal v-model:visible="visible" @ok="submitForm" title="新增站点">
    <a-form :model="form">
      <a-form-item field="name" label="站点名称">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item field="name" label="网站地址">
        <a-input v-model="form.url" />
      </a-form-item>
      <a-form-item field="dir" label="根目录地址">
        <a-input v-model="form.dir" />
      </a-form-item>
      <a-form-item field="tag" label="站点标签">
        <a-input-tag
          v-model="form.tag"
          placeholder="Please Enter"
          allow-clear
        />
      </a-form-item>
      <a-form-item
        :rules="[{ type: 'email' }]"
        field="admin"
        label="管理员邮箱"
      >
        <a-input v-model="form.admin" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { reactive, ref } from "vue";
import { columns } from "@/service/site/config";

export default {
  name: "site-list",
  setup() {
    const loading = ref(true);
    const visible = ref(false);
    const data = reactive([
      {
        key: "1",
        tag: ["1", "2"],
        name: "Jane Doe",
        salary: 23000,
        address: "32 Park Road, London",
        email: "jane.doe@example.com",
      },
    ]);
    const form = reactive({ name: "", url: "", dir: "", tag: [], admin: "" });
    setTimeout(() => (loading.value = false), 2000);
    const submitForm = () => {
      console.log(form);
    };
    return {
      columns,
      data,
      loading,
      form,
      visible,
      submitForm,
    };
  },
};
</script>
