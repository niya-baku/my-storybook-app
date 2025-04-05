import{j as T}from"./jsx-runtime-DoEZbXM1.js";import"./jsx-runtime-Bw5QeaCk.js";const b=({primary:f=!1,size:x="medium",label:B,onClick:S})=>{const v="rounded-md font-semibold",z=f?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-200 text-gray-800 hover:bg-gray-300",h={small:"py-1 px-2 text-sm",medium:"py-2 px-4 text-base",large:"py-3 px-6 text-lg"};return T.jsx("button",{type:"button",className:`${v} ${z} ${h[x]}`,onClick:S,children:B})};b.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const j={title:"Components/Button",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{primary:!0,label:"Button"}},a={args:{label:"Button"}},r={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,g,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const k=["Primary","Secondary","Large","Small"];export{r as Large,e as Primary,a as Secondary,t as Small,k as __namedExportsOrder,j as default};
