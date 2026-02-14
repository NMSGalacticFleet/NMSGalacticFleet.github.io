import{d as C,s as o,h as d,v as H,o as E,c as U,I as r,w as $,k as _,a2 as j,a5 as k,a6 as V,j as a,p as O,l as Y,_ as z,a4 as B}from"./chunks/framework.B5VVsMDX.js";import{M as b,c as G}from"./chunks/compressImage.D2mxjR-M.js";import{S as W,m as w,b as X}from"./chunks/createFormData.CCQEMxWl.js";import{_ as Q}from"./chunks/PicoStyle.vue_vue_type_script_setup_true_lang.BX4HGuFp.js";import{C as J}from"./chunks/CommunityMemberCard.Cbo-KgtU.js";import"./chunks/useTheme.B83WYtL7.js";import"./chunks/theme.CgB3lyiR.js";const Z=`---
prev:
  text: Community
  link: .
next: false
---

<script setup lang="ts">
import MedalDisplay from '/components/MedalDisplay.vue';

const name = 'PLAYERNAME_PLACEHOLDER';
<\/script>
`,K=`<MedalDisplay :name />
`,n=c=>(O("data-v-8a2d6e19"),c=c(),Y(),c),ee=n(()=>a("label",{class:"required",for:"name-input"},"Your name:",-1)),te=["maxlength"],ae=n(()=>a("label",{class:"required",for:"desc-input"},"Short description of yourself (1 sentence):",-1)),oe=["maxlength"],le=n(()=>a("label",{class:"required",for:"pic-input"},"Profile picture:",-1)),ne=n(()=>a("div",null,"Preview:",-1)),se=n(()=>a("hr",null,null,-1)),re=n(()=>a("h3",null,"About Me",-1)),ie=n(()=>a("h3",null,"Gameplay Interests",-1)),ue=n(()=>a("h3",null,"Departments",-1)),de=n(()=>a("h3",null,"Contact",-1)),ce=C({__name:"PlayerPageForm",setup(c){const x=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQ3MjA3NDU5NTc5MTE0MzAyNC9jVXR5NF9iZUtSaE40QW5uZS1DMXpJZ21yRjhhaE1aSDFIVURXbEVsTmVkQTdqV1llYnYzamlQOTlIaXNfWWhIdFMxaAo="),l=o(""),i=o(""),u=o(null),y=o(""),p=o(""),m=o(""),v=o(""),h=o(""),f=o(!1),g={about:"Introduce yourself",interests:"What you usually do in-game when playing",departments:"What departments you are part of and what you do there",contact:"How to contact you (Discord, Reddit, etc.)"},M=o(null),D=d(()=>!l.value||!u.value||!i.value),I=d(()=>!!(p.value||m.value||v.value||h.value));H(u,s=>{URL.revokeObjectURL(y.value),y.value=s?URL.createObjectURL(s):""});const F=d(N),L=d(()=>I.value?`${Z.replace("PLAYERNAME_PLACEHOLDER",l.value)}

# ${l.value}

## About Me

${p.value}

## Gameplay Interests

${m.value}

## Departments

${v.value}

<!-- ## Medals

${K.trim()} -->

## Contact

${h.value}`:"");function N(){return u.value?X(l.value,i.value,L.value,u.value):new FormData}async function S(s){var P;const{target:e}=s;if(!(e instanceof HTMLInputElement))return;const t=(P=e.files)==null?void 0:P[0];if(!t)return;f.value=!0;const T=await G(t);f.value=!1,u.value=T}const R=d(()=>f.value?"Compressing files...":void 0);function A(){var s;(s=M.value)==null||s.reset(),l.value="",i.value="",u.value=null,p.value="",m.value="",v.value="",h.value=""}const q=d(()=>({avatar:y.value,name:l.value,desc:i.value}));return(s,e)=>(E(),U("form",{onSubmit:e[6]||(e[6]=j(()=>{},["prevent"])),ref_key:"form",ref:M},[r(Q,null,{default:$(()=>[ee,k(a("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),maxlength:_(w),id:"name-input",type:"text"},null,8,te),[[V,l.value]]),ae,k(a("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.value=t),maxlength:_(w),id:"desc-input",type:"text"},null,8,oe),[[V,i.value]]),le,a("input",{id:"pic-input",type:"file",accept:"image/*",onChange:S},null,32)]),_:1}),ne,r(J,{"eisvana-members":[q.value],size:"small"},null,8,["eisvana-members"]),se,re,r(b,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t),placeholder:g.about,"editor-id":"about","no-upload-img":""},null,8,["modelValue","placeholder"]),ie,r(b,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=t=>m.value=t),placeholder:g.interests,"editor-id":"interests","no-upload-img":""},null,8,["modelValue","placeholder"]),ue,r(b,{modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=t=>v.value=t),placeholder:g.departments,"editor-id":"departments","no-upload-img":""},null,8,["modelValue","placeholder"]),de,r(b,{modelValue:h.value,"onUpdate:modelValue":e[5]||(e[5]=t=>h.value=t),placeholder:g.contact,"editor-id":"contact","no-upload-img":""},null,8,["modelValue","placeholder"]),r(W,{"form-data-array":[F.value],"is-busy":f.value,"is-incomplete":D.value,text:R.value,webhook:_(x),onSuccess:A},null,8,["form-data-array","is-busy","is-incomplete","text","webhook"])],544))}}),pe=z(ce,[["__scopeId","data-v-8a2d6e19"]]),me=B('<h1 id="create-user-page" tabindex="-1">Create User Page <a class="header-anchor" href="#create-user-page" aria-label="Permalink to &quot;Create User Page&quot;">​</a></h1><p>You can create your own user page here to be listed on the <a href="./">community page</a>.</p><p>If you only fill out the three required inputs, you will only get the card on the community page. For a full page, the textboxes should be filled out as well.</p><p>The textboxes support Markdown.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You must be a citizen of Eisvana in order to be listed.</p><p><a href="./../joining">How to become a citizen</a></p></div><h2 id="editing-an-existing-page" tabindex="-1">Editing an Existing Page <a class="header-anchor" href="#editing-an-existing-page" aria-label="Permalink to &quot;Editing an Existing Page&quot;">​</a></h2><p>Unfortunately, you cannot easily edit an existing page from here. However, all posts are stored on GitHub and can be edited there.</p><p>A direct link to the file is at the bottom of each page.</p><h2 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h2>',9),Me=JSON.parse('{"title":"Create User Page","description":"","frontmatter":{"next":false,"prev":{"text":"Community","link":"./"},"aside":false},"headers":[],"relativePath":"about/community/create.md","filePath":"about/community/create.md","lastUpdated":1771050583000}'),ve={name:"about/community/create.md"},Pe=C({...ve,setup(c){return(x,l)=>(E(),U("div",null,[me,r(pe)]))}});export{Me as __pageData,Pe as default};
