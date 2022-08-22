<template>
  <a-form
    :model="form"
    :style="{ width: '600px', 'margin-left': '60px', 'margin-top': '10px' }"
    auto-label-width
    @submit="handleSubmit"
  >
    <a-form-item field="loginTip" label="登录通知">
      <a-switch type="line" v-model="form.loginTip"/>
    </a-form-item>
    <a-form-item field="buildTip" label="构建通知">
      <a-switch type="line" v-model="form.buildTip"/>
    </a-form-item>
    <a-form-item field="adminMail" label="通知邮箱">
      <a-input
        v-model="form.adminMail"
        placeholder="请输入邮箱"
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" long html-type="submit">保存配置</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive, onMounted, inject } from "vue";
export default {
  name: "notification-comp",
  setup() {
    const { getSystemList } = inject("api");
    const form = reactive({
      adminMail: "",
      loginTip: 1,
      buildTip: 1,
    });

    const handleSubmit = (data) => {
      console.log(data);
    };

    onMounted( async() => {
        const { result } = await getSystemList();
        result.forEach(item => {
            form[item?.name] = item.value
        })
    })
    return {
      form,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>