"use strict";(self["webpackChunkgreatest_work"]=self["webpackChunkgreatest_work"]||[]).push([[113],{4107:function(e,t,a){a.d(t,{Yp:function(){return s},jQ:function(){return i},zF:function(){return l}});const l=[{title:"标题",dataIndex:"title",ellipsis:!0,tooltip:!0},{title:"是否发布",width:100,align:"center",slotName:"status"},{title:"标签",slotName:"tag"},{title:"所属站点",dataIndex:"siteInfo.name"},{title:"更新时间",dataIndex:"updateTime",ellipsis:!0,tooltip:!0},{width:200,title:"操作",slotName:"optional",align:"center"}],i=()=>({title:[{required:!0,message:"标题必填"},{minLength:5,message:"标题长度不能少于 5 个字符"},{maxLength:100,message:"标题长度不能多于 100 个字符"}],siteId:[{required:!0,message:"发布站点必填"}],content:[{required:!0,message:"内容站点必填"},{minLength:20,message:"内容长度不能少于 20 个字符"},{maxLength:2e4,message:"内容长度不能多于 20k 个字符"}],tags:[{required:!0,message:"至少选择一个标签"}],userId:[{required:!0,message:"请选择作者"}]}),s=()=>({siteList:{value:"id",label:"name"},userList:{value:"id",label:"username"}})},4113:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(3396),i=a(7139);function s(e,t,a,s,o,u){const n=(0,l.up)("a-input"),d=(0,l.up)("a-form-item"),r=(0,l.up)("a-textarea"),m=(0,l.up)("a-input-tag"),p=(0,l.up)("a-select"),f=(0,l.up)("a-button"),c=(0,l.up)("a-form"),g=(0,l.up)("a-page-header");return(0,l.wg)(),(0,l.j4)(g,{title:"文章",onBack:s.back,subtitle:s.subtitle},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{ref:"article",rules:s.rules,model:s.data.form,style:{width:"600px"},onSubmit:s.handleSubmit},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{field:"title",label:"文章标题"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:s.data.form.title,"onUpdate:modelValue":t[0]||(t[0]=e=>s.data.form.title=e),placeholder:"请输入文章标题"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,{field:"content",label:"文章内容"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{"show-word-limit":"","auto-size":{minRows:10,maxRows:40},modelValue:s.data.form.content,"onUpdate:modelValue":t[1]||(t[1]=e=>s.data.form.content=e),placeholder:"请输入文章内容","allow-clear":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,{field:"tags",label:"文章标签"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{"default-value":[],modelValue:s.data.form.tags,"onUpdate:modelValue":t[2]||(t[2]=e=>s.data.form.tags=e),placeholder:"请输入文章标签","allow-clear":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,{field:"siteId",label:"关联站点"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{options:s.options.siteOptions,"field-names":s.fileName.siteList,modelValue:s.data.form.siteId,"onUpdate:modelValue":t[3]||(t[3]=e=>s.data.form.siteId=e),placeholder:"请选择站点"},null,8,["options","field-names","modelValue"])])),_:1}),(0,l.Wm)(d,{field:"userId",label:"作者"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{modelValue:s.data.form.userId,"onUpdate:modelValue":t[4]||(t[4]=e=>s.data.form.userId=e),placeholder:"请选择作者",options:s.options.userOptions,"field-names":s.fileName.userList},null,8,["modelValue","options","field-names"])])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{"html-type":"submit",type:"primary",long:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(s.confirmText),1)])),_:1})])),_:1})])),_:1},8,["rules","model","onSubmit"])])),_:1},8,["onBack","subtitle"])}var o=a(4870),u=a(4107),n=a(2483),d={name:"article-edit",setup(){const{getSiteList:e,getUserList:t,addArticle:a,getArticleInfo:i,updateArticles:s}=(0,l.f3)("api"),d=(0,n.tv)(),r=(0,o.qj)({form:{title:"",content:"",tags:[],siteId:"",userId:""}}),m=async({errors:e,values:t})=>{e||(w.value?await s({...t,status:0}):await a(t),p())},p=()=>{d.push("/article/list")},f=(0,o.qj)({siteOptions:[],userOptions:[]}),{type:c,id:g}=d.currentRoute.value?.query,w=(0,l.Fl)((()=>"edit"===c)),b=w.value?"编辑文章":"新增文章",h=w.value?"保存":"确认新增";return(0,l.bv)((async()=>{const{items:a}=await e(),{items:l}=await t();if(f.siteOptions=a,f.userOptions=l,console.log(f.siteOptions),g&&w){const e=await i(g);r.form={...e,tags:e?.tags.split(",")}}})),{data:r,rules:(0,u.jQ)(),fileName:(0,u.Yp)(),options:f,subtitle:b,confirmText:h,handleSubmit:m,back:p}}},r=a(89);const m=(0,r.Z)(d,[["render",s]]);var p=m}}]);