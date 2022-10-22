<template>
  <div class="layout_main">
    <a-space style="margin: 10px 0">
      <!-- <a-range-picker style="width: 254px" /> -->
      <a-button @click="openModel('add')" type="primary">
        <template #icon>
          <icon-plus />
        </template>
        新增文章
      </a-button>
    </a-space>

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
      <template #status="{ record }">
        <a-badge :status="getArticleStatus(record.status).status" :text="getArticleStatus(record.status).label" />
      </template>
      <template #tag="{ record }">
        <!-- {{record.tags}} -->
        <a-space>
          <template v-for="(tag, index) in getColumusTags(record)" >
            <a-tag v-if="index < maxTagNum" size="small" :key="tag">{{
              tag
            }}</a-tag>
          </template>
          <a-tag v-if="getColumusTags(record).length > maxTagNum" size="small">
            <a-tooltip :content="getTagsTipContent(record)">
              <span>
                + {{
                  getColumusTags(record).length - maxTagNum
                }}
              </span>
            </a-tooltip>
          </a-tag>
        </a-space>
      </template>
      <template #optional="{ record }">
        <a-button type="text" @click="openModel('edit', record.id)">编辑</a-button>
        <a-button type="text" @click="deleteArticle(record.id)" status="danger"
          >删除</a-button
        >
      </template>
    </a-table>
  </div>
</template>

<script>
import { reactive, ref, inject, onMounted } from "vue";
import { columns } from "@/service/article/config";
import { getArticleStatus } from "@/const/common";
import { useRouter } from "vue-router";
import { DateType } from '@/utils/dateType';
import { Modal } from '@arco-design/web-vue';

export default {
  name: "article-list",
  setup() {
    const scroll = {
      y: 600,
    };
    const { getArticlesList, delArticle } = inject("api");
    const $router = useRouter();
    const loading = ref(true);
    const data = reactive({
      articles: [],
      pagination: {
        pageSize: 10,
        total: 0,
        "show-total": true,
      },
    });
    
    const site = reactive({ list: [] });
    onMounted(async () => {
      await getList();
    });

    const getList = async (page = 1) => {
      loading.value = true;
      const prarms = {
        pageSize: data.pagination.pageSize,
        page,
      };
      const { items, total } = await getArticlesList(prarms);
      items.forEach(item => {
        item.createTime = DateType(item.createTime);
        item.updateTime = DateType(item.updateTime);
      })
      data.articles = items;
      data.pagination.total = total;
      loading.value = false;
    };

    const maxTagNum = ref(2)

    const getColumusTags = ({ tags }) => {
      return tags?.split(',') ?? []
    }

    const getTagsTipContent = (record) => {
      const tags = getColumusTags(record);
      return tags?.splice(maxTagNum.value, tags?.length).join(',')
    }

    const deleteArticle = async (id) => {
      Modal.warning({
        title: '温馨提示',
        content: '确定删除这篇文章吗？继续将无法找回',
        'on-before-ok': async function (done) {
          await delArticle(id);
          await getList();
          done();
        }
      });
    };

    const openModel = (type, id = undefined) => {
      console.log(type);
      $router.push({
        path: "/article/edit",
        query: {
          type,
          id
        }
      });
    };

    return {
      columns,
      loading,
      data,
      scroll,
      site,
      getArticleStatus,
      getList,
      deleteArticle,
      openModel,
      maxTagNum,
      getColumusTags,
      getTagsTipContent
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