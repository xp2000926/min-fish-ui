import{m as o,F as s,w as l,t as m,c,a as h,b as x,d as n}from"./FishProvider-fbpEsjVz.js";import{j as e}from"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";const v=o({provider:{border:"1px",borderRadius:"5px",padding:"5px"},text:{backgroundColor:n.colorBrandBackground2,color:n.colorBrandForeground2,fontSize:"20px",border:"1px",borderRadius:"5px",padding:"5px"}}),d=()=>{const r=v();return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(s,{className:r.provider,theme:l,children:e.jsx("div",{className:r.text,children:"Web Light Theme"})})}),e.jsx("div",{children:e.jsx(s,{className:r.provider,theme:m,children:e.jsx("div",{className:r.text,children:"Teams Light Theme"})})}),e.jsx("div",{children:e.jsx(s,{className:r.provider,theme:c,children:e.jsx("div",{className:r.text,children:"webDarkTheme"})})}),e.jsx("div",{children:e.jsx(s,{className:r.provider,theme:h,children:e.jsx("div",{className:r.text,children:"Teams Dark Theme"})})}),e.jsx("div",{children:e.jsx(s,{className:r.provider,theme:x,children:e.jsx("div",{className:r.text,children:"teamsHighContrastTheme"})})})]})},p=d;d.__docgenInfo={description:"",methods:[],displayName:"Default"};const u=`import { makeStyles } from "@griffel/react";\r
import {\r
  FishProvider,\r
  tokens,\r
  webLightTheme,\r
  teamsLightTheme,\r
  teamsDarkTheme,\r
  webDarkTheme,\r
  teamsHighContrastTheme,\r
} from "min-fish-ui";\r
\r
const useStyles = makeStyles({\r
  provider: {\r
    border: "1px",\r
    borderRadius: "5px",\r
    padding: "5px",\r
  },\r
  text: {\r
    backgroundColor: tokens.colorBrandBackground2,\r
    color: tokens.colorBrandForeground2,\r
    fontSize: "20px",\r
    border: "1px",\r
    borderRadius: "5px",\r
    padding: "5px",\r
  },\r
});\r
\r
const Default = () => {\r
  const styles = useStyles();\r
  return (\r
    <>\r
      <div>\r
        <FishProvider className={styles.provider} theme={webLightTheme}>\r
          <div className={styles.text}>Web Light Theme</div>\r
        </FishProvider>\r
      </div>\r
      <div>\r
        <FishProvider className={styles.provider} theme={teamsLightTheme}>\r
          <div className={styles.text}>Teams Light Theme</div>\r
        </FishProvider>\r
      </div>\r
      <div>\r
        <FishProvider className={styles.provider} theme={webDarkTheme}>\r
          <div className={styles.text}>webDarkTheme</div>\r
        </FishProvider>\r
      </div>\r
      <div>\r
        <FishProvider className={styles.provider} theme={teamsDarkTheme}>\r
          <div className={styles.text}>Teams Dark Theme</div>\r
        </FishProvider>\r
      </div>\r
      <div>\r
        <FishProvider\r
          className={styles.provider}\r
          theme={teamsHighContrastTheme}\r
        >\r
          <div className={styles.text}>teamsHighContrastTheme</div>\r
        </FishProvider>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default Default;\r
`,i=o({example:{backgroundColor:n.colorBrandBackground2,color:n.colorBrandForeground2,border:`5px solid ${n.colorBrandStroke1}`,borderRadius:"5px",margin:"5px"},text:{padding:"5px",fontSize:"18px"}}),a=()=>{const r=i();return e.jsx(s,{children:e.jsxs("div",{className:r.example,children:[e.jsx("div",{className:r.text,children:"Web Light Theme using brand tokens"}),e.jsx(s,{theme:{colorBrandStroke1:"red",colorBrandBackground2:"green",colorBrandForeground2:"yellow"},children:e.jsx(t,{})}),e.jsx(t,{})]})})};function t(){const r=i();return e.jsx("div",{className:r.example,children:e.jsx("div",{className:r.text,children:"Child Nested FishProvider with partial theme"})})}a.__docgenInfo={description:"",methods:[],displayName:"Nested"};const g=`import { makeStyles } from "@griffel/react";\r
import { tokens, FishProvider } from "min-fish-ui";\r
\r
const useStyles = makeStyles({\r
  example: {\r
    backgroundColor: tokens.colorBrandBackground2,\r
    color: tokens.colorBrandForeground2,\r
    border: \`5px solid \${tokens.colorBrandStroke1}\`,\r
    borderRadius: "5px",\r
    margin: "5px",\r
  },\r
  text: {\r
    padding: "5px",\r
    fontSize: "18px",\r
  },\r
});\r
\r
export const Nested = () => {\r
  const styles = useStyles();\r
  return (\r
    <FishProvider>\r
      <div className={styles.example}>\r
        <div className={styles.text}>Web Light Theme using brand tokens</div>\r
        <FishProvider\r
          theme={{\r
            colorBrandStroke1: "red",\r
            colorBrandBackground2: "green",\r
            colorBrandForeground2: "yellow",\r
            // 更多的 theme 属性\r
          }}\r
        >\r
          <Child />\r
        </FishProvider>\r
        <Child />\r
      </div>\r
    </FishProvider>\r
  );\r
};\r
\r
function Child() {\r
  const styles = useStyles();\r
  return (\r
    <div className={styles.example}>\r
      <div className={styles.text}>\r
        Child Nested FishProvider with partial theme\r
      </div>\r
    </div>\r
  );\r
}\r
`,b={title:"组件/FishProvider",component:s};p.parameters={docs:{source:{code:u}}};a.parameters={docs:{description:{story:"FishProvider 可以嵌套使用"},source:{code:g}}};const T=["Default","Nested"];export{p as Default,a as Nested,T as __namedExportsOrder,b as default};
