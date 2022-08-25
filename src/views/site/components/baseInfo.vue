<template>
    <!-- <a-descriptions style="margin: 0 20px;" :data="data" size="large" :column="1"/> -->
    <a-row :gutter="24">
      <a-col :span="24" v-for="item in baseInfoConf" :key="item.type + item.label">
        <div class="base-info_layout">
            <p class="base-info_label">{{item.label}}</p>
            <p class="base-info_value">
                <template v-if="item.type === 'link'">
                    <a-link :href="baseInfo[item.key]">{{baseInfo[item.key]}}</a-link>
                </template>
                <template v-else-if="item.type === 'badge'">
                    <a-badge 
                        :status="getSiteStatus(baseInfo[item.key]).status" 
                        :text="getSiteStatus(baseInfo[item.key]).label" 
                    />
                </template>
                <template v-else-if="item.type === 'time'">
                    {{DateType(baseInfo[item.key])}}
                </template>
                <template v-else-if="item.type === 'img'">
                    <a-image
                        width="80"
                        :src="baseInfo[item.key]"
                    />
                </template>
                <template v-else>
                    {{baseInfo[item.key]}}
                </template>
            </p>
        </div>
      </a-col>
    </a-row>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { baseInfoConf } from '@/service/site/config'
import { DateType } from '@/utils/dateType';
import { getSiteStatus } from "@/const/common";

export default {
  name: 'site-base-info',

  props: {
    detail: Object
  },

  setup(props) {

    const { detail: baseInfo } = toRefs(props);
    const data = reactive([]);

    return {
      baseInfo,
      data,
      baseInfoConf,
      getSiteStatus,
      DateType
    }
  }
};
</script>
<style scoped>
.base-info_layout {
    display: flex;
    color: var(--color-neutral-6);
    align-items: center;
    min-height: 40px;
}
.base-info_label {
    min-width: 100px;
}
.base-info_layout p {
    font-size: 14px;
    margin: 0;
    /* min-height: 40px; */
}
.base-info_value {
    font-weight: 500;
    color: var(--color-neutral-10);
}
.arco-link {
    padding: 0;
}
</style>
