<template>
  <a-page-header title="文章" @back="back" :subtitle="subtitle">
    <a-form
      ref="article"
      :rules="rules"
      :model="data.form"
      :style="{ width: '600px' }"
      @submit="handleSubmit"
    >
      <a-form-item field="title" label="文章标题">
        <a-input v-model="data.form.title" placeholder="请输入文章标题" />
      </a-form-item>

      <a-form-item field="content" label="文章内容">
        <a-textarea
          show-word-limit
          :auto-size="{
            minRows: 10,
            maxRows: 40,
          }"
          v-model="data.form.content"
          placeholder="请输入文章内容"
          allow-clear
        />
      </a-form-item>
      <a-form-item field="tags" label="文章标签">
        <a-input-tag
          :default-value="[]"
          v-model="data.form.tags"
          placeholder="请输入文章标签"
          allow-clear
        />
      </a-form-item>
      <a-form-item field="siteId" label="关联站点">
        <a-select
          :options="options.siteOptions"
          :field-names="fileName.siteList"
          v-model="data.form.siteId"
          placeholder="请选择站点"
        >
        </a-select>
      </a-form-item>
      <a-form-item field="userId" label="作者">
        <a-select
          v-model="data.form.userId"
          placeholder="请选择作者"
          :options="options.userOptions"
          :field-names="fileName.userList"
        >
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" type="primary" long>
          {{ confirmText }}
        </a-button>
      </a-form-item>
    </a-form>
  </a-page-header>
</template>

<script>
import { reactive, inject, onMounted, computed } from "vue";
import { rules, fileName } from "@/service/article/config";
import { useRouter } from "vue-router";

export default {
  name: "article-edit",
  setup() {
    const {
      getSiteList,
      getUserList,
      addArticle,
      getArticleInfo,
      updateArticles,
    } = inject("api");
    const $router = useRouter();
    const data = reactive({
      form: {
        title: "",
        content: "",
        tags: [],
        siteId: "",
        userId: "",
      },
    });
    const handleSubmit = async ({ errors, values }) => {
      if (errors) return;
      isEdit.value ? await updateArticles({...values, status: 0}) : await addArticle(values);
      back();
    };

    const back = () => {
      $router.push("/article/list");
    };

    const options = reactive({
      siteOptions: [],
      userOptions: [],
    });
    const { type, id } = $router.currentRoute.value?.query;

    const isEdit = computed(() => type === "edit");

    const subtitle = isEdit.value ? "编辑文章" : "新增文章";
    const confirmText = isEdit.value ? "保存" : "确认新增";

    onMounted(async () => {
      const { items: siteOptions } = await getSiteList();
      const { items: userOptions } = await getUserList();
      options.siteOptions = siteOptions;
      options.userOptions = userOptions;
      console.log(options.siteOptions);
      if (id && isEdit) {
        const res = await getArticleInfo(id);
        data.form = { ...res, tags: res?.tags.split(",") };
      }
    });

    return {
      data,
      rules: rules(),
      fileName: fileName(),
      options,
      subtitle,
      confirmText,
      handleSubmit,
      back,
    };
  },
};
</script>
