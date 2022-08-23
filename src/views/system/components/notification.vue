<template>
  <a-form
    :rules="rules"
    :model="form"
    :style="{ width: '600px', 'margin-left': '40px' }"
    auto-label-width
    @submit="handleSubmit"
  >
  <h4>邮箱 POP3/SMTP 授权</h4>
    <a-form-item field="mailPassCode" label="授权码">
      <a-input-password 
          v-model="form.mailPassCode"
          placeholder="请输入授权码"
      />
    </a-form-item>
    <a-form-item field="sendMail" label="发送者">
      <a-input
          v-model="form.sendMail"
          placeholder="请输入发送者邮箱"
      />
    </a-form-item>
    <h4>邮箱推送设置</h4>
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
import { rules } from '@/service/system/config'
export default {
  name: "notification-comp",
  setup() {
    const specialHandle = ['buildTip', 'loginTip']
    const { getSystemList, updateSystem } = inject("api");
    const form = reactive({
      adminMail: "",
      loginTip: true,
      buildTip: true,
      mailPassCode: '',
      sendMail: ''
    });

    const handleSubmit = async ({values}) => {
      const result = {}
      Object.keys(values).forEach(key => {
        if(specialHandle.includes(key)) result[key] = Number(values[key]) + ''
        else result[key] = values[key]
      })
      await updateSystem(result)
    };

    onMounted( async() => {
        const { result } = await getSystemList();
        result.forEach(item => {
            if(specialHandle.includes(item.name)) {
              form[item?.name] = !!Number(item.value);
            } else {
              form[item?.name] = item.value;
            }
        })
    })
    return {
      form,
      rules: rules(),
      handleSubmit,
    };
  },
};
</script>

<style>
</style>