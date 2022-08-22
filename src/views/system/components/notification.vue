<template>
  <a-form
    :model="form"
    :style="{ width: '600px' }"
    auto-label-width
    @submit="handleSubmit"
  >
    <a-form-item field="name" label="Username">
      <a-input
        v-model="form.name"
        placeholder="please enter your username..."
      />
    </a-form-item>
    <a-form-item field="post" label="Post">
      <a-input v-model="form.post" placeholder="please enter your post..." />
    </a-form-item>
    <a-form-item field="isRead">
      <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "notification-comp",
  setup() {
    const form = reactive({
      name: "",
      post: "",
      isRead: false,
    });
    const handleSubmit = (data) => {
      console.log(data);
    };

    return {
      form,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>