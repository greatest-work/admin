<template>
    <div>{{listInfo}}</div>
</template>


<script>
import { inject, reactive } from 'vue' 
export default {
    name: 'site-list',
    setup() {
        const api = inject('api');
        const listInfo = reactive({
            result: [],
            total: 0
        })
        const getSiteList = async () => {
            const {result, total} = await api.getSiteList()
            listInfo.result = result;
            listInfo.total = total;
        }
        getSiteList()
        return {
            listInfo
        }
        // const api = inject('api');
        // console.log(await api.getSiteList());
    }
}
</script>

<style>

</style>