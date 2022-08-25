"use strict";(self["webpackChunkgreatest_work"]=self["webpackChunkgreatest_work"]||[]).push([[822],{4710:function(e,t,a){a.d(t,{Ec:function(){return o},dg:function(){return l},fb:function(){return u}});const n=()=>[{label:"未发布",value:0,status:"processing"},{label:"已发布",value:1,status:"success"},{label:"发布中",value:2,status:"warning"}],i=()=>[{label:"初始化完成",value:0,status:"processing"},{label:"正常运行中",value:1,status:"success"},{label:"编译中",value:2,status:"warning"}],s=()=>[{label:"未上线",value:0,status:"processing"},{label:"正常运行",value:1,status:"success"},{label:"已下线",value:2,status:"warning"}],l=e=>i().find((t=>t.value===e)),o=e=>n().find((t=>t.value===e)),u=e=>s().find((t=>t.value===e))},4004:function(e,t,a){a.d(t,{PO:function(){return s},zF:function(){return i},Av:function(){return l}});var n={site:"站点",siteName:"站点名称",siteId:"站点 ID",siteStatus:"运行状态",siteTheme:"站点主题",sitePath:"站点根路径",siteLink:"站点链接",siteLogo:"站点 Logo",createTime:"创建时间",updateTime:"更新时间",articleTotal:"文章数量",optional:"操作",friendshipName:"友链名称",friendshipDescText:"友链描述信息",friendshipStatus:"友链状态",friendshipLogo:"友链 Logo",friendshipLink:"友链链接"};const i=[{title:n.siteName,dataIndex:"name",slotName:"siteInfo",ellipsis:!0},{title:n.siteStatus,dataIndex:"status",slotName:"status",ellipsis:!0,width:180,align:"center"},{title:n.siteLink,dataIndex:"siteLink",slotName:"siteLink",width:180,ellipsis:!0},{title:n.articleTotal,dataIndex:"articleTotal",tooltip:!0,align:"center",width:120,ellipsis:!0},{title:n.createTime,dataIndex:"createTime",tooltip:!0,ellipsis:!0},{title:n.updateTime,dataIndex:"updateTime",tooltip:!0,ellipsis:!0},{title:n.optional,width:240,slotName:"optional",align:"center"}],s=[{key:"logo",type:"img",label:n.siteLogo},{key:"name",type:"text",label:n.siteName},{key:"articleTotal",type:"text",label:n.articleTotal},{key:"status",type:"badge",label:n.siteStatus},{key:"siteLink",type:"link",label:n.siteLink},{key:"path",type:"text",label:n.sitePath},{key:"id",type:"text",label:n.siteId},{key:"createTime",type:"time",label:n.createTime},{key:"updateTime",type:"time",label:n.updateTime}],l=()=>[{title:n.friendshipName,dataIndex:"name",tooltip:!0,ellipsis:!0},{title:n.friendshipLogo,slotName:"logo",ellipsis:!0},{title:n.friendshipStatus,slotName:"status",ellipsis:!0},{title:n.friendshipLink,dataIndex:"link",ellipsis:!0},{title:n.friendshipDescText,dataIndex:"descText",tooltip:!0,ellipsis:!0},{title:n.optional,align:"center",slotName:"optional"}]},6822:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var n=a(3396);const i=(0,n.Uk)(" Content of Tab Panel 2 ");function s(e,t,a,s,l,o){const u=(0,n.up)("BaseInfo"),d=(0,n.up)("a-tab-pane"),r=(0,n.up)("Friendship"),c=(0,n.up)("BuildRecord"),p=(0,n.up)("a-tabs"),g=(0,n.up)("a-page-header"),b=(0,n.up)("a-spin");return(0,n.wg)(),(0,n.j4)(b,{loading:s.loading,tip:"加载站点信息中"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{onBack:s.back,title:"站点详情",subtitle:s.detail.baseInfo.name},{default:(0,n.w5)((()=>[s.loading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(p,{key:0,style:{"min-width":"700px"},"default-active-key":"0",position:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{key:"0",title:"基本信息"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{detail:s.detail.baseInfo},null,8,["detail"])])),_:1}),(0,n.Wm)(d,{key:"1",title:"友情链接"},{default:(0,n.w5)((()=>[(0,n.Wm)(r)])),_:1}),(0,n.Wm)(d,{key:"2",title:"评论配置"},{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(d,{key:"3",title:"主题设置"}),(0,n.Wm)(d,{key:"4",title:"订阅者信息"}),(0,n.Wm)(d,{key:"5",title:"构建记录"},{default:(0,n.w5)((()=>[(0,n.Wm)(c)])),_:1})])),_:1}))])),_:1},8,["onBack","subtitle"])])),_:1},8,["loading"])}var l=a(4870),o=a(2483),u=a(7139);const d={class:"base-info_layout"},r={class:"base-info_label"},c={class:"base-info_value"};function p(e,t,a,i,s,l){const o=(0,n.up)("a-link"),p=(0,n.up)("a-badge"),g=(0,n.up)("a-image"),b=(0,n.up)("a-col"),f=(0,n.up)("a-row");return(0,n.wg)(),(0,n.j4)(f,{gutter:24},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.baseInfoConf,(e=>((0,n.wg)(),(0,n.j4)(b,{span:24,key:e.type+e.label},{default:(0,n.w5)((()=>[(0,n._)("div",d,[(0,n._)("p",r,(0,u.zw)(e.label),1),(0,n._)("p",c,["link"===e.type?((0,n.wg)(),(0,n.j4)(o,{key:0,href:i.baseInfo[e.key]},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(i.baseInfo[e.key]),1)])),_:2},1032,["href"])):"badge"===e.type?((0,n.wg)(),(0,n.j4)(p,{key:1,status:i.getSiteStatus(i.baseInfo[e.key]).status,text:i.getSiteStatus(i.baseInfo[e.key]).label},null,8,["status","text"])):"time"===e.type?((0,n.wg)(),(0,n.iD)(n.HY,{key:2},[(0,n.Uk)((0,u.zw)(i.DateType(i.baseInfo[e.key])),1)],64)):"img"===e.type?((0,n.wg)(),(0,n.j4)(g,{key:3,width:"80",src:i.baseInfo[e.key]},null,8,["src"])):((0,n.wg)(),(0,n.iD)(n.HY,{key:4},[(0,n.Uk)((0,u.zw)(i.baseInfo[e.key]),1)],64))])])])),_:2},1024)))),128))])),_:1})}var g=a(4004),b=a(9049),f=a(4710),m={name:"site-base-info",props:{detail:Object},setup(e){const{detail:t}=(0,l.BK)(e),a=(0,l.qj)([]);return{baseInfo:t,data:a,baseInfoConf:g.PO,getSiteStatus:f.dg,DateType:b.U}}},w=a(89);const h=(0,w.Z)(m,[["render",p],["__scopeId","data-v-0027c990"]]);var v=h;const T={class:"layout_main"},y=(0,n.Uk)(" 编辑 "),k=(0,n.Uk)(" 删除 ");function I(e,t,a,i,s,l){const o=(0,n.up)("a-badge"),u=(0,n.up)("a-image"),d=(0,n.up)("a-button"),r=(0,n.up)("a-table");return(0,n.wg)(),(0,n.iD)("div",T,[(0,n.Wm)(r,{loading:e.loading,bordered:!1,columns:i.columns,pagination:i.data.pagination,onPageChange:i.getList,data:i.data.list},{status:(0,n.w5)((({record:e})=>[(0,n.Wm)(o,{status:i.getFriendshipStatus(e.status).status,text:i.getFriendshipStatus(e.status).label},null,8,["status","text"])])),logo:(0,n.w5)((({record:e})=>[(0,n.Wm)(u,{height:"40",width:"40",src:e.logo},null,8,["src"])])),optional:(0,n.w5)((({record:e})=>[(0,n.Wm)(d,{type:"text",onClick:t=>i.editFriendship(e)},{default:(0,n.w5)((()=>[y])),_:2},1032,["onClick"]),(0,n.Wm)(d,{type:"text",status:"danger"},{default:(0,n.w5)((()=>[k])),_:1})])),_:1},8,["loading","columns","pagination","onPageChange","data"])])}var x={name:"site-friendship",setup(){const{getFriendshipList:e}=(0,n.f3)("api"),t=(0,o.tv)(),{siteId:a}=t.currentRoute.value?.params,i=(0,l.iH)(!1);(0,n.bv)((async()=>{await u()}));const s=(0,l.qj)({list:[],pagination:{total:0}}),u=async(t=1)=>{i.value=!0;const n={siteId:a,limit:10,offset:t},{items:l,total:o}=await e(n);s.pagination.total=o,s.list=l,i.value=!1},d=e=>{console.log(e)};return{data:s,columns:(0,g.Av)(),getList:u,getFriendshipStatus:f.fb,editFriendship:d}}};const _=(0,w.Z)(x,[["render",I]]);var S=_;const C={class:"record"};function A(e,t,a,i,s,l){const o=(0,n.up)("a-collapse-item"),d=(0,n.up)("a-collapse");return(0,n.wg)(),(0,n.j4)(d,{"default-active-key":[1],"destroy-on-hide":"",accordion:"",bordered:!1},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.buildList,(e=>((0,n.wg)(),(0,n.j4)(o,{header:e.siteInfo.name+e.startTime,key:e.id},{default:(0,n.w5)((()=>[(0,n._)("pre",C,[(0,n._)("code",null,(0,u.zw)(e.content),1)])])),_:2},1032,["header"])))),128))])),_:1})}var L={name:"build-record",setup(){const e=(0,l.qj)([{id:"8537125f-518e-4ef2-a693-b9fdb19a9f6c",siteId:"bbc8c7a1-4bbc-4fc8-b637-3113e8dab143",siteInfo:{name:"xxx站点"},startTime:"2022-08-25T14:27:54.000Z",endTime:null,content:"[2022-08-26 00:21:41] cd /www/wwwroot/server/blog && yarn install\n[2022-08-26 00:21:41] yarn install v1.22.19\n\n[2022-08-26 00:21:41] [1/4] Resolving packages...\n\n[2022-08-26 00:21:41] success Already up-to-date.\n\n[2022-08-26 00:21:41] cd /www/wwwroot/server/blog && yarn build\n[2022-08-26 00:21:41] $ npx vitepress build\n\n[2022-08-26 00:21:42] npm WARN config init.module Use `--init-module` instead.\n\n[2022-08-26 00:21:42] vitepress v0.7.2\nvite v1.0.0-rc.9\n\n[2022-08-26 00:21:42] building client bundle...\n\n[2022-08-26 00:21:47] building server bundle...\n\n[2022-08-26 00:21:48] 'withCtx' is imported from external module 'vue' but never used\n\n[2022-08-26 00:21:48] rendering pages...\n\n[2022-08-26 00:21:48] done.\n\n[2022-08-26 00:21:48] cd /www/wwwroot/blog.giao.club && ls -l docs\n[2022-08-26 00:21:48] [success] site deployment completed",userId:null,status:1},{id:"8537125f-518e-4ef2-a493-b9fdb19a9f6c",siteId:"bbc8c7a1-4bbc-4fc8-b637-3113e8dab143",startTime:"2022-08-25T14:27:54.000Z",siteInfo:{name:"xxx站点"},endTime:null,content:"[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] yarn install v1.22.19\n\n[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] [1/4] Resolving packages...\n\n[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] Done in 0.26s.\n\n[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] yarn install v1.22.19\n[1/4] Resolving packages...\nsuccess Already up-to-date.\nDone in 0.26s.\n\n[Thu Aug 25 2022 22:27:54 GMT+0800 (China Standard Time)] $ npx vitepress build\n\n[Thu Aug 25 2022 22:27:55 GMT+0800 (China Standard Time)] vite v1.0.0-rc.9\n\n[Thu Aug 25 2022 22:27:56 GMT+0800 (China Standard Time)] building client bundle...\n\n[Thu Aug 25 2022 22:28:01 GMT+0800 (China Standard Time)] building server bundle...\n\n[Thu Aug 25 2022 22:28:01 GMT+0800 (China Standard Time)] rendering pages...\n\n[Thu Aug 25 2022 22:28:02 GMT+0800 (China Standard Time)] done.\n\n[Thu Aug 25 2022 22:28:02 GMT+0800 (China Standard Time)] yarn run v1.22.19\n$ npx vitepress build\nvitepress v0.7.2\nvite v1.0.0-rc.9\nbuilding client bundle...\nbuilding server bundle...\nrendering pages...\ndone.\nDone in 7.29s.\n\n[Thu Aug 25 2022 22:28:02 GMT+0800 (China Standard Time)] total 16\n-rw-r--r-- 1 root root 6994 Aug 25 22:22 e5012611-3369-4ad8-81a8-b2a74b62b74c.html\n-rw-r--r-- 1 root root 7211 Aug 25 22:22 ea43ad0a-0b1d-4084-be27-8d13fcce94a0.html\n\n[Thu Aug 25 2022 22:28:02 GMT+0800 (China Standard Time)] ",userId:null,status:1}]);return{buildList:e}}};const W=(0,w.Z)(L,[["render",A],["__scopeId","data-v-512d1c4c"]]);var j=W,D={name:"site-detail",components:{BaseInfo:v,Friendship:S,BuildRecord:j},setup(){const e=(0,o.tv)(),{getSiteInfo:t}=(0,n.f3)("api"),a=(0,l.iH)(!0);(0,n.bv)((async()=>{await s()}));const i=(0,l.qj)({baseInfo:{}}),s=async()=>{a.value=!0;const{siteId:n}=e.currentRoute.value?.params;i.baseInfo=await t(n),a.value=!1},u=()=>{e.push("/site/list")};return{detail:i,getInfo:s,back:u,loading:a}}};const G=(0,w.Z)(D,[["render",s]]);var M=G}}]);