<template>
    <div class="layout_main">
    <a-table
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
            <a-image
                height="40"
                width="40"
                :src="record.logo"
            />
        </template>
        <template #optional="{ record }">
            <a-button type="text" @click="editFriendship(record)"> 编辑 </a-button>
            <a-button type="text" status="danger"> 删除 </a-button>
        </template>
    </a-table>
  </div>
</template>

<script>
import { inject, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { friendshipColumns } from '@/service/site/config';
import { getFriendshipStatus } from '@/const/common';

export default {
    name: 'site-friendship',
    setup() {
        const { getFriendshipList } = inject("api");
        const $router = useRouter();
        const { siteId } = $router.currentRoute.value?.params;
        const loading = ref(false);

        onMounted(async () => {
            await getList()
        })

        const data = reactive({
            list: [],
            pagination: {
                total: 0
            }
        })
        const getList = async (offset = 1) => {
            loading.value = true;
            const params = {
                siteId,
                limit: 10,
                offset,
            }
            const { items, total } = await getFriendshipList(params);
            data.pagination.total = total;
            data.list = items;
            loading.value = false;
        }

        const editFriendship = row => {
            console.log(row);
        }
        

        return {
            data,
            columns: friendshipColumns(),
            getList,
            getFriendshipStatus,
            editFriendship
        }
    }
}
</script>

<style>
.layout_main {
  padding: 10px;
  box-sizing: border-box;
}
</style>