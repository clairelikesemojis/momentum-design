import"./index-fLtleMXh.js";import{k as p}from"./lit-element-CPYlYYac.js";import{C as m}from"./index-fQJcZKNb.js";import{I as l,A as d,a as u}from"./iconprovider.component-CoF-pQB9.js";import{p as v,d as x}from"./utils-DqTC_2h9.js";import"./create-context-89xeped_.js";class g extends m{constructor(){super(...arguments),this.iconProviderContext=v.consume({host:this,context:l.Context})}render(){var n,t,i,r;return p`
      <p>URL: ${(n=this.iconProviderContext.value)==null?void 0:n.url}</p>
      <p>File Extension: ${(t=this.iconProviderContext.value)==null?void 0:t.fileExtension}</p>
      <p>Length Unit: ${(i=this.iconProviderContext.value)==null?void 0:i.lengthUnit}</p>
      <p>Default Size: ${(r=this.iconProviderContext.value)==null?void 0:r.size}</p>
      <mdc-icon name="accessibility-regular"></mdc-icon>
    `}}g.register("mdc-subcomponent-icon");const h=e=>p`
  <mdc-iconprovider 
    url=${e.url}
    file-extension=${e["file-extension"]}
    length-unit=${e["length-unit"]}
    size=${e.size}>
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`,$={title:"Components/iconprovider",tags:["autodocs"],component:"mdc-iconprovider",render:h,parameters:{badges:["stable"]},argTypes:{"file-extension":{options:d,control:{type:"radio"}},"length-unit":{options:u,control:{type:"inline-radio"}},...x(["Context","default"])}},o={args:{url:"./icons/svg","file-extension":"svg","length-unit":"em",size:1}};var s,c,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    url: './icons/svg',
    'file-extension': 'svg',
    'length-unit': 'em',
    size: 1
  }
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const y=["Primary"];export{o as Primary,y as __namedExportsOrder,$ as default};
