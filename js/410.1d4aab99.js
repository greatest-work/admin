"use strict";(self["webpackChunkgreatest_work"]=self["webpackChunkgreatest_work"]||[]).push([[410],{410:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});var n=a(3396);const s=(0,n.Uk)(" Content of Tab Panel 2 ");function i(t,e,a,i,u,o){const l=(0,n.up)("a-tab-pane"),c=(0,n.up)("a-tabs"),r=(0,n.up)("a-page-header");return(0,n.wg)(),(0,n.j4)(r,{onBack:i.back,title:"站点详情",subtitle:i.detail.name},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{"default-active-key":"1",position:"left"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{key:"0",title:"基本信息"}),(0,n.Wm)(l,{key:"1",title:"友情链接"}),(0,n.Wm)(l,{key:"2",title:"评论配置"},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(l,{key:"3",title:"主题设置"})])),_:1})])),_:1},8,["onBack","subtitle"])}var u=a(4870),o=a(2483),l={name:"site-detail",setup(){const t=(0,o.tv)(),{getSiteInfo:e}=(0,n.f3)("api");(0,n.bv)((async()=>{await s()}));const a=(0,u.qj)({name:""}),s=async()=>{const{siteId:n}=t.currentRoute.value?.params;console.log(a);const{name:s}=await e(n);a.name=s},i=()=>{t.push("/site/list")};return{detail:a,getInfo:s,back:i}}},c=a(89);const r=(0,c.Z)(l,[["render",i]]);var k=r}}]);