<template>
  <a-collapse :default-active-key="[1]" destroy-on-hide accordion :bordered="false">
    <a-collapse-item 
      v-for="item in buildList" 
      :header="item.siteInfo.name + item.startTime" :key="item.id">
      <pre class="record"><code>{{item.content}}</code></pre>
    </a-collapse-item>
  </a-collapse>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: "build-record",
  setup() {
    const buildList = reactive([
        {
          "id": "8537125f-518e-4ef2-a693-b9fdb19a9f6c",
          "siteId": "bbc8c7a1-4bbc-4fc8-b637-3113e8dab143",
          "siteInfo": {
            name: "xxx站点"
          },
          "startTime": "2022-08-25T14:27:54.000Z",
          "endTime": null,
          "content": "[2022-08-26 00:21:41] cd /www/wwwroot/server/blog && yarn install\n[2022-08-26 00:21:41] yarn install v1.22.19\n\n[2022-08-26 00:21:41] [1/4] Resolving packages...\n\n[2022-08-26 00:21:41] success Already up-to-date.\n\n[2022-08-26 00:21:41] cd /www/wwwroot/server/blog && yarn build\n[2022-08-26 00:21:41] $ npx vitepress build\n\n[2022-08-26 00:21:42] npm WARN config init.module Use `--init-module` instead.\n\n[2022-08-26 00:21:42] vitepress v0.7.2\nvite v1.0.0-rc.9\n\n[2022-08-26 00:21:42] building client bundle...\n\n[2022-08-26 00:21:47] building server bundle...\n\n[2022-08-26 00:21:48] 'withCtx' is imported from external module 'vue' but never used\n\n[2022-08-26 00:21:48] rendering pages...\n\n[2022-08-26 00:21:48] done.\n\n[2022-08-26 00:21:48] cd /www/wwwroot/blog.giao.club && ls -l docs\n[2022-08-26 00:21:48] [success] site deployment completed",
          "userId": null,
          "status": 1
        },
        {
          "id": "8537125f-518e-4ef2-a493-b9fdb19a9f6c",
          "siteId": "bbc8c7a1-4bbc-4fc8-b637-3113e8dab143",
          "startTime": "2022-08-25T14:27:54.000Z",
          "siteInfo": {
            name: "xxx站点"
          },
          "endTime": null,
          "content": "[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] yarn install v1.22.19\n\n[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] [1/4] Resolving packages...\n\n[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] Done in 0.26s.\n\n[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] yarn install v1.22.19\n[1/4] Resolving packages...\nsuccess Already up-to-date.\nDone in 0.26s.\n\n[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] $ npx vitepress build\n\n[Thu Aug 25 2022 22:27:55 GMT+0800 (China Standard Time)] vite v1.0.0-rc.9\n\n[Thu Aug 25 2022 22:27:56 GMT+0800 (China Standard Time)] building client bundle...\n\n[Thu Aug 25 2022 22:28:01 GMT+0800 (China Standard Time)] building server bundle...\n\n[Thu Aug 25 2022 22:28:01 GMT+0800 (China Standard Time)] rendering pages...\n\n[Thu Aug 25 2022 22:28:02 GMT+0800 (China Standard Time)] done.\n\n[Thu Aug 25 2022 22:28:02 GMT+0800 (China Standard Time)] yarn run v1.22.19\n$ npx vitepress build\nvitepress v0.7.2\nvite v1.0.0-rc.9\nbuilding client bundle...\nbuilding server bundle...\nrendering pages...\ndone.\nDone in 7.29s.\n\n[Thu Aug 25 2022 22:28:02 GMT+0800 (China Standard Time)] total 16\n-rw-r--r-- 1 root root 6994 Aug 25 22:22 e5012611-3369-4ad8-81a8-b2a74b62b74c.html\n-rw-r--r-- 1 root root 7211 Aug 25 22:22 ea43ad0a-0b1d-4084-be27-8d13fcce94a0.html\n\n[Thu Aug 25 2022 22:28:02 GMT+0800 (China Standard Time)] ",
          "userId": null,
          "status": 1
        }
    ])

    return {
      buildList
    }
  },
}
</script>

<style scoped>
.record code{
  color: rgb(var(--green-7));
  /* background-color: ; */
}
.record .arco-collapse-item-content {
  background-color: var(--color-bg-1) !important;
}
</style>