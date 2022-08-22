<template>
  <div class="quick_operation">
    <div class="quick_operation-data">
      <!-- <h3 class="quick_operation-title">快捷操作</h3>
      <a-row class="grid-demo" :gutter="[24, 12]">
        <a-col :span="12">
          <div class="quick_operation--detail">
            <span class="detail-text"> 站点文章数量 </span>
            <span class="detail-total"> 59 </span>
            <a-link href="#">查看更多</a-link>
          </div>
        </a-col>
        <a-col :span="12">
          <div>col - 6</div>
        </a-col>
        <a-col :span="12">
          <div>col - 6</div>
        </a-col>
        <a-col :span="12">
          <div>col - 6</div>
        </a-col>
      </a-row> -->
      <!-- <a-divider style="border-bottom-width: 1px" /> -->
      <h3 class="quick_operation-title">操作日志</h3>
      <a-list :bordered="false">
        <!-- <template #scroll-loading>
          <div v-if="bottom">No more data</div>
          <a-spin v-else />
        </template> -->
        <a-list-item v-for="item of data.logList" :key="item">
          {{ logType[item.sentence] }}
          |
          {{ item.ip }}
          |
          {{ item.time }}
          </a-list-item>
      </a-list>
    </div>
    <div class="quick_operation-timeline">
      <h3 class="quick_operation-title">最近一次部署流程</h3>
      <a-timeline>
        <a-timeline-item label="2017-03-10" lineType="dashed">
          The first milestone
          <br />
          <a-typography-text
            type="secondary"
            :style="{ fontSize: '12px', marginTop: '4px' }"
          >
            This is a descriptive message
          </a-typography-text>
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
  <div class="quick_charts"></div>
</template>
<script>
import { reactive, ref, onMounted, inject } from 'vue';
import { getLogType } from '@/service/log/config';
import { DateType } from '@/utils/dateType';

export default {
  name: "site-details",

setup() {
    const { getLogList } = inject("api");
    const current = ref(1);
    const bottom = ref(false);
    const data = reactive({
      logList: []
    });

    const fetchData = () => {
      // console.log('reach bottom!');
      if (current.value <= 5) {
        window.setTimeout(() => {
          const index = data.length;
          data.push(
            `Beijing Bytedance Technology Co., Ltd. ${index + 1}`,
            `Bytedance Technology Co., Ltd. ${index + 2}`,
            `Beijing Toutiao Technology Co., Ltd. ${index + 3}`,
            `Beijing Volcengine Technology Co., Ltd. ${index + 4}`,
            `China Beijing Bytedance Technology Co., Ltd. ${index + 5}`
          );
          current.value += 1
        }, 2000)
      } else {
        bottom.value = true
      }
    }
    onMounted(async () => {
      const { items: logList } = await getLogList({limit: 10, offset: 1});
      logList.map(items => {
        const ips = items.ip.split(',');
        const ipList = ips.filter(item => item !== '127.0.0.1')
        items.ip = ipList.join();
        items.time = DateType(items.time)
      })
      data.logList = logList
    })
    return {
      current,
      bottom,
      data,
      fetchData,
      logType: getLogType()
    }
}
}
</script>
<style scoped>
.quick_operation {
  display: flex;
  height: 100%;
}
.quick_operation-timeline {
  padding-left: 20px;
  box-sizing: border-box;
  flex: 1;
}
.quick_operation-data {
  flex: 1;
  padding: 0 10px 0 20px;
  box-sizing: border-box;
  /* background-color: skyblue; */
  height: 100%;
}
.quick_charts {
  display: flex;
  height: 100%;
  /* background-color: red; */
}
.quick_operation-title {
  color: var(--color-text-1);
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.grid-demo .arco-col {
  height: 70px;
  font-size: 14px;
  color: var(--color-text-3);
}

.detail-text {
  font-size: 14px;
  color: var(--color-text-3);
}

.grid-demo .arco-col > div {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 100%;
  border: 1px solid var(--color-border-3);
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  /* background-color: rgba(var(--arcoblue-6), 0.9); */
}
.detail-total {
  font-size: 28px;
  color: var(--color-text-1);
  font-weight: 500;
}

.quick_operation--detail {
  display: flex;
}

.quick_operation--detail span {
  flex: 1;
}

.quick_operation--detail .detail-total {
  text-align: center;
}

.quick_operation--detail a {
  font-size: 12px;
}

.arco-list-item {
  padding: 10px;
  font-size: 12px;
  color: var(--color-text-2);
}
</style>
