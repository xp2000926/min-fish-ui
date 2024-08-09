import{f as k}from"./index-BPHu6psy.js";import{m as C,B}from"./FishProvider-fbpEsjVz.js";import{j as a}from"./jsx-runtime-QvZ8i92b.js";import"./index-DZLKizrv.js";import"./index-uubelm5h.js";const S=C({root:{backgroundColor:"red",padding:"100px",border:"10px solid pink"}}),x=()=>{const f=S();return a.jsx("div",{className:f.root,children:a.jsx(B,{primary:!0,label:"Button"})})};x.__docgenInfo={description:"",methods:[],displayName:"Custom"};const j=`import { Button, tokens } from "min-fish-ui";\r
import { makeStyles } from "@griffel/react";\r
\r
const useClasses = makeStyles({\r
  root: {\r
    backgroundColor: "red",\r
    padding: "100px",\r
    border: \`10px solid pink\`,\r
    // border: \`10px solid \${tokens.colorPaletteRedBackground1}\`,\r
  },\r
});\r
\r
export const Custom = () => {\r
  const styles = useClasses();\r
  return (\r
    <div className={styles.root}>\r
      <Button primary label="Button" />\r
    </div>\r
  );\r
};\r
`,N={title:"Example/Button",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:k()}},r={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},o={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};x.parameters={docs:{source:{code:j}}};var t,n,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const P=["Primary","Secondary","Large","Small","Custom"];export{x as Custom,o as Large,r as Primary,e as Secondary,s as Small,P as __namedExportsOrder,N as default};
